import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/pages/campaign/campaignHome'
import { useNavigate } from 'react-router-native';


export default function CampaignHome() {
  const navigate = useNavigate();

  return (
    <View style={styles.campaignContainer}>
      {/* Hero Header */}
      <ImageBackground
        source={{ uri: 'https://via.placeholder.com/600x400?text=Louis+Vuitton+Nike' }}
        style={styles.heroImage}
      >
        {/* Search Icon */}
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={18} color="#000" />
        </TouchableOpacity>

        {/* Dot menu */}
        <View style={styles.dotStack}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <View style={styles.heroCard}>
          {/* Background overlay */}
          <View style={styles.heroCardOverlay} />

          {/* Foreground content */}
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={styles.heroTitle}>Louis Vuitton / Nike</Text>
              <Text style={styles.heroDesc}>
                Collaboration for shoe enthusiasts to feel the comfort and luxury feel
              </Text>
            </View>
            <Ionicons name="arrow-forward" size={20} color="#000" />
          </View>
        </View>


        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryRow}
          style={styles.scrollOverlay}
        >
            <TouchableOpacity
              style={styles.categoryCard}
              onPress={() => navigate('/campaign/category/Shoes')}
            >
              <Image
                // source={{ uri: 'https://via.placeholder.com/300x300?text=Shoes' }}
                style={styles.categoryImage}
              />
              <View style={styles.campaignBadge}>
                <Text style={styles.campaignBadgeText}>11K Campaigns</Text>
              </View>
              <View style={styles.categoryLabel}>
                <Text style={styles.labelText}>Shoes</Text>
              </View>
            </TouchableOpacity>


          <View style={styles.categoryCard}>
            <Image
              source={{ uri: 'https://via.placeholder.com/300x300?text=Golf' }}
              style={styles.categoryImage}
            />
            <View style={styles.campaignBadge}>
              <Text style={styles.campaignBadgeText}>103K Campaigns</Text>
            </View>
            <View style={styles.categoryLabel}>
              <Text style={styles.labelText}>Golf</Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>

    </View>
  );
}
