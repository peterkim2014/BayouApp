import React from 'react';
import {
  View,
  Text,
  Animated,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from '../../styles/pages/network/networkHome';

const mockPeople = [
  { name: 'John Doe', title: 'Golf Influencer' },
  { name: 'Jane Doe', title: 'Beauty Influencer' },
  { name: 'James Doe', title: 'Music Producer' },
];

function Header({ translateY, navigate }) {
    const width = 320;
    const collapseDistance = -115;
  
    const profileCardWidth = translateY.interpolate({
      inputRange: [collapseDistance, 0],
      outputRange: [width * 0.16, width * 0.32],
      extrapolate: 'clamp',
    });
  
    const profileCardHeight = translateY.interpolate({
      inputRange: [collapseDistance, 0],
      outputRange: [50, 170],
      extrapolate: 'clamp',
    });
  
    const profileBorderRadius = translateY.interpolate({
      inputRange: [collapseDistance, 0],
      outputRange: [110, 8],
      extrapolate: 'clamp',
    });
  
    const profileTranslateY = translateY.interpolate({
      inputRange: [collapseDistance, 0],
      outputRange: [-35, -15],
      extrapolate: 'clamp',
    });
  
    const scrollPaddingTop = translateY.interpolate({
      inputRange: [collapseDistance, 0],
      outputRange: [30, 10],
      extrapolate: 'clamp',
    });
  
    return (
      <Animated.View
        style={{
          transform: [
            {
              translateY: translateY.interpolate({
                inputRange: [collapseDistance, 0],
                outputRange: [-75, 35],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
      >
        <View style={styles.featuredHeaderRow}>
          <Text style={styles.featuredHeaderText}>Featured Curators</Text>
          <TouchableOpacity>
            <Animated.Text
              style={{
                fontSize: translateY.interpolate({
                  inputRange: [collapseDistance, collapseDistance * 0.001],
                  outputRange: [0.01, 12],
                  extrapolate: 'clamp',
                }),
                opacity: translateY.interpolate({
                  inputRange: [collapseDistance, collapseDistance * 0.001],
                  outputRange: [0, 1],
                  extrapolate: 'clamp',
                }),
              }}
            >
              See All
            </Animated.Text>
          </TouchableOpacity>
        </View>
  
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.profileScroll}
          style={styles.profileScroll}
        >
          <View style={styles.profileContainer}>
            {mockPeople.map((person, i) => (
            <TouchableOpacity
              key={i}
              activeOpacity={0.85}
              onPress={() => navigate('/network/selected-profile', { state: person })}
            >
              <Animated.View
                key={i}
                style={[
                  styles.profileCard,
                  {
                    width: profileCardWidth,
                    transform: [{ translateY: profileTranslateY }],
                    borderRadius: profileBorderRadius,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginTop: scrollPaddingTop,
                  },
                ]}
              >
                <Animated.View
                  style={[
                    styles.profilePlaceholder,
                    {
                      height: profileCardHeight,
                      width: profileCardWidth,
                      borderRadius: profileBorderRadius,
                    },
                  ]}
                />
                <Animated.Text
                  style={{
                    fontSize: translateY.interpolate({
                      inputRange: [collapseDistance, -collapseDistance / 2],
                      outputRange: [9, 12],
                      extrapolate: 'clamp',
                    }),
                  }}
                >
                  {person.name}
                </Animated.Text>
                <Animated.Text
                  style={{
                    fontSize: translateY.interpolate({
                      inputRange: [collapseDistance, -collapseDistance / 2],
                      outputRange: [0.01, 14],
                      extrapolate: 'clamp',
                    }),
                    opacity: translateY.interpolate({
                      inputRange: [collapseDistance, -collapseDistance / 2],
                      outputRange: [0, 1],
                      extrapolate: 'clamp',
                    }),
                  }}
                >
                  {person.title}
                </Animated.Text>
              </Animated.View>
            </TouchableOpacity>
            ))}
  
            {/* See All Button */}
            <Animated.View
              style={{
                opacity: translateY.interpolate({
                  inputRange: [collapseDistance, collapseDistance * 0.8],
                  outputRange: [1, 0],
                  extrapolate: 'clamp',
                }),
                transform: [
                  {
                    scale: translateY.interpolate({
                      inputRange: [collapseDistance, collapseDistance * 0.8],
                      outputRange: [1, 0.9],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              }}
            >
              <TouchableOpacity
                onPress={() => navigate('/network/featured')}
                style={[
                  styles.profileCard,
                  {
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#f0f0f0',
                    marginLeft: 10,
                    marginRight: 10,
                    padding: 12,
                    marginTop: -5,
                    paddingHorizontal: 0,
                    borderRadius: 40,
                    borderWidth: 7,
                    borderColor: "#f0f0f0",
                    opacity: 0.6,
                  },
                ]}
              >
                <Text style={{ fontWeight: 'bold', fontSize: 12 }}>See All</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </ScrollView>
      </Animated.View>
    );
  }
  

  function Body({ translateY, collapsed, scrollRef, onScrollY }) {
    const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);
    const collapseDistance = -115;
  
    const scrollBodyMarginTop = translateY.interpolate({
      inputRange: [collapseDistance, 0],
      outputRange: [0, 0],
      extrapolate: 'clamp',
    });
  
    const paddingTop = translateY.interpolate({
      inputRange: [collapseDistance, 0],
      outputRange: [-105, -5],
      extrapolate: 'clamp',
    });
  
    return (
      <Animated.View
        style={[
          styles.scrollBody,
          { marginTop: scrollBodyMarginTop },
        ]}
      >
        <Text style={styles.sectionTitle}>Popular Posts</Text>
        <AnimatedScrollView
          ref={scrollRef}
          scrollEnabled={collapsed}
          onScroll={(e) => {
            onScrollY.current = e.nativeEvent.contentOffset.y;
          }}
          scrollEventThrottle={16}
          bounces={false}
          overScrollMode="never"
          style={[
            styles.scrollBodyContent,
            { paddingTop },
          ]}
        >
          <View style={styles.gridContainer}>
            {Array(24)
              .fill(null)
              .map((_, i) => (
                <View key={i} style={styles.gridItem} />
              ))}
          </View>
        </AnimatedScrollView>
      </Animated.View>
    );
  }
  

export default { Header, Body };
