// App.js
import { NativeRouter, Routes, Route } from 'react-router-native';
import React from 'react';
import { SafeAreaView, View, StatusBar, TouchableOpacity, Text, Image } from 'react-native';
import Navbar from './routes/Navbar';
import styles from './styles/appStyle';

import ThreadHome from './pages/threads/ThreadHome';

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Navbar />
        <Routes>
         <Route path="/" element={<ThreadHome />} />
        </Routes>
      </View>
    </NativeRouter>
  );
}
