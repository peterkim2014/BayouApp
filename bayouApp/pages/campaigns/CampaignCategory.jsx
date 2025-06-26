import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Animated,
  PanResponder,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/pages/campaign/campaignCategory';
import { useNavigate } from 'react-router-native';

const { width } = Dimensions.get('window');

export default function CampaignCategory() {
  const navigate = useNavigate();
  const [activeStage, setActiveStage] = useState('Planning');
  const [collapsed, setCollapsed] = useState(false);

  const translateY = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);

  const collapseDistance = -260;

  const stages = ['Planning', 'Building', 'Testing', 'Launch'];
  const sampleCampaigns = [...Array(6).keys()].map(i => ({
    uri: `https://via.placeholder.com/300x300?text=Campaign${i + 1}`,
    title: `Campaign ${i + 1}`,
    viewers: `${(Math.random() * 2 + 1).toFixed(1)}M Watching`,
  }));

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dy) > 10;
      },
      onPanResponderGrant: () => {
        if (!collapsed) {
          scrollViewRef.current?.scrollTo({ y: 0, animated: false });
        }
      },
      onPanResponderMove: (_, gestureState) => {
        const dragOffset = gestureState.dy;
  
        if (collapsed && dragOffset > 0) {
          // Dragging down to expand with resistance
          const offset = collapseDistance + dragOffset * 0.25; // resistance factor
          translateY.setValue(Math.min(offset, 0));
        } else if (!collapsed && dragOffset < 0) {
          // Dragging up to collapse
          const offset = Math.max(collapseDistance, dragOffset);
          translateY.setValue(offset);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        const shouldCollapse = gestureState.dy < -50;
        const shouldExpand = gestureState.dy > 100;
  
        if (!collapsed && shouldCollapse) {
          Animated.timing(translateY, {
            toValue: collapseDistance,
            duration: 280,
            useNativeDriver: true,
          }).start(() => setCollapsed(true));
        } else if (collapsed && shouldExpand) {
          Animated.timing(translateY, {
            toValue: 0,
            duration: 220,
            useNativeDriver: true,
          }).start(() => setCollapsed(false));
        } else {
          Animated.timing(translateY, {
            toValue: collapsed ? collapseDistance : 0,
            duration: 200,
            useNativeDriver: true,
          }).start();
        }
      }
    })
  ).current;
  
  

  return (
    <View style={styles.campaignCategory__container}>
      {/* Hero */}
      <ImageBackground
        source={{ uri: 'https://via.placeholder.com/800x400?text=Hero' }}
        style={styles.campaignCategory__heroImage}
      >
        <TouchableOpacity
          onPress={() => navigate(-1)}
          style={styles.campaignCategory__backButton}
        >
          <Text style={styles.campaignCategory__backArrow}>←</Text>
        </TouchableOpacity>
        <View style={styles.campaignCategory__heroOverlay}>
          <Text style={styles.campaignCategory__heroTitle}>Vans / Violent</Text>
          <Text style={styles.campaignCategory__heroSubtitle}>
            Collaboration for shoe enthusiasts to feel the comfort and luxury feel
          </Text>
          <TouchableOpacity style={styles.campaignCategory__heroArrow}>
            <Ionicons name="arrow-forward" size={18} color="#000" />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Collapsible Section */}
      <Animated.View
        style={{ transform: [{ translateY }] }}
        {...panResponder.panHandlers}
      >
        <ScrollView
          ref={scrollViewRef}
          scrollEnabled={collapsed}
          contentContainerStyle={styles.campaignCategory__scrollContainer}
        >
          <View style={styles.campaignCategory__stageRow}>
            <Text style={styles.campaignCategory__sectionTitle}>Featured Campaigns</Text>
            <TouchableOpacity>
              <Ionicons name="search" size={20} color="#000" />
            </TouchableOpacity>
          </View>

          <View style={styles.campaignCategory__tabRow}>
            {stages.map((stage) => (
              <TouchableOpacity key={stage} onPress={() => setActiveStage(stage)}>
                <Text
                  style={[
                    styles.campaignCategory__tabText,
                    activeStage === stage && styles.campaignCategory__activeTabText,
                  ]}
                >
                  {stage}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.campaignCategory__grid}>
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
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
}
