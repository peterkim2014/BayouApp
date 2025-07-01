// components/cards/ThreadCard.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../../styles/components/threadCard';

import likeIcon from '../../assets/likeIcon.png';
import thoughtsIcon from '../../assets/thoughtsIcon.png';
import waitlistIcon from '../../assets/waitlistIcon.png';
import UpArrow from '../UpArrow';

export default function ThreadCard({ item, expandedId, toggleComments }) {
  const [showActions, setShowActions] = useState(false);

  return (
    <View style={styles.card}>
      {/* Top Header */}
      <View style={styles.cardHeader}>
        <View style={styles.profileRow}>
          <Image source={{ uri: 'https://via.placeholder.com/28x28' }} style={styles.profileCircle} />
          <Text style={styles.username}>Jane Doe</Text>
        </View>
        <Text style={styles.watchingText}>👥 2.1M Watching</Text>
      </View>

      {/* Image */}
      <Image
        source={{ uri: 'https://via.placeholder.com/600x400.png?text=Thread+Image' }}
        style={styles.cardImage}
      />

      {/* Action Icons */}
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.iconCircle}>
          <Image source={likeIcon} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconCircle}>
          <Image source={thoughtsIcon} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconCircle}>
          <Image source={waitlistIcon} style={styles.iconImage} />
        </TouchableOpacity>
      </View>


      {/* Title, Stars, Stats, Description */}
      <View style={styles.metaRow}>
        <View style={styles.leftMeta}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.ratingStars}>★★★★☆</Text>
        </View>
        <View style={styles.rightStats}>
          <View style={styles.statColumn}>
            <Text style={styles.statValue}>87%</Text>
            <Text style={styles.statLabel}>Looks</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statColumn}>
            <Text style={styles.statValue}>91%</Text>
            <Text style={styles.statLabel}>Feel</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statColumn}>
            <Text style={styles.statValue}>$$</Text>
            <Text style={styles.statLabel}>Cost</Text>
          </View>
        </View>
      </View>

      <Text style={styles.cardDescription}>{item.description}</Text>

      {/* Toggle Comments */}
      {toggleComments && (
        <TouchableOpacity style={styles.commentButton} onPress={() => toggleComments(item.id)}>
          <Text style={styles.commentButtonText}>
            {expandedId === item.id ? '▾ Close Comments' : '▾ Open Comments'}
          </Text>
        </TouchableOpacity>
      )}

      {/* Comments */}
      {expandedId === item.id && item.comments && (
        <View style={styles.commentSection}>
          {item.comments.map((comment, idx) => (
            <View key={idx} style={styles.commentBlock}>
              <View style={styles.commentHeader}>
                <Text style={styles.commentAuthor}>{comment.name}</Text>
                <View style={styles.commentActions}>
                  <Text style={styles.commentActionText}>👍 {comment.likes}</Text>
                  <Text style={styles.commentActionText}>👎 {comment.dislikes}</Text>
                </View>
              </View>
              <Text style={styles.commentText}>{comment.text}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
