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
  const collapsedRef = useRef(false);

  const translateY = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);

  const collapseDistance = -260;

  const stages = ['Planning', 'Building', 'Testing', 'Launch'];
  const sampleCampaigns = [...Array(6).keys()].map(i => ({
    uri: `https://via.placeholder.com/300x300?text=Campaign${i + 1}`,
    title: `Campaign ${i + 1}`,
    viewers: `${(Math.random() * 2 + 1).toFixed(1)}M Watching`,
  }));

  const dragLocked = useRef(false);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        const { dy } = gestureState;
        if (dragLocked.current) return false;
  
        // Check current value using the ref
        if (!collapsedRef.current && dy < -10) return true;
        if (collapsedRef.current && dy > 10) return true;
  
        return false;
      },
  
      onPanResponderMove: (_, gestureState) => {
        const dy = gestureState.dy;
  
        if (collapsedRef.current && dy > 0) {
          const offset = collapseDistance + dy * 0.25;
          translateY.setValue(Math.min(offset, 0));
        } else if (!collapsedRef.current && dy < 0) {
          const offset = Math.max(collapseDistance, dy);
          translateY.setValue(offset);
        }
      },
  
      onPanResponderRelease: (_, gestureState) => {
        const dy = gestureState.dy;
  
        if (!collapsedRef.current && dy < -50) {
          dragLocked.current = true;
          Animated.timing(translateY, {
            toValue: collapseDistance,
            duration: 280,
            useNativeDriver: true,
          }).start(() => {
            setCollapsed(true);
            collapsedRef.current = true;
            dragLocked.current = false;
          });
  
        } else if (collapsedRef.current && dy > 100) {
          dragLocked.current = true;
          Animated.timing(translateY, {
            toValue: 0,
            duration: 220,
            useNativeDriver: true,
          }).start(() => {
            setCollapsed(false);
            collapsedRef.current = false;
            dragLocked.current = false;
          });
  
        } else {
          Animated.timing(translateY, {
            toValue: collapsedRef.current ? collapseDistance : 0,
            duration: 200,
            useNativeDriver: true,
          }).start();
        }
      },
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
