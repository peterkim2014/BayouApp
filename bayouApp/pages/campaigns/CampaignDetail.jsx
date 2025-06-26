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
          <View style={styles.ribbonTriangle} />
          <View style={styles.ribbonBody}>
            <Text style={styles.viewerIcon}>👥</Text>
            <Text style={styles.viewerText}>{campaign.viewers}</Text>
          </View>
        </View>

        {/* Buttons for Like comment and join waitlist */}
      </ImageBackground>

      <View style={styles.bodyWrapper}>
        {/* Floating Buttons */}
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

            <Text style={styles.cardTitle}>{campaign.title}</Text>
        <ScrollView contentContainerStyle={styles.bodyScroll}>
            <Text style={styles.description}>
            This campaign showcases a dynamic collaboration...
            </Text>
        </ScrollView>
    </View>

    </View>
    </BackSwipeWrapper>
  );
}
