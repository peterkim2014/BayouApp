import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated, PanResponder
} from 'react-native';
import { Asset } from 'expo-asset';
import styles from '../../styles/pages/profile/profileHome';

import profileImage from '../../assets/profileBackground.png';
import settingsIcon from '../../assets/settingsIcon.png'; // gear icon
// import placeholderAvatar from '../../assets/placeholderAvatar.png'; 
import HeaderCurve from '../../components/HeaderCurve';

const { width } = Dimensions.get('window');

export default function ProfileHome() {
  const [activeTab, setActiveTab] = useState('Lifestyle');
  const [imageLoaded, setImageLoaded] = useState(false);
  const translateY = useRef(new Animated.Value(0)).current;

const panResponder = useRef(
  PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) =>
      Math.abs(gestureState.dy) > 10,
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dy < -50) {
        // Snap Up
        Animated.spring(translateY, {
          toValue: -165,
          useNativeDriver: true,
        }).start();
      } else if (gestureState.dy > 50) {
        // Snap Down
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      } else {
        // Return to current
        Animated.spring(translateY, {
          toValue: translateY._value < -80 ? -165 : 0,
          useNativeDriver: true,
        }).start();
      }
    },
  })
).current;

const fadeOutOpacity = translateY.interpolate({
  inputRange: [-165, -50, 0],
  outputRange: [0, 0.3, 1],
  extrapolate: 'clamp',
});



  const sampleData = {
    Lifestyle: Array.from({ length: 6 }, (_, i) => ({ id: `${i}`, label: '' })),
    Campaigns: [],
    Comments: [],
  };

  useEffect(() => {
    const load = async () => {
      await Asset.loadAsync([profileImage]);
      setImageLoaded(true);
    };
    load();
  }, []);

  return (
  <View style={styles.container}>
    {imageLoaded && (
      <View style={styles.headerContainer}>
        <ImageBackground
          source={profileImage}
          style={styles.headerImage}
          resizeMode="cover"
        >
          <TouchableOpacity style={styles.settingsIcon}>
            <Image source={settingsIcon} style={styles.settingsImage} />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.curveWrapper}>
          <HeaderCurve height={20} color="#fff" />
        </View>
      </View>
    )}

    {/* ✅ Fixed profile picture outside translateY */}
    <View style={styles.profileImageWrapper}>
      <View style={styles.blankProfileCircle} />
    </View>

    {/* ✅ All sliding content here */}
    <Animated.View
      style={[styles.profileCard, { transform: [{ translateY }] }]}
      {...panResponder.panHandlers}
    >
      <Animated.View style={{ opacity: fadeOutOpacity }}>
        <Text style={styles.name}>Freddy Mac</Text>
        <Text style={styles.username}>@Justfilming</Text>
        <Text style={styles.bio}>
          This is my tagline and I’m going to write something that helps market myself to be more exposed
        </Text>

        <View style={styles.statsCard}>
          <View style={styles.statBlock}>
            <Text style={styles.statNumber}>354</Text>
            <Text style={styles.statLabel}>Audience</Text>
          </View>
          <View style={styles.statBlock}>
            <Text style={styles.statNumber}>13</Text>
            <Text style={styles.statLabel}>Impact</Text>
          </View>
          <View style={styles.statBlock}>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statLabel}>Connects</Text>
          </View>
        </View>
      </Animated.View>

      <View style={styles.tabRow}>
        {['Lifestyle', 'Campaigns', 'Comments'].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
            {activeTab === tab && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={sampleData[activeTab]}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={styles.gridRow}
        contentContainerStyle={styles.grid}
        renderItem={() => <View style={styles.gridBox} />}
      />
    </Animated.View>
  </View>

  );
}
