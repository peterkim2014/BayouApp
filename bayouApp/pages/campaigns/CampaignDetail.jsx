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
        if (!collapsedRef.current && gesture.dy < -0.2) return true;
        if (collapsedRef.current && gesture.dy > 0.2 && isAtTop) return true;
        return false;
      },
      onPanResponderMove: (_, gesture) => {
        const dy = gesture.dy;
        if (collapsedRef.current && dy > 0) {
          const offset = collapseDistance + dy * 0.0001; // slower pull-down
          translateY.setValue(Math.min(offset, 0));
        } else if (!collapsedRef.current && dy < 0) {
          translateY.setValue(Math.max(collapseDistance, dy * 0.0001)); // slower push-up
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
          style={{ transform: [{ translateY }], height: SCREEN_HEIGHT / 1.8, }}
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
