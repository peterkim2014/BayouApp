import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions
} from 'react-native';
import { Asset } from 'expo-asset';
import styles from '../../styles/pages/profile/profileHome';

import profileImage from '../../assets/profileBackground.png';
import settingsIcon from '../../assets/settingsIcon.png'; // gear icon
// import placeholderAvatar from '../../assets/placeholderAvatar.png'; 

const { width } = Dimensions.get('window');

export default function ProfileHome() {
  const [activeTab, setActiveTab] = useState('Lifestyle');
  const [imageLoaded, setImageLoaded] = useState(false);

  const sampleData = {
    Lifestyle: Array.from({ length: 6 }, (_, i) => ({ id: `${i}`, label: '' })),
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
        </View>
      )}

      <View style={styles.profileCard}>
        <View style={styles.profileImageWrapper}>
          <View style={styles.blankProfileCircle} />
        </View>
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

        <View style={styles.tabRow}>
          {['Lifestyle', 'Campaigns', 'Comments'].map((tab) => (
            <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
              {activeTab === tab && <View style={styles.tabIndicator} />}
            </TouchableOpacity>
          ))}
        </View>

        <FlatList
          data={sampleData[activeTab]}
          keyExtractor={(item) => item.id}
          numColumns={3}
          columnWrapperStyle={styles.gridRow}
          contentContainerStyle={styles.grid}
          renderItem={() => <View style={styles.gridBox} />}
        />
      </View>
    </View>
  );
}
