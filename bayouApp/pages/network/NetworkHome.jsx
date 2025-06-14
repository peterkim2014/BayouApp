import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import styles from '../../styles/pages/network/networkHome';
import logo from '../../assets/bayouLogo.png';
import ThreadCard from '../../components/cards/ThreadCard';

const { width } = Dimensions.get('window');

// Configurable datasets per type
const NETWORK_SECTIONS = {
  Creators: {
    label: 'Creator',
    categories: [
      { id: '1', label: 'Vlogging' },
      { id: '2', label: 'Automotive' },
      { id: '3', label: 'Fishing' },
      { id: '4', label: 'Boats' },
      { id: '5', label: 'Cooking' },
    ],
    top: [
      { id: '1', name: 'John Doe' },
      { id: '2', name: 'Jane Doe' },
      { id: '3', name: 'James Doe' },
    ],
    activities: {
      Lifestyle: [
        { id: '1', name: 'John Doe', viewers: '2.1M' }
      ],
      Campaigns: [],
    },
  },

  Brands: {
    label: 'Brand',
    categories: [
      { id: '1', label: 'Auto' },
      { id: '2', label: 'Sportswear' },
    ],
    top: [
      { id: '1', name: 'Nike' },
      { id: '2', name: 'Toyo' },
    ],
    activities: {
      Lifestyle: [
        { id: '1', name: 'Nike Drops', viewers: '1.3M' }
      ],
      Campaigns: [],
    },
  },

  Viewers: {
    label: 'Viewer',
    categories: [
      { id: '1', label: 'Watchers' },
      { id: '2', label: 'Top Commenters' },
    ],
    top: [
      { id: '1', name: 'ViewBot 9000' },
      { id: '2', name: 'Active Annie' },
    ],
    activities: {
      Lifestyle: [],
      Campaigns: [],
    },
  },
};

export default function NetworkHome() {
  const [mainTab, setMainTab] = useState('Creators');
  const [activeSubTab, setActiveSubTab] = useState('Lifestyle');

  const currentData = NETWORK_SECTIONS[mainTab];

  const renderHeader = () => (
    <View style={styles.body}>
      <Text style={styles.sectionTitle}>{currentData.label} Categories</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={currentData.categories}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.categoryList}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <View style={styles.categoryCircle} />
            <Text style={styles.categoryLabel}>{item.label}</Text>
          </View>
        )}
      />

      <Text style={styles.sectionTitle}>Top Trending {currentData.label}s</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={currentData.top}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.creatorList}
        renderItem={({ item }) => (
          <View style={styles.creatorShadowWrapper}>
            <View style={styles.creatorCard}>
              <View style={styles.creatorImage} />
              <View style={styles.creatorNameOverlay}>
                <Text style={styles.creatorName}>{item.name}</Text>
              </View>
            </View>
          </View>
        )}
      />

      <Text style={styles.sectionTitle}>Recent Activities {currentData.label}s</Text>
      <View style={styles.activityTabs}>
        {['Lifestyle', 'Campaigns'].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveSubTab(tab)}>
            <Text style={[
              styles.activityTabText,
              activeSubTab === tab && styles.activeActivityTab
            ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerTitleRow}>
          <Image source={logo} style={styles.headerIcon} />
          <Text style={styles.headerTitle}>Network</Text>
        </View>

        <View style={styles.tabRow}>
          {Object.keys(NETWORK_SECTIONS).map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, mainTab === tab && styles.activeTab]}
              onPress={() => {
                setMainTab(tab);
                setActiveSubTab('Lifestyle');
              }}
            >
              <Text style={[styles.tabText, mainTab === tab && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Activity Feed */}
      <FlatList
        data={currentData.activities[activeSubTab]}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.activityList}
        renderItem={({ item }) => (
          <ThreadCard item={item} />
        )}
      />
    </View>
  );
}
