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
import { useNavigate } from 'react-router-native';


const { width } = Dimensions.get('window');

export default function CampaignCategory() {
    const navigate = useNavigate();
  const [activeStage, setActiveStage] = useState('Planning');
  const sampleCampaigns = [
    {
      uri: 'https://via.placeholder.com/300x300?text=Campaign1',
      title: 'Campaign 1',
      viewers: '2.1M Watching',
    },
    {
      uri: 'https://via.placeholder.com/300x300?text=Campaign2',
      title: 'Campaign 2',
      viewers: '1.5M Watching',
    },
    {
      uri: 'https://via.placeholder.com/300x300?text=Campaign3',
      title: 'Campaign 3',
      viewers: '2.1M Watching',
    },
    {
      uri: 'https://via.placeholder.com/300x300?text=Campaign4',
      title: 'Campaign 4',
      viewers: '1.5M Watching',
    },
    {
      uri: 'https://via.placeholder.com/300x300?text=Campaign5',
      title: 'Campaign 5',
      viewers: '2.1M Watching',
    },
    {
      uri: 'https://via.placeholder.com/300x300?text=Campaign6',
      title: 'Campaign 6',
      viewers: '1.5M Watching',
    },
  ];
  

  const stages = ['Planning', 'Building', 'Testing', 'Launch'];

  return (
    <View style={styles.campaignCategoryContainer}>
      {/* Hero Image */}
      <ImageBackground
        source={{ uri: 'https://via.placeholder.com/800x400?text=Hero' }}
        style={styles.heroImage}
      >
        <TouchableOpacity onPress={() => navigate(-1)} style={styles.backButtonCategory}>
        <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
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
            {sampleCampaigns.map((campaign, index) => (
                <TouchableOpacity
                key={index}
                onPress={() => navigate(`/campaign/${index}`, { state: campaign })}
                >
                <Image
                    source={{ uri: campaign.uri }}
                    style={styles.campaignCategory__gridItem}
                />
                </TouchableOpacity>
            ))}
        </ScrollView>

        </View>

    </View>
  );
}
