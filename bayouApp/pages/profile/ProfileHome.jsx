import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Animated,
  ScrollView,
  Dimensions,
  PanResponder,
  StyleSheet,
} from 'react-native';
import { Asset } from 'expo-asset';
import styles from '../../styles/pages/profile/profileHome';
import profileImage from '../../assets/profileBackground.png';
import settingsIcon from '../../assets/settingsIcon.png';
import HeaderCurve from '../../components/HeaderCurve';

const { width } = Dimensions.get('window');
const screenHeight = Dimensions.get('window').height;

export default function ProfileHome() {
  const [activeTab, setActiveTab] = useState('Lifestyle');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const translateY = useRef(new Animated.Value(0)).current;
  const scrollAtTopRef = useRef(true);

  const fadeOutOpacity = translateY.interpolate({
    inputRange: [-165, -80, 0],
    outputRange: [0, 0.3, 1],
    extrapolate: 'clamp',
  });

  const sampleData = {
    Lifestyle: Array.from({ length: 18 }, (_, i) => ({ id: `${i}` })),
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

      {/* Profile Picture */}
      <View style={styles.profileImageWrapper}>
        <View style={styles.blankProfileCircle} />
      </View>

      <Animated.View
  style={[
    styles.profileCard,
    {
      transform: [{ translateY }],
      flex: 1,
      minHeight: isCollapsed ? screenHeight - 230 : undefined, // ensures enough space when collapsed
    },
  ]}
>

        {/* Content that fades in/out */}
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

        {/* Tabs */}
        <View style={styles.tabRow}>
          {['Lifestyle', 'Campaigns', 'Comments'].map((tab) => (
            <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
              {activeTab === tab && <View style={styles.tabIndicator} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* ScrollView Interaction */}
        <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={styles.grid}
          scrollEnabled={true}
          scrollEventThrottle={16}
          onScroll={(e) => {
            const offsetY = e.nativeEvent.contentOffset.y;
            scrollAtTopRef.current = offsetY <= 0;
          }}
          onScrollEndDrag={(e) => {
            const offsetY = e.nativeEvent.contentOffset.y;
            const velocityY = e.nativeEvent.velocity?.y || 0;

            // 🧠 Flick up = velocityY > 0 (toward negative offset)
            if (!isCollapsed && velocityY > 0.25) {
              Animated.spring(translateY, {
                toValue: -165,
                useNativeDriver: true,
              }).start(() => {
                setIsCollapsed(true);
              });
            }

            // 🧠 Flick down at scroll top = expand
            if (isCollapsed && scrollAtTopRef.current && velocityY < -0.25) {
              Animated.spring(translateY, {
                toValue: 0,
                useNativeDriver: true,
              }).start(() => {
                setIsCollapsed(false);
              });
            }
          }}
        >
          {sampleData[activeTab].map((item) => (
            <View key={item.id} style={styles.gridBox} />
          ))}
        </ScrollView>
        </View>
      </Animated.View>

    </View>
  );
}


