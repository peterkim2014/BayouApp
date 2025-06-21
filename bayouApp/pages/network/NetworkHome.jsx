import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/pages/network/networkHome';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const TABS = ['Creators', 'Brands', 'Viewers'];

export default function NetworkHome() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [activeTab, setActiveTab] = useState('Creators');
  const scrollViewRef = useRef(null);
  const snapPoint = 25;

  const [snapped, setSnapped] = useState(false);

  // Interpolated values
  const profileCardWidth = scrollY.interpolate({
    inputRange: [0, snapPoint],
    outputRange: [120, 80],
    extrapolate: 'clamp',
  });

  const profileCardHeight = scrollY.interpolate({
    inputRange: [0, snapPoint],
    outputRange: [205, 80],
    extrapolate: 'clamp',
  });

  const profileBorderRadius = scrollY.interpolate({
    inputRange: [0, snapPoint],
    outputRange: [8, 80],
    extrapolate: 'clamp',
  });

  const profileTranslateY = scrollY.interpolate({
    inputRange: [0, snapPoint],
    outputRange: [0, 0],
    extrapolate: 'clamp',
  });

  const contentOffset = scrollY.interpolate({
    inputRange: [0, snapPoint],
    outputRange: [25, 20],
    extrapolate: 'clamp',
  });

  // On scroll end, force snap
  const handleScrollEndDrag = (e) => {
    const y = e.nativeEvent.contentOffset.y;
    const target = y < snapPoint / 2 ? snapPoint : 0;

    if ((target === snapPoint && !snapped) || (target === 0 && snapped)) {
      scrollViewRef.current?.scrollTo({ y: target, animated: true });
      setSnapped(target === snapPoint);
    }
  };

  const mockPeople = [
    { name: 'John Doe', title: 'Golf Influencer' },
    { name: 'Jane Doe', title: 'Beauty Influencer' },
    { name: 'James Doe', title: 'Music Producer' },
  ];

  return (
    <View style={styles.networkContainer}>
      {/* Header */}
      <View style={styles.networkHeaderContainer}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.12)']}
          locations={[0, 1]}
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

        <Animated.View
          style={[
            {
              transform: [{ translateY: profileTranslateY }],
              marginTop: 10,
            },
          ]}
        >
          <ScrollView
            horizontal
            contentContainerStyle={styles.profileScroll}
            showsHorizontalScrollIndicator={false}
          >
            {mockPeople.map((person, index) => (
              <Animated.View
                key={index}
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
                        inputRange: [0, snapPoint / 2],
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
                        inputRange: [0, snapPoint / 2],
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
          </ScrollView>
        </Animated.View>
      </View>

      {/* Scrollable Body */}
      <View style={styles.scrollBodyWrapper}>
      <Animated.ScrollView
        ref={scrollViewRef}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        onScrollEndDrag={handleScrollEndDrag}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollBodyContent}
      >
        <View style={{ height: snapped ? 20 : -300 }} />
        
        <View style={styles.scrollBody}>
          <Text style={styles.sectionTitle}>Whats happening</Text>
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
    </View>
  );
}
