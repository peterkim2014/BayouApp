// components/shared/ThreadCard.js
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../../styles/components/threadCard';

export default function ThreadCard({ item, expandedId, toggleComments }) {
  return (
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
