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
  const snapPoint = 250;
  const [activeTab, setActiveTab] = useState('Creators');

  const profileCardSize = scrollY.interpolate({
    inputRange: [0, snapPoint],
    outputRange: [205, 80],
    extrapolate: 'clamp',
  });

  const profileBorderRadius = scrollY.interpolate({
    inputRange: [0, snapPoint],
    outputRange: [8, 40],
    extrapolate: 'clamp',
  });

  const profileTranslateY = scrollY.interpolate({
    inputRange: [0, snapPoint],
    outputRange: [0, -50], // moves upward
    extrapolate: 'clamp',
  });

  const mockPeople = [
    { name: 'John Doe', title: 'Golf Influencer' },
    { name: 'Jane Doe', title: 'Beauty Influencer' },
    { name: 'James Doe', title: 'Music Producer' },
  ];

  return (
    <View style={styles.networkContainer}>
      {/* Fixed Header */}
      <View style={styles.networkHeaderContainer}>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.12)']}
        locations={[0, 1]}
        style={styles.insetShadowBottom}
        pointerEvents="none"
      />
        <Text style={styles.networkHeaderTitle}>Where the connection{'\n'}meets collaboration</Text>

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
              marginTop: 40,
            },
          ]}
        >
          <ScrollView horizontal contentContainerStyle={styles.profileScroll} showsHorizontalScrollIndicator={false}>
            {mockPeople.map((person, index) => (
              <Animated.View
                key={index}
                style={[
                  styles.profileCard,
                  {
                    height: profileCardSize,
                    borderRadius: profileBorderRadius,
                  },
                ]}
              >
                <View style={styles.profilePlaceholder} />
                <Text style={styles.name}>{person.name}</Text>
                <Text style={styles.title}>{person.title}</Text>
              </Animated.View>
            ))}
          </ScrollView>
        </Animated.View>
      </View>

      {/* Combined Scrollable Body */}
      <View style={styles.scrollBodyWrapper}>
        {/* Horizontal Profile Scroll */}
        <Animated.ScrollView
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
          contentContainerStyle={styles.scrollBodyContent}
        >
          <View style={styles.scrollBody}>
            <Text style={styles.sectionTitle}>Whats happening</Text>
            <View style={styles.gridContainer}>
              {Array(12).fill(null).map((_, i) => (
                <View key={i} style={styles.gridItem} />
              ))}
            </View>
          </View>
        </Animated.ScrollView>
      </View>
    </View>
  );
}
