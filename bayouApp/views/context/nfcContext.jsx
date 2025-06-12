import React, { createContext, useContext, useEffect, useState, useRef } from 'react';

const NFCContext = createContext();

export const NFCProvider = ({ children }) => {
  const [status, setStatus] = useState('⏳ Waiting for card...');
  const [isDetected, setIsDetected] = useState(false);
  const [cardData, setCardData] = useState(null);
  const pollingRef = useRef(null); // for tracking the interval
  const previousState = useRef(null); // to detect change in detection state

  const pollCard = async () => {
    try {
      const res = await fetch('http://192.168.1.212:5000/check-card');
      const json = await res.json();

      const detected = json.status === 'detected';
      setIsDetected(detected);
      setStatus(json.message);

      if (detected) {
        const dataRes = await fetch('http://192.168.1.212:5000/get-card-data');
        const dataJson = await dataRes.json();

        if (dataJson.userId && dataJson.passkey) {
          setCardData({ userId: dataJson.userId, passkey: dataJson.passkey });
        } else {
        //   setCardData(null);
        }
      }
    } catch (err) {
      setStatus('⚠️ Cannot reach NFC service');
    //   setIsDetected(false);
    //   setCardData(null);
    }
  };

  useEffect(() => {
    const startPolling = (intervalTime) => {
      if (pollingRef.current) clearInterval(pollingRef.current);
      pollingRef.current = setInterval(pollCard, intervalTime);
    };

    // First run: pick appropriate interval
    startPolling(isDetected ? 10000 : 3000);
    previousState.current = isDetected;

    // Watch for state change: reset polling interval
    const intervalWatcher = setInterval(() => {
      if (previousState.current !== isDetected) {
        startPolling(isDetected ? 10000 : 3000);
        previousState.current = isDetected;
      }
    }, 5000); // check every second if detection state changed

    return () => {
      clearInterval(pollingRef.current);
      clearInterval(intervalWatcher);
    };
  }, [isDetected]);

  const registerCard = async (name, email) => {
    setStatus('🔄 Registering card...');
    try {
      const res = await fetch('http://192.168.1.212:5000/register-card', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      const json = await res.json();

      if (json.status === 'success') {
        setStatus('✅ Card registered successfully');
        setCardData({ userId: json.userId, passkey: json.passkey });
      } else {
        setStatus(`❌ ${json.error || 'Card registration failed'}`);
        setCardData(null);
      }
    } catch (err) {
      setStatus('⚠️ Failed to connect to NFC service');
      setCardData(null);
    }
  };

  return (
    <NFCContext.Provider value={{ status, isDetected, cardData, registerCard }}>
      {children}
    </NFCContext.Provider>
  );
};

export const useNFC = () => useContext(NFCContext);
