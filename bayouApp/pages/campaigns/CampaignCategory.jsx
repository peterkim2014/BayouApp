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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/pages/campaign/campaignCategory';
import { useNavigate } from 'react-router-native';
import { PanResponder } from 'react-native';


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
  const scrollY = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(0)).current;
    const scrollViewRef = useRef(null); // ✅ Add this
    const [collapsed, setCollapsed] = useState(false);

  
  const collapseDistance = -260;

const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
  
    if (!collapsed && offsetY >= collapseThreshold) {
      setCollapsed(true);
  
      // Snap to collapsed position
      scrollViewRef.current?.scrollTo({ y: 0, animated: false });
    }
  
    if (!collapsed) {
      scrollY.setValue(offsetY);
    }
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return !collapsed && gestureState.dy < -10;
      },
      onPanResponderMove: (_, gestureState) => {
        if (!collapsed) {
          const newY = Math.max(collapseDistance, gestureState.dy);
          translateY.setValue(newY);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy < -150) {
          // Snap up
          Animated.timing(translateY, {
            toValue: collapseDistance,
            duration: 200,
            useNativeDriver: true,
          }).start(() => setCollapsed(true));
        } else {
          // Revert back
          Animated.timing(translateY, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;
  
  
//   const translateY = scrollY.interpolate({
//     inputRange: [0, collapseThreshold],
//     outputRange: [0, -260],
//     extrapolate: 'clamp',
//   });
  

  return (
      <View style={styles.campaignCategory__container}>
        {/* 🖼 Hero stays fixed */}
        <ImageBackground
            source={{ uri: 'https://via.placeholder.com/800x400?text=Hero' }}
            style={styles.campaignCategory__heroImage}
        >
            <TouchableOpacity onPress={() => navigate(-1)} style={styles.campaignCategory__backButton}>
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

        {/* 🧩 Collapsing Section */}
        <Animated.View
            style={{ transform: [{ translateY: translateY }] }}
            {...(!collapsed ? panResponder.panHandlers : {})}
            >
            <ScrollView
                ref={scrollViewRef}
                scrollEnabled={collapsed}
                onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
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
                    <Text style={[
                    styles.campaignCategory__tabText,
                    activeStage === stage && styles.campaignCategory__activeTabText
                    ]}>
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
