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
  StyleSheet,
} from 'react-native';
import { Asset } from 'expo-asset';
import styles from '../../styles/pages/profile/profileHome';
import profileImage from '../../assets/profileBackground.png';
import settingsIcon from '../../assets/settingsIcon.png';
import HeaderCurve from '../../components/HeaderCurve';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';


const { width } = Dimensions.get('window');

export default function ProfileHome() {
  const [activeTab, setActiveTab] = useState('Lifestyle');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const translateY = useRef(new Animated.Value(0)).current;
  const dragY = useRef(0);
  const scrollAtTopRef = useRef(true);

  const fadeOutOpacity = translateY.interpolate({
    inputRange: [-165, -80, 0],
    outputRange: [0, 0.3, 1],
    extrapolate: 'clamp',
  });

  const sampleData = {
    Lifestyle: Array.from({ length: 18 }, (_, i) => ({ id: `${i}` })),
    Campaigns: [],
    Comments: [],
  };

  useEffect(() => {
    const load = async () => {
      await Asset.loadAsync([profileImage]);
      setImageLoaded(true);
    };
    load();
  }, []);

  const handleScroll = (e) => {
    const offsetY = e.nativeEvent.contentOffset.y;
    scrollAtTopRef.current = offsetY <= 0;
  };

  const panGesture = Gesture.Pan()
  .onUpdate((e) => {
    dragY.current = e.translationY;
  })
  .onEnd(() => {
    const isSwipeDown = dragY.current > 30;
    const isSwipeUp = dragY.current < -30;

    if (isSwipeDown && isCollapsed && scrollAtTopRef.current) {
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
      }).start(() => {
        setIsCollapsed(false);
        dragY.current = 0;
      });
    } else if (isSwipeUp && !isCollapsed) {
      Animated.spring(translateY, {
        toValue: -165,
        useNativeDriver: true,
      }).start(() => {
        setIsCollapsed(true);
        dragY.current = 0;
      });
    } else {
      Animated.spring(translateY, {
        toValue: isCollapsed ? -165 : 0,
        useNativeDriver: true,
      }).start(() => {
        dragY.current = 0;
      });
    }
  });


  return (
    <View style={styles.container}>
      {imageLoaded && (
        <View style={styles.headerContainer}>
          <ImageBackground
            source={profileImage}
            style={styles.headerImage}
            resizeMode="cover"
          >
            <TouchableOpacity style={styles.settingsIcon}>
              <Image source={settingsIcon} style={styles.settingsImage} />
            </TouchableOpacity>
          </ImageBackground>
          <View style={styles.curveWrapper}>
            <HeaderCurve height={20} color="#fff" />
          </View>
        </View>
      )}

      {/* Profile Picture */}
      <View style={styles.profileImageWrapper}>
        <View style={styles.blankProfileCircle} />
      </View>

      <Animated.View
  style={[
    styles.profileCard,
    { transform: [{ translateY }] },
    isCollapsed && localStyles.collapsedCardHighlight,
  ]}
>
  {/* Content that fades in/out */}
  <Animated.View style={{ opacity: fadeOutOpacity }}>
    <Text style={styles.name}>Freddy Mac</Text>
    <Text style={styles.username}>@Justfilming</Text>
    <Text style={styles.bio}>
      This is my tagline and I’m going to write something that helps market myself to be more exposed
    </Text>

    <View style={styles.statsCard}>
      <View style={styles.statBlock}>
        <Text style={styles.statNumber}>354</Text>
        <Text style={styles.statLabel}>Audience</Text>
      </View>
      <View style={styles.statBlock}>
        <Text style={styles.statNumber}>13</Text>
        <Text style={styles.statLabel}>Impact</Text>
      </View>
      <View style={styles.statBlock}>
        <Text style={styles.statNumber}>4</Text>
        <Text style={styles.statLabel}>Connects</Text>
      </View>
    </View>
  </Animated.View>

  {/* Tabs */}
  <View style={styles.tabRow}>
    {['Lifestyle', 'Campaigns', 'Comments'].map((tab) => (
      <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
        <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
        {activeTab === tab && <View style={styles.tabIndicator} />}
      </TouchableOpacity>
    ))}
  </View>

  {/* ScrollView Interaction */}
  <ScrollView
  contentContainerStyle={styles.grid}
  scrollEnabled={true}
  scrollEventThrottle={16}
  onScroll={(e) => {
    const offsetY = e.nativeEvent.contentOffset.y;
    scrollAtTopRef.current = offsetY <= 0;
  }}
  onScrollEndDrag={(e) => {
    const offsetY = e.nativeEvent.contentOffset.y;
    const velocityY = e.nativeEvent.velocity?.y || 0;

    // 🧠 Flick up = velocityY > 0 (toward negative offset)
    if (!isCollapsed && velocityY > 0.25) {
      Animated.spring(translateY, {
        toValue: -165,
        useNativeDriver: true,
      }).start(() => {
        setIsCollapsed(true);
      });
    }

    // 🧠 Flick down at scroll top = expand
    if (isCollapsed && scrollAtTopRef.current && velocityY < -0.25) {
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
      }).start(() => {
        setIsCollapsed(false);
      });
    }
  }}
>
  {sampleData[activeTab].map((item) => (
    <View key={item.id} style={styles.gridBox} />
  ))}
</ScrollView>

</Animated.View>

    </View>
  );
}

const localStyles = StyleSheet.create({
  collapsedCardHighlight: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});
