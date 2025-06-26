import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { useLocation, useParams, useNavigate } from 'react-router-native';
import styles from '../../styles/pages/campaign/campaignDetail';

import likeIcon from '../../assets/likeIcon.png';
import thoughtsIcon from '../../assets/thoughtsIcon.png';
import waitlistIcon from '../../assets/waitlistIcon.png';
import BackSwipeWrapper from '../../components/BackSwipeWrapper';

export default function CampaignDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const campaign = location.state;

  if (!campaign) return <Text>Loading campaign...</Text>;

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
          {/* Action Pills */}
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.actionPill}>
              <Image source={likeIcon} style={styles.actionIconImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionPill}>
              <Image source={thoughtsIcon} style={styles.actionIconImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionPill}>
              <Image source={waitlistIcon} style={styles.actionIconImage} />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.bodyWrapper}>

          {/* Title, Subtitle, Stars */}
          <Text style={styles.cardTitle}>{campaign.title}</Text>
          <Text style={styles.subtitleText}>{campaign.brand} / {campaign.creator}</Text>
          <View style={styles.ratingRow}>
            <Text style={styles.ratingStars}>★★★★☆</Text>
          </View>

          {/* Follow + Status */}
          <View style={styles.followRow}>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followText}>+ Follow</Text>
            </TouchableOpacity>
            <View style={styles.statusPill}>
              <Text style={styles.statusText}>{campaign.status}</Text>
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

          <ScrollView contentContainerStyle={styles.bodyScroll}>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
            </Text>
          </ScrollView>
        </View>
      </View>
    </BackSwipeWrapper>
  );
}
