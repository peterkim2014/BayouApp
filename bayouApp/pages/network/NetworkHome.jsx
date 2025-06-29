import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Animated,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  PanResponder,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../styles/pages/network/networkHome';
import { useNavigate } from 'react-router-native';

import CreatorsContent from './CreatorsContent';
import BrandsContent from './BrandsContent';

const { width } = Dimensions.get('window');
const TABS = ['Creators', 'Brands'];
const collapseDistance = -115;

export default function NetworkHome() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Creators');
  const [collapsed, setCollapsed] = useState(false);

  const translateY = useRef(new Animated.Value(0)).current;
  const scrollOffsetY = useRef(0);
  const collapsedRef = useRef(false);
  const scrollRef = useRef(null);
  const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) => {
        const isAtTop = scrollOffsetY.current <= 0;
        return (!collapsedRef.current && gesture.dy < -0.2) ||
               (collapsedRef.current && gesture.dy > 0.2 && isAtTop);
      },
      onPanResponderMove: (_, gesture) => {
        const dy = gesture.dy;
        if (collapsedRef.current && dy > 0) {
          translateY.setValue(Math.min(collapseDistance + dy * 0.0001, 0));
        } else if (!collapsedRef.current && dy < 0) {
          translateY.setValue(Math.max(collapseDistance, dy * 0.0001));
        }
      },
      onPanResponderRelease: (_, gesture) => {
        const dy = gesture.dy;
        if (!collapsedRef.current && dy < -15) {
          Animated.timing(translateY, {
            toValue: collapseDistance,
            duration: 240,
            useNativeDriver: false,
          }).start(() => {
            setCollapsed(true);
            collapsedRef.current = true;
          });
        } else if (collapsedRef.current && dy > 100) {
          Animated.timing(translateY, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }).start(() => {
            setCollapsed(false);
            collapsedRef.current = false;
          });
        } else {
          Animated.timing(translateY, {
            toValue: collapsedRef.current ? collapseDistance : 0,
            duration: 190,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  const animatedHeaderHeight = translateY.interpolate({
    inputRange: [collapseDistance, 0],
    outputRange: [190, 360],
    extrapolate: 'clamp',
  });

  const fadeOutOnCollapse = {
    opacity: translateY.interpolate({
      inputRange: [collapseDistance, collapseDistance],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    transform: [
      {
        translateY: translateY.interpolate({
          inputRange: [collapseDistance, 0],
          outputRange: [-40, 60],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const scrollBodyMarginTop = translateY.interpolate({
    inputRange: [collapseDistance, 0],
    outputRange: [0, 75],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.networkContainer}>
      {/* HEADER */}
      <Animated.View style={[styles.networkHeaderContainer, { height: animatedHeaderHeight }]}>
        {/* Shadow */}
        <Animated.View
          style={[
            styles.insetShadowBottom,
            {
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 55,
              top: translateY.interpolate({
                inputRange: [collapseDistance, 0],
                outputRange: [145, 280],
                extrapolate: 'clamp',
              }),
              height: 30,
            },
          ]}
        >
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.12)']}
            style={{ flex: 1, borderRadius: 20 }}
            pointerEvents="none"
          />
        </Animated.View>

        {/* Title */}
        <Animated.Text style={[styles.networkHeaderTitle, fadeOutOnCollapse]}>
          Where the connection{'\n'}meets collaboration
        </Animated.Text>

        {/* Search */}
        <TouchableOpacity style={styles.searchIcon} onPress={() => navigate('/network/search')}>
          <Ionicons name="search" size={20} color="#000" />
        </TouchableOpacity>

        {/* Tabs */}
        <Animated.View
          style={[fadeOutOnCollapse, { zIndex: 10 }]}
          pointerEvents="box-none"
        >
          <View style={styles.tabRow}>
            {TABS.map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, activeTab === tab && styles.activeTab]}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>

        {/* Collapsible Featured Section */}
        {activeTab === 'Creators' ? (
          <CreatorsContent.Header translateY={translateY} navigate={navigate} />
        ) : null}

        {activeTab === 'Brands' ? (
          <BrandsContent.Header translateY={translateY} navigate={navigate} />
        ) : null}

      </Animated.View>

      {/* BODY */}
      <Animated.View
        style={[styles.scrollBody, { marginTop: scrollBodyMarginTop }]}
        {...panResponder.panHandlers}
      >
        {activeTab === 'Creators' && (
          <CreatorsContent.Body
            translateY={translateY}
            collapsed={collapsed}
            scrollRef={scrollRef}
            onScrollY={scrollOffsetY}
          />
        )}
        {activeTab === 'Brands' && (
          <BrandsContent.Body
            translateY={translateY}
            collapsed={collapsed}
            scrollRef={scrollRef}
            onScrollY={scrollOffsetY}
          />
        )}


      </Animated.View>
    </View>
  );
}
