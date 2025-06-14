import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../../styles/components/threadCard';

import likeIcon from '../../assets/likeIcon.png';
import thoughtsIcon from '../../assets/thoughtsIcon.png';
import waitlistIcon from '../../assets/waitlistIcon.png';
import watchIcon from '../../assets/watchIcon.png';
import UpArrow from '../UpArrow';
// import profilePic from '../../assets/profileImage.png'; 

export default function ThreadCard({ item, expandedId, toggleComments }) {
  const [showActions, setShowActions] = useState(false);

  return (
    <View style={styles.card}>
      {/* Header Row */}
      <View style={styles.cardHeader}>
        <View style={styles.profileRow}>
          {/* <Image source={profilePic} style={styles.profileImage} /> */}
          <View style={styles.profileCircle} />

          <Text style={styles.username}>John Doe</Text>
        </View>
        <Text style={styles.watchingText}>👥 2.1M Watching</Text>
      </View>

      {/* Placeholder */}
      <View style={styles.placeholderBox}>
        {/* Up arrow toggle */}
        <TouchableOpacity
          style={styles.upArrowToggle}
          onPress={() => setShowActions(prev => !prev)}
        >
          <UpArrow
            width={22}
            height={22}
            color="#333"
            style={{ transform: [{ rotate: showActions ? '180deg' : '0deg' }] }}
          />
        </TouchableOpacity>


        {showActions && (
          <View style={styles.iconActionsRow}>
            <View style={styles.iconPill}>
              <Image source={likeIcon} style={styles.pillIcon} />
              <Text style={styles.pillText}>Like</Text>
            </View>
            <View style={styles.iconPill}>
              <Image source={thoughtsIcon} style={styles.pillIcon} />
              <Text style={styles.pillText}>Thoughts</Text>
            </View>
            <View style={styles.iconPill}>
              <Image source={waitlistIcon} style={styles.pillIcon} />
              <Text style={styles.pillText}>Waitlist</Text>
            </View>
          </View>
        )}
      </View>

      {/* Content */}
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>

      {toggleComments && (
        <TouchableOpacity style={styles.commentButton} onPress={() => toggleComments(item.id)}>
          <Text style={styles.commentButtonText}>
            {expandedId === item.id ? '▾ Close Comments' : '▾ Open Comments'}
          </Text>
        </TouchableOpacity>
      )}

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
              {idx === item.comments.length - 1 && (
                <Text style={styles.seeMore}>See more</Text>
              )}
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
