import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput
} from 'react-native';
import styles from '../../styles/pages/utils/messagingRoom';
import { useNavigate, useLocation } from 'react-router-native';

const { width } = Dimensions.get('window');

export default function MessagingRoom() {
    const navigate = useNavigate();
    const location = useLocation();
    const brandData = location.state;
  
    return (
      <View style={styles.messagingRoomContainer}>
        {/* Example content */}
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

  
        <View style={styles.messageBubble}>
          <Text style={styles.messageTitle}>Collaboration with TJ</Text>
          <Text style={styles.messageDate}>Created on June 26, 2025</Text>
        </View>
  
        <View style={styles.brandMessageBlock}>
          <Image source={{ uri: brandData?.image }} style={styles.avatarSmall} />
          <Text style={styles.messageText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </Text>
        </View>
  
        <Text style={styles.typingText}>Typing..</Text>
  
        <TextInput
          placeholder="Type here..."
          style={styles.messageInput}
          multiline
        />
      </View>
    );
  }
  
