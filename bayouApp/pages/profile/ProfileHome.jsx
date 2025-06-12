// components/ProfileHome.js
import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import styles from '../../styles/pages/profile/profileHome';

export default function ProfileHome() {
  const [activeTab, setActiveTab] = useState('Lifestyle');

  const sampleData = {
    Lifestyle: [
      { id: '1', label: 'ON - The Roger' },
      { id: '2', label: 'Mizuno - 243' },
      { id: '3', label: 'Nike - Zoom' },
      { id: '4', label: 'Adidas - Ultraboost' },
    ],
    Campaigns: [],
    Comments: [],
  };

  return (
    <View style={styles.container}>
      {/* Header Image */}
      <ImageBackground
        style={styles.headerImage}
      >
        <View style={styles.watchingBadge}>
          <Text style={styles.watchingIcon}>👥</Text>
          <Text style={styles.watchingText}>2.1M Watching</Text>
        </View>
      </ImageBackground>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.grabber} />
        {/* Name/Bio + Follow/Creator */}
        <View style={styles.profileHeaderRow}>
        <View style={styles.leftHeader}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.bio}>This is my tagline or my bio</Text>
        </View>
        <View style={styles.rightHeader}>
            <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followText}>+ Follow</Text>
            </TouchableOpacity>
            <View style={styles.creatorTag}>
            <Text style={styles.creatorText}>Creator</Text>
            </View>
        </View>
        </View>


        {/* Stats Row */}
        <View style={styles.statsRow}>
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

        {/* Tab Row */}
        <View style={styles.tabRow}>
          {['Lifestyle', 'Campaigns', 'Comments'].map((tab) => (
            <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                {tab}
              </Text>
              {activeTab === tab && <View style={styles.tabIndicator} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* Grid */}
        <FlatList
            data={sampleData[activeTab]}
            keyExtractor={(item) => item.id}
            numColumns={3}
            columnWrapperStyle={styles.gridRow}
            contentContainerStyle={styles.grid}
            renderItem={({ item }) => (
                <View style={styles.card}>
                <Text style={styles.cardText}>{item.label}</Text>
                </View>
            )}
        />

      </View>
    </View>
  );
}
