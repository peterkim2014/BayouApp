// pages/NetworkHome.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../styles/pages/network/networkHome';
import useScrollBehavior from '../../components/useScrollBehavior';
import { useNavigate } from 'react-router-native';

const { width, height } = Dimensions.get('window');
const TABS = ['Creators', 'Brands', 'Viewers'];
const snapHeight = 250;

export default function NetworkHome() {
  const {
    scrollY,
    scrollRef,
    innerScrollRef,
    phase,
    setPhase,
    handleScrollEnd,
    handleOuterScroll,
    handleInnerScroll,
    outerScrollEnabled,
  } = useScrollBehavior(snapHeight);
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('Creators');

  const mockPeople = [
    { name: 'John Doe', title: 'Golf Influencer' },
    { name: 'Jane Doe', title: 'Beauty Influencer' },
    { name: 'James Doe', title: 'Music Producer' },
  ];

  const profileCardWidth = scrollY.interpolate({
    inputRange: [0, snapHeight],
    outputRange: [width * 0.32, width * 0.16],
    extrapolate: 'clamp',
  });

  const profileCardHeight = scrollY.interpolate({
    inputRange: [0, snapHeight],
    outputRange: [170, 55],
    extrapolate: 'clamp',
  });

  const profileBorderRadius = scrollY.interpolate({
    inputRange: [0, snapHeight],
    outputRange: [8, 110],
    extrapolate: 'clamp',
  });

  const profileTranslateY = scrollY.interpolate({
    inputRange: [0, snapHeight],
    outputRange: [-15, -35],
    extrapolate: 'clamp',
  });

  const animatedHeaderHeight = scrollY.interpolate({
    inputRange: [0, snapHeight],
    outputRange: [320, 220],
    extrapolate: 'clamp',
  });

  const animatedHeaderPadding = scrollY.interpolate({
    inputRange: [0, snapHeight],
    outputRange: [60, 60],
    extrapolate: 'clamp',
  });


  return (
    <View style={styles.networkContainer}>
      <Animated.View
        style={[
          styles.networkHeaderContainer,
          {
            height: animatedHeaderHeight,
            paddingTop: animatedHeaderPadding,
          },
        ]}
      >
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
                outputRange: [280, 190],
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

        <TouchableOpacity style={styles.searchIcon} onPress={() => navigate('/network/search')}>
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
          style={{ transform: [{ translateY: profileTranslateY }] }}
          // contentContainerStyle={}
        >
        <Animated.ScrollView
          horizontal
          // bounces={false}
          // overScrollMode="never"
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={false} 
          contentContainerStyle={styles.profileScroll}
          style={styles.profileScroll}
        >

            {mockPeople.map((person, i) => (
              <Animated.View
                key={i}
                style={[
                  styles.profileCard,
                  {
                    transform: [{ translateY: profileTranslateY }],
                    borderRadius: profileBorderRadius,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: profileCardWidth,
                    marginTop: scrollY.interpolate({
                      inputRange: [0, snapHeight],
                      outputRange: [10, -10],
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
                      fontSize: scrollY.interpolate({
                        inputRange: [0, snapHeight / 2],
                        outputRange: [12, 0.01], // ✅ Don't go negative
                        extrapolate: 'clamp',
                      }),
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

      {/* What's Happening */}
      <Animated.ScrollView
        ref={scrollRef}
        bounces={false}
        overScrollMode="never"
        scrollEnabled={outerScrollEnabled}
        showsVerticalScrollIndicator={false}
        onScroll={handleOuterScroll}
        onScrollEndDrag={handleScrollEnd}
        onMomentumScrollEnd={handleScrollEnd}
        scrollEventThrottle={10}
        contentContainerStyle={styles.scrollBodyContent}
      >
        <Animated.View
          style={[
            styles.scrollBody,
            {
              marginTop: scrollY.interpolate({
                inputRange: [0, snapHeight],
                outputRange: [0, 150],
                extrapolate: 'clamp',
              }),
            },
          ]}
        >

          <Text style={styles.sectionTitle}>Popular Posts</Text>
          <Animated.ScrollView
            ref={innerScrollRef}
            scrollEnabled={phase === 'inner'}
            onScroll={handleInnerScroll}
            scrollEventThrottle={10}
            style={{ maxHeight: height - 130 }}
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
        </Animated.View>
      </Animated.ScrollView>
    </View>
  );
}
