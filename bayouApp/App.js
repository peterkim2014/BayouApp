// App.js
import { NativeRouter, Routes, Route, Navigate } from 'react-router-native';
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { createMemoryHistory } from 'history';
import * as Font from 'expo-font';

import Navbar from './routes/Navbar';
import styles from './styles/appStyle';

import ThreadHome from './pages/threads/ThreadHome';
import ProfileHome from './pages/profile/ProfileHome';
import NetworkHome from './pages/network/NetworkHome';
import CampaignHome from './pages/campaigns/CampaignHome';
import CampaignDetail from './pages/campaigns/CampaignDetail';
import BurstHome from './pages/burst/BurstHome';
import CampaignCategory from './pages/campaigns/CampaignCategory';
import CampaignWaitlist from './pages/campaigns/CampaignWaitlist';
import NetworkSearch from './pages/network/NetworkSearch';
import SelectedProfile from './pages/profile/SelectedProfile';
import NewPost from './pages/utils/NewPost';
import MessagingHome from './pages/utils/MessagingHome';
import MessagingRoom from './pages/utils/MessagingRoom';

// ✅ Set initial route to "/thread"
const history = createMemoryHistory({ initialEntries: ['/'] });

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
    <NativeRouter
      history={history}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <View style={styles.container}>
        <Navbar />
        <Routes>
          {/* 🔁 Redirect "/" to "/thread" */}
          <Route path="/" element={<Navigate to="/thread" replace />} />
          <Route path="/thread" element={<ThreadHome />} />
          <Route path="/thread/new-post" element={<NewPost />} />
          <Route path="/messaging-room" element={<MessagingRoom />} />
          <Route path="/profile" element={<ProfileHome />} />
          <Route path="/network/selected-profile" element={<SelectedProfile />} />
          <Route path="/network/messaging" element={<MessagingHome />} />
          <Route path="/network" element={<NetworkHome />} />
          <Route path="/network/search" element={<NetworkSearch />} />
          <Route path="/campaign" element={<CampaignHome />} />
          <Route path="/burst" element={<BurstHome />} />
          <Route path="/campaign/:id" element={<CampaignDetail />} />
          <Route path="/campaign/:id/waitlist" element={<CampaignWaitlist />} />
          <Route path="/campaign/category/:categoryName" element={<CampaignCategory />} />
        </Routes>
      </View>
    </NativeRouter>
  );
}
