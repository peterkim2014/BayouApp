import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import styles from '../../styles/pages/utils/messagingNetwork';
import { useNavigate, useLocation } from 'react-router-native';

const { width } = Dimensions.get('window');

export default function MessagingHome() {
  const navigate = useNavigate();
  const location = useLocation();
  const brandData = location.state;

  return (
    <View style={styles.messagingHomeContainer}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigate(-1)} style={styles.backButton}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        <View style={styles.brandProfile}>
            <View style={styles.profileColumn}>
                <Image source={{ uri: brandData?.image }} style={styles.brandLogo} />
                <Text style={styles.profileName}>Starbucks</Text>
            </View>
            <View style={styles.profileColumn}>
                <Image source={{ uri: 'https://via.placeholder.com/60x60' }} style={styles.userProfile} />
                <Text style={styles.profileName}>Freddy</Text>
            </View>
        </View>


        <TouchableOpacity style={styles.newMessageButton}>
          <Text style={styles.plusIcon}>＋</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabsRow}>
        <Text style={[styles.tab, styles.activeTab]}>Unread</Text>
        <Text style={styles.tab}>Read</Text>
        <Text style={styles.tab}>All</Text>
      </View>

      {/* Messages */}
      <ScrollView contentContainerStyle={styles.messagesList}>
        {[1, 2, 3].map((_, i) => (
          <View key={i} style={styles.messageCard}>
            <View style={styles.messageAvatars}>
              <Image source={{ uri: brandData?.image }} style={styles.avatar} />
              <Image source={{ uri: 'https://via.placeholder.com/40x40' }} style={styles.avatarOverlay} />
            </View>
            <View style={styles.messageDetails}>
              <Text style={styles.messageTitle}>Collaboration with TJ</Text>
              <Text style={styles.messageDate}>Created on June 26, 2025</Text>
            </View>
            <TouchableOpacity style={styles.messageMenu}>
              <Text style={styles.menuDots}>⋮</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
