import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions,
  PanResponder,
  Image,
} from 'react-native';
import { useLocation, useParams, useNavigate } from 'react-router-native';
import styles from '../../styles/pages/campaign/campaignDetail';
import BackSwipeWrapper from '../../components/BackSwipeWrapper';

import likeIcon from '../../assets/likeIcon.png';
import thoughtsIcon from '../../assets/thoughtsIcon.png';
import waitlistIcon from '../../assets/waitlistIcon.png';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export default function CampaignDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const campaign = location.state;
  const [scrollLocked, setScrollLocked] = useState(false);
  const dragLocked = useRef(false);
  const [isDraggingDown, setIsDraggingDown] = useState(false);


  if (!campaign) return <Text>Loading campaign...</Text>;

  const [collapsed, setCollapsed] = useState(false);
  const scrollOffsetY = useRef(0);
  const collapsedRef = useRef(false);
  const translateY = useRef(new Animated.Value(0)).current;

  const collapseDistance = -200;
  const scrollViewRef = useRef();

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
          setIsDraggingDown(true);
          const offset = collapseDistance + dy * 0.25;
          translateY.setValue(Math.min(offset, 0));
        } else if (!collapsedRef.current && dy < 0) {
          setIsDraggingDown(false);
          const offset = Math.max(collapseDistance, dy);
          translateY.setValue(offset);
        }
      },
      onPanResponderRelease: (_, gesture) => {
        const dy = gesture.dy;
        setIsDraggingDown(false);

        if (!collapsedRef.current && dy < -50) {
          dragLocked.current = true;
          setScrollLocked(true);
          Animated.timing(translateY, {
            toValue: collapseDistance,
            duration: 280,
            useNativeDriver: true,
          }).start(() => {
            collapsedRef.current = true;
            setCollapsed(true);
            setScrollLocked(false); // ✅ unlock scroll after animation
            dragLocked.current = false;
          });
        } else if (collapsedRef.current && dy > 100) {
          dragLocked.current = true;
          setScrollLocked(true);
          Animated.timing(translateY, {
            toValue: 0,
            duration: 220,
            useNativeDriver: true,
          }).start(() => {
            collapsedRef.current = false;
            setCollapsed(false);
            setScrollLocked(false); // ✅ re-lock scroll on reset
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
    <BackSwipeWrapper>
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: 'https://via.placeholder.com/600x400' }}
          style={styles.headerImage}
          imageStyle={styles.imageRounded}
        >
          <TouchableOpacity onPress={() => navigate(-1)} style={styles.backButton}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>

          <View style={styles.viewerRibbon}>
            <View style={styles.ribbonBody}>
              <Text style={styles.viewerIcon}>👥</Text>
              <Text style={styles.viewerText}>{campaign.viewers}</Text>
            </View>
          </View>

          <Animated.View style={[styles.actionRow, { transform: [{ translateY }] }]}>
            <TouchableOpacity style={styles.actionPill}>
              <Image source={likeIcon} style={styles.actionIconImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionPill}>
              <Image source={thoughtsIcon} style={styles.actionIconImage} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionPill}
              onPress={() => navigate(`/campaign/${id}/waitlist`, { state: campaign })}
            >
              <Image source={waitlistIcon} style={styles.actionIconImage} />
            </TouchableOpacity>
          </Animated.View>
        </ImageBackground>

        {/* Animated Body */}
        <Animated.View
          style={{ transform: [{ translateY }], height: SCREEN_HEIGHT, }}
          {...panResponder.panHandlers}
        >
          <View style={styles.bodyWrapper}>
            {/* Info Row */}
            <View style={styles.infoRow}>
              <View style={styles.infoLeft}>
                <Text style={styles.cardTitle}>{campaign.title}</Text>
                <Text style={styles.subtitleText}>
                  {campaign.brand} / {campaign.creator}
                </Text>
                <View style={styles.ratingRow}>
                  <Text style={styles.ratingStars}>★★★★☆</Text>
                </View>
              </View>

              <View style={styles.infoRight}>
                <TouchableOpacity style={styles.followButton}>
                  <Text style={styles.followText}>+ Follow</Text>
                </TouchableOpacity>
                <View style={styles.statusPill}>
                  <Text style={styles.statusText}>{campaign.status}</Text>
                </View>
              </View>
            </View>

            {/* Stats */}
            <View style={styles.statsRow}>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>{campaign.likes}</Text>
                <Text style={styles.statLabel}>Likes</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>{campaign.thoughts}</Text>
                <Text style={styles.statLabel}>Thoughts</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>{campaign.waitlist}</Text>
                <Text style={styles.statLabel}>Waitlist</Text>
              </View>
            </View>

            {/* Scrollable content */}
            <ScrollView
              ref={scrollViewRef}
              scrollEnabled={collapsed && !scrollLocked}
              onScroll={(e) => {
                scrollOffsetY.current = e.nativeEvent.contentOffset.y;
              }}
              scrollEventThrottle={16}
              contentContainerStyle={styles.bodyScroll}
              showsVerticalScrollIndicator={false}
              bounces={!isDraggingDown}
              overScrollMode="never"
            >
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa...
              </Text>
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa...
              </Text>
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa...
              </Text>
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa...
              </Text>
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa...
              </Text>
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa...
              </Text>
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa...
              </Text>
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa...
              </Text>
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa...
              </Text>
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa...
              </Text>
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa...
              </Text>
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa...
              </Text>
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa...
              </Text>
            </ScrollView>
          </View>
        </Animated.View>
      </View>
    </BackSwipeWrapper>
  );
}
