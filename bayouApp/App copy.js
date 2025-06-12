import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NFCProvider, useNFC } from './views/context/nfcContext';

// 🧠 Shows current NFC polling status
function NFCStatusDisplay() {
  const { status } = useNFC();

  return (
    <View style={{ marginTop: 20, alignItems: 'center' }}>
      <Text>{status}</Text>
    </View>
  );
}

// 📝 Registration form component
function RegisterCardForm() {
  const { registerCard } = useNFC();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={{ width: '80%', marginTop: 30 }}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <Button title="Register NFC Card" onPress={() => registerCard(name, email)} />
    </View>
  );
}

// 🎯 Conditionally render based on card presence
function NFCInteractionPanel() {
  const { cardData } = useNFC();

  if (cardData) {
    return (
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text>User ID: {cardData.userId}</Text>
        <Text>Passkey: {cardData.passkey}</Text>
        <View style={{ marginTop: 15 }}>
          <Button title="Edit Info" onPress={() => alert('Edit flow coming soon')} />
        </View>
      </View>
    );
  }

  return <RegisterCardForm />;
}

export default function App() {
  return (
    <NFCProvider>
      <View style={styles.container}>
        <Text style={styles.header}>Bayou NFC Registration</Text>
        <NFCInteractionPanel />
        <NFCStatusDisplay />
        <StatusBar style="auto" />
      </View>
    </NFCProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
