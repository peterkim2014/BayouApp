import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/pages/campaign/campaignWaitlist';
import BackSwipeWrapper from '../../components/BackSwipeWrapper';
import { useNavigate } from 'react-router-native';


const { width } = Dimensions.get('window');

export default function CampaignWaitlist({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [creatorType, setCreatorType] = useState('');
  const [wantsBeta, setWantsBeta] = useState('');
  const navigate = useNavigate();

  return (
    <BackSwipeWrapper>
    <View style={styles.campaignWaitlistContainer}>
        {/* Header */}
        <View style={styles.headerWrapper}>
            <View style={styles.backRow}>
            <TouchableOpacity onPress={() => navigate(-1)} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            </View>

            <View style={styles.headerContent}>
                <View style={styles.headerLeft}>
                    <Text style={styles.title}>Nike Driveway</Text>
                    <Text style={styles.subtitle}>Nike / Nigel Sylvester</Text>
                </View>

                <View style={styles.headerRight}>
                    <View style={styles.headerRightTitle}>
                        <Ionicons name="document-text-outline" size={18} color="black" style={styles.iconSpacing} />
                        <Text style={styles.waitlistText}>Waitlist</Text>
                    </View>
                    <Text style={styles.waitlistSubText}>1.3K Members</Text>
                </View>

            </View>
        </View>


      {/* Product Cards */}
        {/* Product Cards */}
        <View style={styles.cardScrollWrapper}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.cardScroll}
            >
                <Image
                source={{ uri: 'https://via.placeholder.com/300x300/FFD700/000000?text=Shoe1' }}
                style={styles.productCard}
                />
                <Image
                source={{ uri: 'https://via.placeholder.com/300x300/FFFFFF/000000?text=Shoe2' }}
                style={styles.productCard}
                />
            </ScrollView>
        </View>


      {/* Form */}
      <View style={styles.form}>
        <Text style={styles.inputLabel}>Name</Text>
        <View style={styles.nameRow}>
          <TextInput
            style={styles.input}
            placeholder="First"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Last"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>

        <Text style={styles.inputLabel}>Creator Type</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>Select</Text>
        </TouchableOpacity>

        <Text style={styles.inputLabel}>
          Would you want to receive early access / beta test the product?
        </Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>Select</Text>
        </TouchableOpacity>
      </View>
    </View>
    </BackSwipeWrapper>
  );
}
