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
} from 'react-native';
import { Asset } from 'expo-asset';
import styles from '../../styles/pages/profile/profileHome';
import profileImage from '../../assets/profileBackground.png';
import settingsIcon from '../../assets/settingsIcon.png';
import HeaderCurve from '../../components/HeaderCurve';

const screenHeight = Dimensions.get('window').height;

export default function ProfileHome() {
  const [activeTab, setActiveTab] = useState('Lifestyle');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const scrollRef = useRef(null);
  const scrollOffsetY = useRef(0);
  const collapsedRef = useRef(false);

  const translateY = useRef(new Animated.Value(0)).current;

  const collapseDistance = -115;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) => {
        const isAtTop = scrollOffsetY.current <= 0;
        if (!collapsedRef.current && gesture.dy < -10) return true;
        if (collapsedRef.current && gesture.dy > 10 && isAtTop) return true;
        return false;
      },
      onPanResponderMove: (_, gesture) => {
        const dy = gesture.dy;
        if (collapsedRef.current && dy > 0) {
          const offset = collapseDistance + dy * 0.25;
          translateY.setValue(Math.min(offset, 0));
        } else if (!collapsedRef.current && dy < 0) {
          const offset = Math.max(collapseDistance, dy);
          translateY.setValue(offset);
        }
      },
      onPanResponderRelease: (_, gesture) => {
        const dy = gesture.dy;

        if (!collapsedRef.current && dy < -15) {
          Animated.timing(translateY, {
            toValue: collapseDistance,
            duration: 280,
            useNativeDriver: true,
          }).start(() => {
            setCollapsed(true);
            collapsedRef.current = true;
          });
        } else if (collapsedRef.current && dy > 100) {
          Animated.timing(translateY, {
            toValue: 0,
            duration: 220,
            useNativeDriver: true,
          }).start(() => {
            setCollapsed(false);
            collapsedRef.current = false;
          });
        } else {
          Animated.timing(translateY, {
            toValue: collapsedRef.current ? collapseDistance : 0,
            duration: 200,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  const sampleData = {
    Lifestyle: Array.from({ length: 18 }, (_, i) => ({ id: `${i}` })),
    Campaigns: [],
    Comments: [],
  };

  const fadeOutOpacity = translateY.interpolate({
    inputRange: [-115, -45, 0],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });

  const fadeOutOpacityStats = translateY.interpolate({
    inputRange: [-115, -60, 0],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });


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

      <View style={styles.profileImageWrapper}>
        <View style={styles.blankProfileCircle} />
      </View>

      <View style={styles.profileUserHeader}>
        <Text style={styles.name}>Freddy Mac</Text>
        <Text style={styles.username}>@Justfilming</Text>
      </View>

      <Animated.View
        style={[
          styles.profileCard,
          { transform: [{ translateY }], flex: 1 },
        ]}
        {...panResponder.panHandlers}
      >
        <Animated.View style={{ opacity: fadeOutOpacity }}>
          <Text style={styles.bio}>
            This is my tagline and I’m going to write something that helps market myself to be more exposed
          </Text>
        </Animated.View>
        <Animated.View style={{ opacity: fadeOutOpacityStats }}>
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

        {/* Scrollable Content */}
        <ScrollView
          ref={scrollRef}
          scrollEnabled={collapsed}
          onScroll={(e) => {
            scrollOffsetY.current = e.nativeEvent.contentOffset.y;
          }}
          scrollEventThrottle={16}
          contentContainerStyle={styles.grid}
          showsVerticalScrollIndicator={false}
          bounces={false}
          overScrollMode="never"
        >
          {sampleData[activeTab].map((item) => (
            <View key={item.id} style={styles.gridBox} />
          ))}
        </ScrollView>
      </Animated.View>
    </View>
  );
}
