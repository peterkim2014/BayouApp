// components/ThreadHome.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from '../../styles/pages/threads/threadHome';

export default function ThreadHome() {
  const [activeTab, setActiveTab] = useState('Lifestyle');

  const data = {
    Lifestyle: [
      { id: '1', title: 'Toyo / TJ Hunt', description: 'This is a collaboration between Toyo tires and TJ Hunt that’ll introduce a new form of tire wear' },
      { id: '2', title: 'Toyo / TJ Hunt', description: 'This is a collaboration between Toyo tires and TJ Hunt that’ll introduce a new form of tire wear' },
    ],
    Campaigns: [
      { id: '3', title: 'Goodyear Campaign', description: 'A new Goodyear campaign is launching for eco-friendly tires.' },
    ],
  };

  return (
    <View style={styles.container}>
      {/* Toggle Tabs */}
      <View style={styles.tabContainer}>
        {['Lifestyle', 'Campaigns'].map((tab) => (
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

      {/* Feed Content */}
      <FlatList
        data={data[activeTab]}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.feed}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.username}>John Doe</Text>
              <View style={styles.actions}>
                <Text>♡</Text>
                <Text>💬</Text>
              </View>
            </View>
            <View style={styles.placeholderBox} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
            <TouchableOpacity style={styles.commentButton}>
              <Text style={styles.commentButtonText}>▾ Open Comments</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
