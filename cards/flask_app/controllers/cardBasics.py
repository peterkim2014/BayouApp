from flask import Flask, request, render_template, jsonify
from flask_app import app
from smartcard.System import readers
from smartcard.Exceptions import NoCardException
import requests

def check_card_presence():
    try:
        print("Readers:", readers())
        r = readers()
        if not r:
            return {"status": "error", "message": "No NFC reader found."}

        reader = r[0]
        connection = reader.createConnection()
        connection.connect()  
        return {"status": "detected", "message": "NFC card detected and connected."}

    except NoCardException:
        return {"status": "not_detected", "message": "❌ No NFC card detected."}
    except Exception as e:
        return {"status": "error", "message": f"⚠️ Error accessing card: {str(e)}"}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/check-card')
def check_card():
    return jsonify(check_card_presence())
