import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/pages/utils/newPost';
import { useNavigate } from 'react-router-native';

export default function NewPost({ navigation }) {
    const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Lifestyle');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [search, setSearch] = useState('');
  const [parties, setParties] = useState([
    { id: '1', name: 'John Doe', image: 'https://via.placeholder.com/40x40' },
    { id: '2', name: 'Starbucks', image: 'https://logo.clearbit.com/starbucks.com' },
  ]);

  const handleRemoveParty = (id) => {
    setParties(parties.filter(p => p.id !== id));
  };

  return (
    <View style={styles.screenWrapper}>
      {/* Back Arrow */}
      <TouchableOpacity onPress={() => navigate(-1)} style={styles.backButton}>
            <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

      {/* Header */}
      <Text style={styles.header}>New Post</Text>

      {/* Tabs */}
      <View style={styles.tabRow}>
        {['Lifestyle', 'Campaigns'].map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tab,
              activeTab === tab && styles.activeTab
            ]}
          >
            <Text style={[
              styles.tabText,
              activeTab === tab && styles.activeTabText
            ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

    {/* Image Upload Placeholder */}
    <View style={styles.imageUploadBox}>
        <TouchableOpacity style={styles.imageUploadInner}>
        <Ionicons name="add" size={30} color="#666" />
        </TouchableOpacity>

        <View style={styles.imageSideStack}>
        <View style={styles.sideThumbnail} />
        <View style={styles.sideThumbnail} />
        <View style={styles.sideThumbnail} />
        </View>
    </View>
      {/* Scrollable Form Section */}
      <ScrollView contentContainerStyle={styles.newPostContainer} showsVerticalScrollIndicator={false}>

        {/* Title */}
        <Text style={styles.label}>Title of Post</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          value={title}
          onChangeText={setTitle}
        />

        {/* Parties Involved */}
        <Text style={styles.label}>Parties involved</Text>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={search}
          onChangeText={setSearch}
        />

        {/* Selected Tags */}
        <View style={styles.tagContainer}>
          {parties.map(p => (
            <View key={p.id} style={styles.tagPill}>
              <Image source={{ uri: p.image }} style={styles.tagImage} />
              <Text style={styles.tagText}>{p.name}</Text>
              <TouchableOpacity onPress={() => handleRemoveParty(p.id)}>
                <Ionicons name="close" size={16} color="#333" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Description */}
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Type here..."
          value={description}
          onChangeText={setDescription}
          multiline
        />
      </ScrollView>
    </View>
  );
}
