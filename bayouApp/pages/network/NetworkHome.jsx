import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/pages/network/networkHome';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const TABS = ['Creators', 'Brands', 'Viewers'];
const snapHeight = 250; // How far down the "What's Happening" section moves when active

export default function NetworkHome() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [snapped, setSnapped] = useState(false);
  const [activeTab, setActiveTab] = useState('Creators');
  const scrollRef = useRef(null);
  const isSnappingRef = useRef(false);

  const mockPeople = [
    { name: 'John Doe', title: 'Golf Influencer' },
    { name: 'Jane Doe', title: 'Beauty Influencer' },
    { name: 'James Doe', title: 'Music Producer' },
  ];

  // Interpolated values for profile cards
  const profileCardWidth = scrollY.interpolate({
    inputRange: [0, snapHeight],
    outputRange: [120, 80],
    extrapolate: 'clamp',
  });

  const profileCardHeight = scrollY.interpolate({
    inputRange: [0, snapHeight],
    outputRange: [205, 80],
    extrapolate: 'clamp',
  });

  const profileBorderRadius = scrollY.interpolate({
    inputRange: [0, snapHeight],
    outputRange: [8, 80],
    extrapolate: 'clamp',
  });

  const profileTranslateY = scrollY.interpolate({
    inputRange: [0, snapHeight],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });

  const handleScrollEnd = (e) => {
    const offsetY = e.nativeEvent.contentOffset.y;
  
    if (isSnappingRef.current) return; // Prevent re-triggering during snap
  
    const shouldSnapUp = offsetY > snapHeight / 2;
    const snapTo = shouldSnapUp ? snapHeight : 0;
  
    if ((shouldSnapUp && snapped) || (!shouldSnapUp && !snapped)) return; // Already in correct state
  
    isSnappingRef.current = true; // Lock
  
    Animated.timing(scrollY, {
      toValue: snapTo,
      duration: 180,
      useNativeDriver: false,
    }).start(() => {
      scrollRef.current?.scrollTo({ y: snapTo, animated: false });
      setSnapped(shouldSnapUp);
      isSnappingRef.current = false; // Unlock
    });
  };
  

  return (
    <View style={styles.networkContainer}>
      {/* Header */}
      <View style={styles.networkHeaderContainer}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.12)']}
          style={styles.insetShadowBottom}
          pointerEvents="none"
        />
        <Text style={styles.networkHeaderTitle}>
          Where the connection{'\n'}meets collaboration
        </Text>
        <TouchableOpacity style={styles.searchIcon}>
          <Ionicons name="search" size={20} color="#000" />
        </TouchableOpacity>

        <View style={styles.tabRow}>
          {TABS.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Animated Profile Cards */}
        <Animated.View
          style={[
            {
              transform: [{ translateY: profileTranslateY }],
              marginTop: 10,
            },
          ]}
        >
          <Animated.ScrollView
            horizontal
            contentContainerStyle={styles.profileScroll}
            showsHorizontalScrollIndicator={false}
          >
            {mockPeople.map((person, i) => (
              <Animated.View
                key={i}
                style={[
                  styles.profileCard,
                  {
                    height: profileCardHeight,
                    width: profileCardWidth,
                    borderRadius: profileBorderRadius,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}
              >
                <Animated.View
                  style={[
                    styles.profilePlaceholder,
                    {
                      height: profileCardHeight,
                      width: profileCardWidth,
                      borderRadius: profileBorderRadius,
                    },
                  ]}
                />
                <Animated.Text
                  style={[
                    styles.name,
                    {
                      opacity: scrollY.interpolate({
                        inputRange: [0, snapHeight / 2],
                        outputRange: [1, 0],
                        extrapolate: 'clamp',
                      }),
                    },
                  ]}
                >
                  {person.name}
                </Animated.Text>
                <Animated.Text
                  style={[
                    styles.title,
                    {
                      opacity: scrollY.interpolate({
                        inputRange: [0, snapHeight / 2],
                        outputRange: [1, 0],
                        extrapolate: 'clamp',
                      }),
                    },
                  ]}
                >
                  {person.title}
                </Animated.Text>
              </Animated.View>
            ))}
          </Animated.ScrollView>
        </Animated.View>
      </View>

      {/* Scrollable Body (What's Happening) */}
      <Animated.ScrollView
        ref={scrollRef}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        onScrollEndDrag={handleScrollEnd}
        onMomentumScrollEnd={handleScrollEnd}
        scrollEventThrottle={15}
        contentContainerStyle={styles.scrollBodyContent}
      >
        <View style={styles.scrollBody}>
          <Text style={styles.sectionTitle}>What's happening</Text>
          <View style={styles.gridContainer}>
            {Array(12)
              .fill(null)
              .map((_, i) => (
                <View key={i} style={styles.gridItem} />
              ))}
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
}
