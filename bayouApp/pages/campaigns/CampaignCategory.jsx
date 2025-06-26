import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/pages/campaign/campaignCategory';

const { width } = Dimensions.get('window');

export default function CampaignCategory() {
  const [activeStage, setActiveStage] = useState('Planning');
  const sampleImages = [
    'https://via.placeholder.com/300x300?text=Campaign1',
    'https://via.placeholder.com/300x300?text=Campaign2',
    'https://via.placeholder.com/300x300?text=Campaign3',
    'https://via.placeholder.com/300x300?text=Campaign4',
    'https://via.placeholder.com/300x300?text=Campaign5',
    'https://via.placeholder.com/300x300?text=Campaign6',
  ];

  const stages = ['Planning', 'Building', 'Testing', 'Launch'];

  return (
    <View style={styles.campaignCategoryContainer}>
      {/* Hero Image */}
      <ImageBackground
        source={{ uri: 'https://via.placeholder.com/800x400?text=Hero' }}
        style={styles.heroImage}
      >
        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>Vans / Violent</Text>
          <Text style={styles.heroSubtitle}>
            Collaboration for shoe enthusiasts to feel the comfort and luxury feel
          </Text>
          <TouchableOpacity style={styles.heroArrow}>
            <Ionicons name="arrow-forward" size={18} color="#000" />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Tabs + Search */}
      <View style={styles.stageRow}>
        <Text style={styles.sectionTitle}>Featured Campaigns</Text>
        <TouchableOpacity>
          <Ionicons name="search" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.tabRow}>
        {stages.map((stage) => (
          <TouchableOpacity key={stage} onPress={() => setActiveStage(stage)}>
            <Text style={[styles.tabText, activeStage === stage && styles.activeTabText]}>
              {stage}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

        {/* Grid of images */}
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.campaignCategory__grid}>
            {sampleImages.map((uri, index) => (
                <Image key={index} source={{ uri }} style={styles.campaignCategory__gridItem} />
            ))}
            </ScrollView>
        </View>

    </View>
  );
}
