import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Link } from 'react-router-native';
import styles from '../styles/navStyle';

export default function NavBar() {
  return (
    <View style={styles.container}>
      <Link to="/" component={TouchableHighlight} underlayColor="#ddd" style={styles.link}>
        <Text style={styles.linkText}>Threads</Text>
      </Link>
      <Link to="/network" component={TouchableHighlight} underlayColor="#ddd" style={styles.link}>
        <Text style={styles.linkText}>Network</Text>
      </Link>
      <Link to="/campaign" component={TouchableHighlight} underlayColor="#ddd" style={styles.link}>
        <Text style={styles.linkText}>Campaign</Text>
      </Link>
      <Link to="/profile" component={TouchableHighlight} underlayColor="#ddd" style={styles.link}>
        <Text style={styles.linkText}>Profile</Text>
      </Link>
    </View>
  );
}
