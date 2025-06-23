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
  const scrollOffsetRef = useRef(0); // Live scroll position
  const [snapped, setSnapped] = useState(false);
  const [phase, setPhase] = useState('outer'); // 'outer' or 'inner'
  const [innerUnlocked, setInnerUnlocked] = useState(false);
const innerScrollRef = useRef(null);
const innerScrollY = useRef(0); // live tracker

  const [activeTab, setActiveTab] = useState('Creators');
  const scrollRef = useRef(null);
  const isSnappingRef = useRef(false);

  const mockPeople = [
    { name: 'John Doe', title: 'Golf Influencer' },
    { name: 'Jane Doe', title: 'Beauty Influencer' },
    { name: 'James Doe', title: 'Music Producer' },
  ];

  const profileCardWidth = scrollY.interpolate({
    inputRange: [0, snapHeight],
    outputRange: [width * 0.32, width * -0.20],
    extrapolate: 'clamp',
  });
  

  const profileCardHeight = scrollY.interpolate({
    inputRange: [0, snapHeight],
    outputRange: [205, -320],
    extrapolate: 'clamp',
  });

  const profileBorderRadius = scrollY.interpolate({
    inputRange: [0, snapHeight],
    outputRange: [8, 110],
    extrapolate: 'clamp',
  });

  const profileTranslateY = scrollY.interpolate({
    inputRange: [0, snapHeight],
    outputRange: [0, -34],
    extrapolate: 'clamp',
  });

  const animatedHeaderHeight = scrollY.interpolate({
    inputRange: [0, snapHeight],
    outputRange: [320, 50],
    extrapolate: 'clamp',
  });

  const animatedHeaderPadding = scrollY.interpolate({
    inputRange: [0, snapHeight],
    outputRange: [60, 60],
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
      duration: 10, // 5 is too fast
      useNativeDriver: false,
    }).start(() => {
      scrollRef.current?.scrollTo({ y: snapTo, animated: false });
      setSnapped(shouldSnapUp);
      isSnappingRef.current = false;
    });
  };
  

  return (
    <View style={styles.networkContainer}>
      {/* Header */}
      <Animated.View style={[styles.networkHeaderContainer, { height: animatedHeaderHeight, paddingTop: animatedHeaderPadding }]}>

      <Animated.View
        style={[
          styles.insetShadowBottom,
          {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 55,
            height: 30,
            top: scrollY.interpolate({
              inputRange: [0, snapHeight],
              outputRange: [280, 0],
              extrapolate: 'clamp',
            }),
          },
        ]}
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.12)']}
          style={{ flex: 1, borderRadius: 20 }}
          pointerEvents="none"
        />
      </Animated.View>

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
              // marginTop: 10,
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
                    transform: [
                      { translateY: profileTranslateY },
                      {
                        scale: scrollY.interpolate({
                          inputRange: [0, snapHeight],
                          outputRange: [1, 1], // keep scale 1 for now
                          extrapolate: 'clamp',
                        }),
                      },
                    ],
                    borderRadius: profileBorderRadius,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: scrollY.interpolate({
                      inputRange: [0, snapHeight],
                      outputRange: [width * 0.32, width * -0.1],
                      extrapolate: 'clamp',
                    }),
                    marginTop: scrollY.interpolate({
                      inputRange: [0, snapHeight],
                      outputRange: [10, -85],
                      extrapolate: 'clamp',
                    }),
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
                      fontSize: scrollY.interpolate({
                        inputRange: [0, snapHeight / 2],
                        outputRange: [12, -10],
                        extrapolate: 'clamp',
                      }),
                      height: width * 0,
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
                        outputRange: [1, -101],
                        extrapolate: 'clamp',
                      }),
                      fontSize: scrollY.interpolate({
                        inputRange: [0, snapHeight / 2],
                        outputRange: [12, 0],
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
      </Animated.View>

      {/* Scrollable Body (What's Happening) */}
      <Animated.ScrollView
        ref={scrollRef}
        bounces={false}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        scrollEnabled={phase === 'outer'}
        onScroll={(e) => {
          const offsetY = e.nativeEvent.contentOffset.y;
          const clampedY = Math.max(0, Math.min(66, offsetY));
        
          scrollY.setValue(clampedY);
        
          // Only transition once, when locked at 65
          if (clampedY === 66 && phase !== 'inner') {
            setPhase('inner');
            setSnapped(true);
            scrollRef.current?.scrollTo({ y: 66, animated: false });
          }
        
          if (clampedY < 66 && phase !== 'outer') {
            setPhase('outer');
          }
        }}
        onScrollEndDrag={handleScrollEnd}
        onMomentumScrollEnd={handleScrollEnd}
        scrollEventThrottle={10}
        contentContainerStyle={styles.scrollBodyContent}
      >
        <View style={styles.scrollBody}>
          <Text style={styles.sectionTitle}>What's happening</Text>

          {/* PHASE 3: Inner Scroll */}
          <Animated.ScrollView
            ref={innerScrollRef}
            scrollEnabled={phase === 'inner'}
            onScroll={(e) => {
              const innerOffset = e.nativeEvent.contentOffset.y;
              innerScrollY.current = innerOffset;
            
              // Prevent inner from scrolling down unless it's active
              if (phase === 'inner' && innerOffset <= 0) {
                setPhase('outer');
                scrollRef.current?.scrollTo({ y: 0, animated: true });
              }
            }}
            scrollEventThrottle={10}
            style={{ maxHeight: Dimensions.get('window').height - 130 }}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.gridContainer}>
              {Array(24)
                .fill(null)
                .map((_, i) => (
                  <View key={i} style={styles.gridItem} />
                ))}
            </View>
          </Animated.ScrollView>
        </View>
      </Animated.ScrollView>

    </View>
  );
}
