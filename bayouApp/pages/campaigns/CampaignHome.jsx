import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import styles from '../../styles/pages/campaign/campaignHome';
import logo from '../../assets/bayouLogo.png';

const categories = [
  { id: '1', label: 'Vlogging' },
  { id: '2', label: 'Automotive' },
  { id: '3', label: 'Fishing' },
  { id: '4', label: 'Boats' },
  { id: '5', label: 'Cooking' },
];

const campaigns = {
  Planning: [
    {
      id: '1',
      title: 'Mizuno 243 / Grant Horvat',
      viewers: '2.1M',
    },
    {
      id: '2',
      title: 'Toyo X TJ Hunt',
      viewers: '2.1M',
    },
  ],
  Building: [],
  Testing: [],
  Launch: [],
};

export default function CampaignHome() {
  const [activeTab, setActiveTab] = useState('Planning');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerTitleRow}>
          <Image source={logo} style={styles.headerIcon} />
          <Text style={styles.headerTitle}>Campaigns</Text>
        </View>
        <View style={styles.tabRow}>
          {['Most Viewed', 'Trending', 'Most Recent'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, tab === 'Most Viewed' && styles.activeTab]}
            >
              <Text style={[styles.tabText, tab === 'Most Viewed' && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Body w/ padding */}
      <ScrollView contentContainerStyle={styles.body}>
        {/* Categories */}
        <Text style={styles.sectionTitle}>Product Categories</Text>
        <FlatList
          horizontal
          data={categories}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.categoryList}
          renderItem={({ item }) => (
            <View style={styles.categoryItem}>
              <View style={styles.categoryCircle} />
              <Text style={styles.categoryLabel}>{item.label}</Text>
            </View>
          )}
        />

        {/* Popular Selection */}
        <Text style={styles.sectionTitle}>Popular Selection</Text>
        <View style={styles.subTabRow}>
          {['Planning', 'Building', 'Testing', 'Launch'].map((tab) => (
            <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
              <Text style={[styles.subTabText, activeTab === tab && styles.activeSubTab]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <FlatList
          horizontal
          data={campaigns[activeTab]}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardList}
          renderItem={({ item }) => (
            <View style={styles.card}>
                <View style={styles.cardImage}>
                    <View style={styles.viewerTag}>
                        <Text style={styles.viewerIcon}>👥</Text>
                        <Text style={styles.viewerText}>{item.viewers}</Text>
                    </View>
                </View>
              <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}
