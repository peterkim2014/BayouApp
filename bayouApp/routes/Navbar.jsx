// components/NavBar.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import styles from '../styles/navStyle'

export default function NavBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity to="/" underlayColor="#f0f4f7" style={styles.link}>
        <Text>Threads</Text>
      </TouchableOpacity>
      <TouchableOpacity to="/network" underlayColor="#f0f4f7" style={styles.link}>
        <Text>Network</Text>
      </TouchableOpacity>
      <TouchableOpacity to="/campaign" underlayColor="#f0f4f7" style={styles.link}>
        <Text>Campaign</Text>
      </TouchableOpacity>
      <TouchableOpacity to="/profile" underlayColor="#f0f4f7" style={styles.link}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
