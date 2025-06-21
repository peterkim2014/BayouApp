import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/pages/network/networkHome';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const TABS = ['Creators', 'Brands', 'Viewers'];

export default function NetworkHome() {
  const [activeTab, setActiveTab] = useState('Creators');

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
      </View>

      {/* Combined Scrollable Body */}
      <View style={styles.scrollBodyWrapper}>
        {/* Horizontal Profile Scroll */}
        <ScrollView contentContainerStyle={styles.scrollBodyContent}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.profileScroll}>
            {mockPeople.map((person, index) => (
              <View key={index} style={styles.profileCard}>
                <View style={styles.profilePlaceholder} />
                <Text style={styles.name}>{person.name}</Text>
                <Text style={styles.title}>{person.title}</Text>
              </View>
            ))}
          </ScrollView>

          <ScrollView contentContainerStyle={styles.scrollBody}>
            {/* Whats Happening Section */}
            <Text style={styles.sectionTitle}>Whats happening</Text>
            <View style={styles.gridContainer}>
              {Array(12).fill(null).map((_, i) => (
                <View key={i} style={styles.gridItem} />
              ))}
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    </View>
  );
}
