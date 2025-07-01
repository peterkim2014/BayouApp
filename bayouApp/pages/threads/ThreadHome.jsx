// components/ThreadHome.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigate } from 'react-router-native';
import styles from '../../styles/pages/threads/threadHome';

import logo from '../../assets/bayouLogo.png'
import ThreadCard from '../../components/cards/ThreadCard';
import alert from '../../assets/alertIcon.png'

export default function ThreadHome() {
  const [activeTab, setActiveTab] = useState('Lifestyle');
  const [expandedThreadId, setExpandedThreadId] = useState(null);
  const navigate = useNavigate();

  const data = {
    Lifestyle: [
      {
        id: '1',
        title: 'Toyo / TJ Hunt',
        description: 'This is a collaboration between Toyo tires and TJ Hunt that’ll introduce a new form of tire wear',
        comments: [
          { name: 'Timothy Smith', text: "This is my comment that I’m posting as a thought, but what do you guys think?", likes: '67k', dislikes: "" },
          { name: 'Anthony Garner', text: "Excited to see this collaboration happen", likes: '67k', dislikes: "" },
        ],
      },
      {
        id: '2',
        title: 'Toyo / TJ Hunt',
        description: 'This is a collaboration between Toyo tires and TJ Hunt that’ll introduce a new form of tire wear',
        comments: [
          { name: 'Timothy Smith', text: "This is my comment that I’m posting as a thought, but what do you guys think?", likes: '67k', dislikes: "" },
          { name: 'Anthony Garner', text: "Excited to see this collaboration happen", likes: '67k', dislikes: "" },
        ],
      },
    ],
    Campaigns: [
      { id: '3', title: 'Goodyear Campaign', description: 'A new Goodyear campaign is launching for eco-friendly tires.',
      comments: [
        { name: 'Timothy Smith', text: "This is my comment that I’m posting as a thought, but what do you guys think?", likes: '67k', dislikes: "" },
        { name: 'Anthony Garner', text: "Excited to see this collaboration happen", likes: '67k', dislikes: "" },
      ],
    },
    ],
  };

  const toggleComments = (id) => {
    setExpandedThreadId(expandedThreadId === id ? null : id);
  };

  return (
    <View style={styles.container}>

    {/* Header: Threads + Tabs */}
    <View style={styles.headerContainer}>

      <View style={styles.headerTopRow}>
        <View style={styles.headerLeftSection}>
          <Image source={logo} style={styles.headerIcon} />

          <View style={styles.logoTitleGroup}>
            <Text style={styles.headerTitle}>In the Thread</Text>

            <View style={styles.tabRow}>
              {['Lifestyle', 'Campaigns'].map((tab) => (
                <TouchableOpacity
                  key={tab}
                  onPress={() => setActiveTab(tab)}
                  style={[
                    styles.tab,
                    activeTab === tab && styles.activeTab,
                  ]}
                >
                  <Text style={[
                    styles.tabText,
                    activeTab === tab && styles.activeTabText,
                  ]}>
                    {tab}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.headerActions}>
          <TouchableOpacity
            style={styles.headerIconCircle}
            onPress={() => navigate('/thread/new-post')}
          >
            <Text style={styles.iconText}>＋</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIconCircle}>
            <Image source={alert} style={styles.notificationIcon} />
            {/* <Text style={styles.iconTextAlert}>🔔</Text> */}
            <View style={styles.redDot} />
          </TouchableOpacity>
        </View>

      </View>

      
    </View>



      {/* Feed Content */}
      <FlatList
        data={data[activeTab]}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.feed}
        renderItem={({ item }) => (
          <ThreadCard item={item} expandedId={expandedThreadId} toggleComments={toggleComments} />
        )}
      />
    </View>
  );
}
