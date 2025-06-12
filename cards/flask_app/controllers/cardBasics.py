from flask import Flask, request, render_template, jsonify
from flask_app import app  # or replace with: app = Flask(__name__) if standalone
from smartcard.System import readers
from smartcard.util import toBytes
from smartcard.Exceptions import NoCardException
import requests
import uuid, secrets
import nfc
import usb.core

# 🔍 Check for NFC card presence
def check_card_presence():
    try:
        # print(usb.core.find())
        r = readers()
        if not r:
            return {"status": "error", "message": "No NFC reader found."}

        reader = r[0]
        connection = reader.createConnection()
        connection.connect()
        return {"status": "detected", "message": "✅ NFC card detected and connected."}

    except NoCardException:
        return {"status": "not_detected", "message": "❌ No NFC card detected."}
    except Exception as e:
        return {"status": "error", "message": f"⚠️ Error accessing card: {str(e)}"}

# 📝 Write data to NFC card
def write_card(user_id, passkey):
    try:
        print("[NFC] Attempting to write to card...")
        r = readers()
        if not r:
            print("[NFC] No NFC reader found.")
            return False

        connection = r[0].createConnection()
        connection.connect()
        print("[NFC] Connected to reader")

        # Load key
        load_key = [0xFF, 0x82, 0x00, 0x00, 0x06] + [0xFF]*6
        resp = connection.transmit(load_key)
        print("[NFC] Load key response:", resp)

        # Try block 8 instead of 4
        block_num = 8
        auth_cmd = [0xFF, 0x86, 0x00, 0x00, 0x05,
                    0x01, 0x00, block_num, 0x60, 0x00]
        resp = connection.transmit(auth_cmd)
        print("[NFC] Auth response:", resp)

        payload = f"{user_id}:{passkey}"[:16]
        data_bytes = list(payload.encode('utf-8'))
        while len(data_bytes) < 16:
            data_bytes.append(0x20)  # pad with spaces

        write_cmd = [0xFF, 0xD6, 0x00, block_num, 0x10] + data_bytes
        response, sw1, sw2 = connection.transmit(write_cmd)
        print("[NFC] Write response:", response, sw1, sw2)

        return sw1 == 0x90 and sw2 == 0x00

    except Exception as e:
        print("[NFC] Error writing to card:", e)
        return False




# 🌐 Root route (optional UI)
@app.route('/')
def index():
    return render_template('index.html')

# 🔁 Poll for card presence
@app.route('/check-card')
def check_card():
    return jsonify(check_card_presence())

# 🌐 Web-based registration (form UI)
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']

        user_id = str(uuid.uuid4())[:8]
        passkey = secrets.token_urlsafe(6)[:8]

        # Optional: Save user info to database here

        write_result = write_card(user_id, passkey)
        if not write_result:
            return jsonify({"status": "error", "message": "Failed to write card"})

        return jsonify({"status": "success", "userId": user_id, "passkey": passkey})
    return render_template('register.html')

# 📲 JSON API registration (used by Expo frontend)
@app.route('/register-card', methods=['POST'])
def register_card():
    try:
        data = request.get_json()
        print("data: ", data)
        name = data.get('name')
        email = data.get('email')

        if not name or not email:
            return jsonify({"error": "Missing name or email"}), 400

        user_id = str(uuid.uuid4())[:8]
        passkey = secrets.token_urlsafe(6)[:8]

        # Optional: Save user info to database here

        write_success = write_card(user_id, passkey)
        print("write success: ", write_success)
        if not write_success:
            return jsonify({"error": "Failed to write to card"}), 500

        return jsonify({
            "status": "success",
            "userId": user_id,
            "passkey": passkey
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500
