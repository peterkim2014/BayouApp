import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/pages/network/networkSearch';
import BackSwipeWrapper from '../../components/BackSwipeWrapper';
import { useNavigate } from 'react-router-native';

export default function NetworkSearch() {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const categories = [
    { label: 'Vlogging' },
    { label: 'Automotive' },
    { label: 'Fishing' },
    { label: 'Boats' },
    { label: 'Cooking' },
  ];
  

  const history = [
    { name: 'Grant Horvat', subtitle: 'Golf Influencer' },
    { name: 'Titleist Series / Ali Willards', subtitle: 'Golf / Product' },
    { name: 'RangeFinder / Good Good', subtitle: 'Golf /Service' },
    { name: 'Louis Vuitton / Nike', subtitle: 'Shoe / Product' },
  ];

  return (
    <BackSwipeWrapper>
      <View style={styles.networkSearchContainer}>
        <View style={styles.headerSearchContainer}>
            <TouchableOpacity onPress={() => navigate(-1)} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            {/* Search Bar */}
            <View style={styles.searchBar}>
            <TextInput
                placeholder="Search..."
                style={styles.searchInput}
                value={searchText}
                onChangeText={setSearchText}
            />
                <TouchableOpacity
                style={styles.clearButton}
                onPress={() => setSearchText('')}
                >
                    <Ionicons name="close" size={20} color="#000" />
                </TouchableOpacity>
            </View>
        </View>

        {/* Categories */}
        <Text style={styles.sectionLabel}>Categories</Text>
        <View style={styles.categoryWrapper}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoryRow}
            >
                {categories.map((cat, index) => (
                <View key={index} style={styles.categoryItem}>
                    <View style={styles.categoryIconPlaceholder} />
                    <Text style={styles.categoryLabel}>{cat.label}</Text>
                </View>
                ))}
            </ScrollView>
        </View>


        {/* History */}
        {/* History in vertical scroll */}
        <Text style={styles.sectionLabel}>History</Text>
        <ScrollView
            contentContainerStyle={styles.historyScrollContent}
            showsVerticalScrollIndicator={false}
            >
            {history.map((item, index) => (
                <View key={index} style={styles.historyItem}>
                <View>
                    <Text style={styles.historyTitle}>{item.name}</Text>
                    <Text style={styles.historySubtitle}>{item.subtitle}</Text>
                </View>
                <View style={styles.actionButtons}>
                    <View style={styles.circleButton} />
                    <View style={styles.circleButton} />
                </View>
                </View>
            ))}
            </ScrollView>
      </View>
    </BackSwipeWrapper>
  );
}
