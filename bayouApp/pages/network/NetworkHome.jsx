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

const { width } = Dimensions.get('window');
const TABS = ['Creators', 'Brands', 'Viewers'];
const collapseDistance = -115;

export default function NetworkHome() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Creators');
  const [collapsed, setCollapsed] = useState(false);

  const translateY = useRef(new Animated.Value(0)).current;
  const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

  const scrollOffsetY = useRef(0);
  const collapsedRef = useRef(false);
  const scrollRef = useRef(null);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) => {
        const isAtTop = scrollOffsetY.current <= 0;
        if (!collapsedRef.current && gesture.dy < -10) return true;
        if (collapsedRef.current && gesture.dy > 10 && isAtTop) return true;
        return false;
      },
      onPanResponderMove: (_, gesture) => {
        const dy = gesture.dy;
        if (collapsedRef.current && dy > 0) {
          const offset = collapseDistance + dy * 0.25;
          translateY.setValue(Math.min(offset, 0));
        } else if (!collapsedRef.current && dy < 0) {
          translateY.setValue(Math.max(collapseDistance, dy));
        }
      },
      onPanResponderRelease: (_, gesture) => {
        const dy = gesture.dy;
        if (!collapsedRef.current && dy < -15) {
          Animated.timing(translateY, {
            toValue: collapseDistance,
            duration: 280,
            useNativeDriver: false,
          }).start(() => {
            setCollapsed(true);
            collapsedRef.current = true;
          });
        } else if (collapsedRef.current && dy > 100) {
          Animated.timing(translateY, {
            toValue: 0,
            duration: 220,
            useNativeDriver: false,
          }).start(() => {
            setCollapsed(false);
            collapsedRef.current = false;
          });
        } else {
          Animated.timing(translateY, {
            toValue: collapsedRef.current ? collapseDistance : 0,
            duration: 200,
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

  const profileCardWidth = translateY.interpolate({
    inputRange: [collapseDistance, 0],
    outputRange: [width * 0.16, width * 0.32],
    extrapolate: 'clamp',
  });

  const profileCardHeight = translateY.interpolate({
    inputRange: [collapseDistance, 0],
    outputRange: [55, 170],
    extrapolate: 'clamp',
  });

  const profileBorderRadius = translateY.interpolate({
    inputRange: [collapseDistance, 0],
    outputRange: [110, 8],
    extrapolate: 'clamp',
  });

  const profileTranslateY = translateY.interpolate({
    inputRange: [collapseDistance, 0],
    outputRange: [-35, -15],
    extrapolate: 'clamp',
  });

  const scrollPaddingTop = translateY.interpolate({
    inputRange: [collapseDistance, 0],
    outputRange: [80, 180], // collapsed → expanded
    extrapolate: 'clamp',
  });

  const scrollBodyMarginTop = translateY.interpolate({
  inputRange: [collapseDistance, 0],
  outputRange: [0, 75], // collapsed → expanded
  extrapolate: 'clamp',
});



  const fadeOutOnCollapse = {
    opacity: translateY.interpolate({
      inputRange: [collapseDistance, collapseDistance * 0.001],
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

  const mockPeople = [
    { name: 'John Doe', title: 'Golf Influencer' },
    { name: 'Jane Doe', title: 'Beauty Influencer' },
    { name: 'James Doe', title: 'Music Producer' },
  ];

  return (
    <View style={styles.networkContainer}>
      <Animated.View
        style={[
          styles.networkHeaderContainer,
          { height: animatedHeaderHeight },
        ]}
      >
        {/* Gradient Shadow */}
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

        {/* Header Text */}
        <Animated.Text style={[styles.networkHeaderTitle, fadeOutOnCollapse]}>
          Where the connection{'\n'}meets collaboration
        </Animated.Text>

        {/* Search */}
        <TouchableOpacity style={styles.searchIcon} onPress={() => navigate('/network/search')}>
          <Ionicons name="search" size={20} color="#000" />
        </TouchableOpacity>

        {/* Tabs */}
        <Animated.View style={fadeOutOnCollapse}>
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

        {/* Featured Curators */}
        <Animated.View
          style={{
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [collapseDistance, 0],
                  outputRange: [-75, 35], // pull up by 40px during collapse
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
        >
          <View style={styles.featuredHeaderRow}>
            <Text style={styles.featuredHeaderText}>Featured Curators</Text>
            <TouchableOpacity>
              <Animated.Text
                style={{
                  fontSize: translateY.interpolate({
                    inputRange: [collapseDistance, collapseDistance * 0.001],
                    outputRange: [0.01, 12], // Shrinks quickly
                    extrapolate: 'clamp',
                  }),
                  opacity: translateY.interpolate({
                    inputRange: [collapseDistance, collapseDistance * 0.001],
                    outputRange: [0, 1],
                    extrapolate: 'clamp',
                  }),
                }}
              >
                See All
              </Animated.Text>
            </TouchableOpacity>

          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.profileScroll}
            style={styles.profileScroll}
          >
            <View style={styles.profileContainer}>
              {mockPeople.map((person, i) => (
                <Animated.View
                  key={i}
                  style={[
                    styles.profileCard,
                    {
                      width: profileCardWidth,
                      transform: [{ translateY: profileTranslateY }],
                      borderRadius: profileBorderRadius,
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      marginTop: 30,
                    },
                  ]}
                >
                  <Animated.View
                    style={[
                      styles.profilePlaceholder,
                      {
                        height: profileCardHeight,
                        width: profileCardWidth,
                        borderRadius: profileBorderRadius,
                      },
                    ]}
                  />
                  <Animated.Text
                    style={{
                      fontSize: translateY.interpolate({
                        inputRange: [collapseDistance, -collapseDistance / 2],
                        outputRange: [10, 12],
                        extrapolate: 'clamp',
                      }),
                    }}
                  >
                    {person.name}
                  </Animated.Text>
                  <Animated.Text
                    style={{
                      fontSize: translateY.interpolate({
                        inputRange: [collapseDistance, -collapseDistance / 2],
                        outputRange: [0.01, 14],
                        extrapolate: 'clamp',
                      }),
                      opacity: translateY.interpolate({
                        inputRange: [collapseDistance, -collapseDistance / 2],
                        outputRange: [0, 1],
                        extrapolate: 'clamp',
                      }),
                    }}
                  >
                    {person.title}
                  </Animated.Text>
                </Animated.View>
              ))}
            </View>
          </ScrollView>
        </Animated.View>


      </Animated.View>

      {/* Scroll Body */}
      <Animated.View
        style={[
          styles.scrollBody,
          { marginTop: scrollBodyMarginTop },
        ]}
        {...panResponder.panHandlers}
      >

        <Text style={styles.sectionTitle}>Popular Posts</Text>
        <AnimatedScrollView
          ref={scrollRef}
          scrollEnabled={collapsed}
          onScroll={(e) => {
            scrollOffsetY.current = e.nativeEvent.contentOffset.y;
          }}
          scrollEventThrottle={16}
          bounces={false}
          overScrollMode="never"
          style={[
            styles.scrollBodyContent,
            { paddingTop: translateY.interpolate({
              inputRange: [collapseDistance, 0],
              outputRange: [-105, -5],
              extrapolate: 'clamp',
            })},
          ]}
        >

          
          <View style={styles.gridContainer}>
            {Array(24)
              .fill(null)
              .map((_, i) => (
                <View key={i} style={styles.gridItem} />
              ))}
          </View>
        </AnimatedScrollView>
      </Animated.View>
    </View>
  );
}
