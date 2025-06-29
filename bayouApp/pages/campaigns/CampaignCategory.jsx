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
import BackSwipeWrapper from '../../components/BackSwipeWrapper';

const { width } = Dimensions.get('window');

export default function CampaignCategory() {
  const navigate = useNavigate();
  const [activeStage, setActiveStage] = useState('Planning');
  const [collapsed, setCollapsed] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(false);
  const [isDraggingDown, setIsDraggingDown] = useState(false);

  const collapsedRef = useRef(false);
  const scrollOffsetY = useRef(0);

  const translateY = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const collapseDistance = -260;

  const stages = ['Planning', 'Building', 'Testing', 'Launch'];
  const sampleCampaigns = [...Array(12).keys()].map(i => ({
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
  
        const isAtTop = scrollOffsetY.current <= 0;
  
        // Only respond if dragging up or dragging down at top
        if (!collapsedRef.current && dy < -5) return true;
        if (collapsedRef.current && dy > 5 && isAtTop) return true;
  
        return false;
      },
  
      onPanResponderMove: (_, gestureState) => {
        const dy = gestureState.dy;
  
        if (collapsedRef.current && dy > 0) {
          setIsDraggingDown(true);
          const offset = collapseDistance + dy * 0.25; // ← FIXED: use reasonable scale
          translateY.setValue(Math.min(offset, 0));
        } else if (!collapsedRef.current && dy < 0) {
          setIsDraggingDown(false);
          const offset = Math.max(collapseDistance, dy); // ← FIXED
          translateY.setValue(offset);
        }
      },
  
      onPanResponderRelease: (_, gestureState) => {
        const dy = gestureState.dy;
        setIsDraggingDown(false);
  
        if (!collapsedRef.current && dy < -15) {
          dragLocked.current = true;
          Animated.timing(translateY, {
            toValue: collapseDistance,
            duration: 280,
            useNativeDriver: false, // ← If other animations use layout props, must be false
          }).start(() => {
            setCollapsed(true);
            collapsedRef.current = true;
            dragLocked.current = false;
            setScrollLocked(false);
          });
  
        } else if (collapsedRef.current && dy > 80) {
          dragLocked.current = true;
          Animated.timing(translateY, {
            toValue: 0,
            duration: 220,
            useNativeDriver: false,
          }).start(() => {
            setCollapsed(false);
            collapsedRef.current = false;
            dragLocked.current = false;
            setScrollLocked(false);
          });
  
        } else {
          Animated.timing(translateY, {
            toValue: collapsedRef.current ? collapseDistance : 0,
            duration: 200,
            useNativeDriver: false,
          }).start(() => {
            setScrollLocked(false);
          });
        }
      },
    })
  ).current;
  

  return (
    <BackSwipeWrapper>

    
    <View style={styles.campaignCategory__container}>
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

      <Animated.View style={{ transform: [{ translateY }] }} {...panResponder.panHandlers}>
        <View style={{ backgroundColor: '#fff' }}>
          <View style={styles.campaignCategory__scrollContainer}>
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
          </View>

          <ScrollView
            ref={scrollViewRef}
            scrollEnabled={collapsed && !scrollLocked}
            onScroll={(e) => {
              scrollOffsetY.current = e.nativeEvent.contentOffset.y;
            }}
            scrollEventThrottle={16}
            contentContainerStyle={styles.campaignCategory__grid}
            bounces={false}
            overScrollMode="never"
            showsVerticalScrollIndicator={false}
          >
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
      </Animated.View>
    </View>
    </BackSwipeWrapper>
  );
}