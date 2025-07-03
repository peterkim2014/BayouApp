import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Animated,
  ScrollView,
  Dimensions,
  PanResponder,
} from 'react-native';
import { Asset } from 'expo-asset';
import styles from '../../styles/pages/profile/profileHome';
import profileImage from '../../assets/profileBackground.png';
import settingsIcon from '../../assets/settingsIcon.png';
import HeaderCurve from '../../components/HeaderCurve';
import ThreadCard from '../../components/cards/ThreadCard';

const screenHeight = Dimensions.get('window').height;

export default function ProfileHome() {
  const [activeTab, setActiveTab] = useState('Lifestyle');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [expandedThreadId, setExpandedThreadId] = useState(null);


  const scrollRef = useRef(null);
  const scrollOffsetY = useRef(0);
  const collapsedRef = useRef(false);

  const translateY = useRef(new Animated.Value(0)).current;
  const collapseDistance = -115;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) => {
        const isAtTop = scrollOffsetY.current <= 0;
        if (!collapsedRef.current && gesture.dy < -0.2) return true;
        if (collapsedRef.current && gesture.dy > 0.2 && isAtTop) return true;
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
            duration: 240,
            useNativeDriver: false,
          }).start(() => {
            setCollapsed(true);
            collapsedRef.current = true;
          });
        } else if (collapsedRef.current && dy > 80) {
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
  

  const sampleData = {
    Lifestyle: Array.from({ length: 18 }, (_, i) => ({
      id: `${i}`,
      title: 'Wild Stone Clone',
      description:
        'This is a collaboration between Toyo tires and TJ Hunt that’ll introduce a new form of tire wear',
      image: 'https://via.placeholder.com/600x400?text=Post+Image',
      comments: [
        {
          name: 'Timothy Smith',
          text: 'This is my comment that I’m posting as a thought, but what do you guys think?',
          likes: '67k',
        },
        {
          name: 'Anthony Garner',
          text: 'Excited to see this collaboration happen',
          likes: '23k',
        },
      ],
    })),
    Campaigns: [],
    Comments: [],
  };

  const fadeOutOpacity = translateY.interpolate({
    inputRange: [-115, -45, 0],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });

  const fadeOutOpacityStats = translateY.interpolate({
    inputRange: [-115, -60, 0],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });

  const headerMarginTop = translateY.interpolate({
    inputRange: [collapseDistance, 0],
    outputRange: [-90, 0],
    extrapolate: 'clamp',
  });

  const profileImageTranslate = translateY.interpolate({
    inputRange: [collapseDistance, 0],
    outputRange: [-95, 0],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    const load = async () => {
      await Asset.loadAsync([profileImage]);
      setImageLoaded(true);
    };
    load();
  }, []);

  useEffect(() => {
    if (selectedPost) {
      // Freeze collapse while viewing post, but do not animate
      setCollapsed(false);
      collapsedRef.current = false;
    }
  }, [selectedPost]);
  

  const toggleComments = (id) => {
    setExpandedThreadId((prev) => (prev === id ? null : id));
  };

  return (
    <View style={styles.container}>
      {imageLoaded && (
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.settingsIcon}>
            <Image source={settingsIcon} style={styles.settingsImage} />
          </TouchableOpacity>
          <Animated.View style={{ marginTop: headerMarginTop }}>
            <ImageBackground
              source={profileImage}
              style={styles.headerImage}
              resizeMode="cover"
            />
          </Animated.View>
          <View style={styles.curveWrapper}>
            <HeaderCurve height={20} color="#fff" />
          </View>
        </View>
      )}

      <Animated.View
        style={[
          styles.profileImageWrapper,
          { transform: [{ translateY: profileImageTranslate }] },
        ]}
      >
        <View style={styles.blankProfileCircle} />
      </Animated.View>

      <View style={styles.profileUserHeader}>
        <Text style={styles.name}>Freddy Mac</Text>
        <Text style={styles.username}>@Justfilming</Text>
      </View>

      <Animated.View
        style={[
          styles.profileCard,
          { transform: [{ translateY }], flex: 1 },
        ]}
        {...(selectedPost ? {} : panResponder.panHandlers)}
      >
        <Animated.View style={{ opacity: fadeOutOpacity }}>
          <Text style={styles.bio}>
            This is my tagline and I’m going to write something that helps market myself to be more exposed
          </Text>
        </Animated.View>

        <Animated.View style={{ opacity: fadeOutOpacityStats }}>
          <View style={styles.statsRow}>
            <View style={styles.statBlock}>
              <Text style={styles.statNumber}>354</Text>
              <Text style={styles.statLabel}>Audience</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.statBlock}>
              <Text style={styles.statNumber}>13</Text>
              <Text style={styles.statLabel}>Impact</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.statBlock}>
              <Text style={styles.statNumber}>4</Text>
              <Text style={styles.statLabel}>Connects</Text>
            </View>
          </View>
        </Animated.View>

        {/* Tabs */}
        {!selectedPost && (
          <View style={styles.tabRow}>
            {['Lifestyle', 'Campaigns', 'Bursts', 'Collections'].map((tab) => (
              <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
                <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                  {tab}
                </Text>
                {activeTab === tab && <View style={styles.tabIndicator} />}
              </TouchableOpacity>
            ))}
          </View>
        )}


        {/* Conditional Detail View */}
        {selectedPost ? (
          <View style={{ marginTop: -30 }}>
          <TouchableOpacity
            onPress={() => {
              setSelectedPost(null);

              Animated.timing(translateY, {
                toValue: collapseDistance,
                duration: 280,
                useNativeDriver: false,
              }).start(() => {
                setCollapsed(true);
                collapsedRef.current = true;
              });
            }}
            style={styles.backButton}
          >
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>

            <ThreadCard
              item={selectedPost}
              expandedId={expandedThreadId}
              toggleComments={toggleComments}
            />
          </View>
        ) : (
          <ScrollView
            ref={scrollRef}
            scrollEnabled={collapsed}
            onScroll={(e) => {
              scrollOffsetY.current = e.nativeEvent.contentOffset.y;
            }}
            scrollEventThrottle={16}
            contentContainerStyle={styles.grid}
            showsVerticalScrollIndicator={false}
            // bounces={false}
            // overScrollMode="never"
          >
            {sampleData[activeTab].map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.gridBox}
                onPress={() => {
                  setSelectedPost(item);
    
                  Animated.timing(translateY, {
                    toValue: collapseDistance,
                    duration: 280,
                    useNativeDriver: false,
                  }).start(() => {
                    setCollapsed(true);
                    collapsedRef.current = true;
                  });
                }}
              />
            ))}
          </ScrollView>
        )}
      </Animated.View>
    </View>
  );
}
