import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { Link, useLocation } from 'react-router-native';
import styles from '../styles/navStyle';

import threads from '../assets/threadsIcon.png';
import network from '../assets/networkIcon.png';
import campaign from '../assets/campaignIcon.png';
import profile from '../assets/profileIcon.png';
import burst from '../assets/burstsIcon.png';

export default function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  // const tabs = [
  //   { path: '/thread', label: 'Threads', icon: threads },
  //   { path: '/network', label: 'Network', icon: network },
  //   { path: '/campaign', label: 'Campaigns', icon: campaign },
  //   { path: '/burst', label: 'Bursts', icon: burst },
  //   { path: '/profile', label: 'Profile', icon: profile },
  // ];
  const tabs = [
    { path: '/thread', icon: threads },
    { path: '/network', icon: network },
    { path: '/campaign', icon: campaign },
    { path: '/burst', icon: burst },
    { path: '/profile', icon: profile },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => {
      const isActive =
        tab.path === '/'
          ? currentPath === '/'
          : currentPath.startsWith(tab.path);



        return (
          <Link
            key={index}
            to={tab.path}
            component={TouchableHighlight}
            underlayColor="transparent"
            style={styles.link}
          >
            <View style={styles.iconStack}>
            {isActive && <View style={styles.activeTabBump} />}
              <View style={[styles.iconWrapper, isActive && styles.activeIconWrapper]}>
                {isActive && <View style={styles.activeIconBackgroundCircle} />}
                <Image
                  source={tab.icon}
                  style={[styles.icon, isActive && styles.activeIcon]}
                />
              </View>
              <Text style={[styles.linkText, isActive && styles.activeText]}>
                {tab.label}
              </Text>
            </View>
          </Link>
        );
      })}
    </View>
  );
}