// src/context/NFCContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const NFCContext = createContext();

export const NFCProvider = ({ children }) => {
  const [status, setStatus] = useState('⏳ Waiting for card...');
  const [isDetected, setIsDetected] = useState(false);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch('http://192.168.1.212:5000/check-card');
        const json = await res.json();

        setStatus(json.message);
        setIsDetected(json.status === 'detected');
      } catch (err) {
        setStatus('⚠️ Cannot reach NFC service');
        setIsDetected(false);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <NFCContext.Provider value={{ status, isDetected }}>
      {children}
    </NFCContext.Provider>
  );
};

export const useNFC = () => useContext(NFCContext);
