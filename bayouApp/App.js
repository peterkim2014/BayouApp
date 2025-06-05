import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NFCProvider, useNFC } from './views/context/nfcContext';

// Inline example component
function NFCStatusDisplay() {
  const { status, isDetected } = useNFC();

  return (
    <View style={{ marginTop: 20, alignItems: 'center' }}>
      <Text>{status}</Text>
      {isDetected && <Text style={{ marginTop: 10 }}>Card is present!</Text>}
    </View>
  );
}

export default function App() {
  return (
    <NFCProvider>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
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
  },
});
