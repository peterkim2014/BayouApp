import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';
import styles from '../../styles/pages/network/networkHome';
import logo from '../../assets/bayouLogo.png'

import ThreadCard from '../../components/cards/ThreadCard';

const categories = [
  { id: '1', label: 'Vlogging', 
//   icon: require('../../assets/icons/vlogging.png') 
},
  { id: '2', label: 'Automotive', 
//   icon: require('../../assets/icons/automotive.png') 
},
  { id: '3', label: 'Fishing', 
//   icon: require('../../assets/icons/fishing.png') 
},
  { id: '4', label: 'Boats', 
//   icon: require('../../assets/icons/boats.png') 
},
  { id: '5', label: 'Cooking', 
//   icon: require('../../assets/icons/cooking.png') 
},
];

const topCreators = [
  { id: '1', name: 'John Doe', 
//   image: require('../../assets/creators/john.png') 
},
  { id: '2', name: 'Jane Doe', 
//   image: require('../../assets/placeholders/blank.png') 
},
  { id: '3', name: 'James Doe', 
//   image: require('../../assets/placeholders/blank.png') 
},
];

const activities = {
  Lifestyle: [
    { id: '1', name: 'John Doe', viewers: '2.1M', 
    // image: require('../../assets/creators/john.png') 
}
  ],
  Campaigns: []
};

export default function NetworkHome() {
    const [activeTab, setActiveTab] = useState('Lifestyle');
  
    const renderHeader = () => (
      <View style={styles.body}>
        {/* Creator Categories */}
        <Text style={styles.sectionTitle}>Creator Categories</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.categoryList}
          renderItem={({ item }) => (
            <View style={styles.categoryItem}>
              <View style={styles.categoryCircle}>
                {item.icon && <Image source={item.icon} style={styles.categoryIcon} />}
              </View>
              <Text style={styles.categoryLabel}>{item.label}</Text>
            </View>
          )}
        />
  
        {/* Top Trending Creators */}
        <Text style={styles.sectionTitle}>Top Trending Creators</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={topCreators}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.creatorList}
          renderItem={({ item }) => (
            <View style={styles.creatorShadowWrapper}>
              <View style={styles.creatorCard}>
                <Image source={item.image} style={styles.creatorImage} />
                <View style={styles.creatorNameOverlay}>
                  <Text style={styles.creatorName}>{item.name}</Text>
                </View>
              </View>
            </View>
          )}
        />
  
        {/* Recent Activities Tabs */}
        <Text style={styles.sectionTitle}>Recent Activities Creators</Text>
        <View style={styles.activityTabs}>
          {['Lifestyle', 'Campaigns'].map((tab) => (
            <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
              <Text style={[
                styles.activityTabText,
                activeTab === tab && styles.activeActivityTab
              ]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <View style={styles.headerTitleRow}>
            <Image source={logo} style={styles.headerIcon} />
            <Text style={styles.headerTitle}>Network</Text>
          </View>
  
          <View style={styles.tabRow}>
            {['Creators', 'Brands', 'Viewers'].map((tab) => (
              <TouchableOpacity key={tab} style={[styles.tab, tab === 'Creators' && styles.activeTab]}>
                <Text style={[styles.tabText, tab === 'Creators' && styles.activeTabText]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
  
        {/* Primary FlatList with header */}
        <FlatList
          data={activities[activeTab]}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={renderHeader}
          contentContainerStyle={styles.activityList}
          renderItem={({ item }) => (
            <ThreadCard item={item} />
          )}
        />
      </View>
    );
  }
  