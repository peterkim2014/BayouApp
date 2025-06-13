import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { Link } from 'react-router-native';
import styles from '../styles/navStyle';

import threads from '../assets/threadsIcon.png'
import network from '../assets/networkIcon.png'
import campaign from '../assets/campaignIcon.png'
import profile from '../assets/profileIcon.png'

export default function NavBar() {
  return (
    <View style={styles.container}>
      <Link to="/" component={TouchableHighlight} underlayColor="#ddd" style={styles.link}>
        <View style={styles.iconStack}>
          <Image source={threads} style={styles.icon} />
          <Text style={styles.linkText}>Threads</Text>
        </View>
      </Link>

      <Link to="/network" component={TouchableHighlight} underlayColor="#ddd" style={styles.link}>
        <View style={styles.iconStack}>
          <Image source={network} style={styles.icon} />
          <Text style={styles.linkText}>Network</Text>
        </View>
      </Link>

      <Link to="/campaign" component={TouchableHighlight} underlayColor="#ddd" style={styles.link}>
        <View style={styles.iconStack}>
          <Image source={campaign} style={styles.icon} />
          <Text style={styles.linkText}>Campaign</Text>
        </View>
      </Link>

      <Link to="/profile" component={TouchableHighlight} underlayColor="#ddd" style={styles.link}>
        <View style={styles.iconStack}>
          <Image source={profile} style={styles.icon} />
          <Text style={styles.linkText}>Profile</Text>
        </View>
      </Link>
    </View>
  );
}
