// components/ThreadHome.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from '../../styles/pages/threads/threadHome';

export default function ThreadHome() {
  const [activeTab, setActiveTab] = useState('Lifestyle');
  const [expandedThreadId, setExpandedThreadId] = useState(null);

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
        <Text style={styles.headerTitle}>Threads</Text>
        <View style={styles.tabRow}>
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
            <TouchableOpacity style={styles.commentButton} onPress={() => toggleComments(item.id)}>
              <Text style={styles.commentButtonText}>
                {expandedThreadId === item.id ? '▾ Close Comments' : '▾ Open Comments'}
              </Text>
            </TouchableOpacity>

            {/* Conditional Comments Section */}
            {expandedThreadId === item.id && (
              <View style={styles.commentSection}>
                {item.comments.map((comment, index) => (
                  <View key={index} style={styles.commentBlock}>
                    <View style={styles.commentHeader}>
                      <Text style={styles.commentAuthor}>{comment.name}</Text>
                      <View style={styles.commentActions}>
                        <Text style={styles.commentActionText}>👍 {comment.likes.toLocaleString()}</Text>
                        <Text style={styles.commentActionText}>👎 {comment.dislikes.toLocaleString()}</Text>
                      </View>
                    </View>
                    <Text style={styles.commentText}>{comment.text}</Text>
                    {index === item.comments.length - 1 && <Text style={styles.seeMore}>See more</Text>}
                  </View>
                ))}
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
}
