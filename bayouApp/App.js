// App.js
import { NativeRouter, Routes, Route } from 'react-router-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StatusBar, TouchableOpacity, Text, Image, ActivityIndicator } from 'react-native';
import Navbar from './routes/Navbar';
import styles from './styles/appStyle';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import ThreadHome from './pages/threads/ThreadHome';
import ProfileHome from './pages/profile/ProfileHome';
import NetworkHome from './pages/network/NetworkHome';
import CampaignHome from './pages/campaigns/CampaignHome';


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        await Font.loadAsync({
          'OpenSans': require('./assets/fonts/OpenSansRegular.ttf'),
        });
  
        Text.defaultProps = Text.defaultProps || {};
        Text.defaultProps.style = [
          Text.defaultProps.style || {},
          { fontFamily: 'OpenSans' },
        ];
  
        setFontsLoaded(true);
      } catch (error) {
        console.warn('❌ Font failed to load:', error);
      }
    };
  
    load();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NativeRouter>
      <View style={styles.container}>
        <Navbar />
        <Routes>
         <Route path="/" element={<ThreadHome />} />
         <Route path="/profile" element={<ProfileHome />} />
         <Route path="/network" element={<NetworkHome />} />
         <Route path="/campaign" element={<CampaignHome />} />
        </Routes>
      </View>
    </NativeRouter>
  );
}
