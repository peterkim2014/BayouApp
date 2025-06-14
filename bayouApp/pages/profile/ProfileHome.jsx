// components/ProfileHome.js
import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';
import { Asset } from 'expo-asset';
import styles from '../../styles/pages/profile/profileHome';

import profileImage from '../../assets/profileBackground.png'
const { width } = Dimensions.get('window');

export default function ProfileHome() {
  const [activeTab, setActiveTab] = useState('Lifestyle');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);



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

  useEffect(() => {
    const load = async () => {
      const asset = Asset.fromModule(profileImage);
      await asset.downloadAsync(); 
      setImageLoaded(true);
    };
  
    load();
  }, []);
  

  return (
    <View style={styles.container}>
      {imageLoaded && (
        <View style={styles.headerBackground}>
          <ImageBackground
            source={profileImage}
            style={styles.headerImage}
            resizeMode="center"
            imageStyle={{ width: width, top: 50 }}
          >
            <View style={styles.watchingBadge}>
              <Text style={styles.watchingIcon}>👥</Text>
              <Text style={styles.watchingText}>2.1M Watching</Text>
            </View>
          </ImageBackground>
        </View>
      )}



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
            <TouchableOpacity
              key={tab}
              onPress={() => {
                setActiveTab(tab);
                setSelectedItem(null);
              }}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                {tab}
              </Text>
              {activeTab === tab && <View style={styles.tabIndicator} />}
            </TouchableOpacity>
          ))}
        </View>



        {/* Grid */}
        {selectedItem ? (
          <View style={styles.detailContainer}>
            {/* Back Button */}
            <TouchableOpacity onPress={() => setSelectedItem(null)} style={styles.backButton}>
              <Text style={styles.backArrow}>←</Text>
            </TouchableOpacity>

            {/* Row: Image + Details */}
            <View style={styles.detailRow}>
              {/* Image Box */}
              <View style={styles.detailImage} />

              {/* Right Section */}
              <View style={styles.detailInfo}>
                <Text style={styles.detailTitle}>{selectedItem.label}</Text>
                <Text style={styles.starRating}>★★★★☆</Text>

                {/* Metrics */}
                {['Looks', 'Feel', 'Cost'].map((metric) => (
                  <View key={metric} style={styles.metricRow}>
                    <View style={styles.metricHeader}>
                      <Text style={styles.metricLabel}>{metric}</Text>
                      <Text style={styles.metricPercent}>87%</Text>
                    </View>
                    <View style={styles.metricBarBackground}>
                      <View style={styles.metricBarFill} />
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
        ) : (
          <FlatList
            data={sampleData[activeTab]}
            keyExtractor={(item) => item.id}
            numColumns={3}
            columnWrapperStyle={styles.gridRow}
            contentContainerStyle={styles.grid}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.cardContainerStyle}
                onPress={() => setSelectedItem(item)}
              >
                <View style={styles.card} />
                <Text style={styles.cardText}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        )}



      </View>
    </View>
  );
}
