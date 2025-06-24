import React, { useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from '../../styles/pages/burst/burstHome';

const { width, height } = Dimensions.get('window');

const burstData = [
  {
    id: 1,
    title: 'Vans / Violent',
    description: 'Collaboration for shoe enthusiasts to feel the comfort and luxury feel',
    image: 'https://via.placeholder.com/600x900?text=Vans',
  },
  {
    id: 2,
    title: 'Nike / Atmos',
    description: 'Experience modern streetwear with Japanese style',
    image: 'https://via.placeholder.com/600x900?text=Nike',
  },
  {
    id: 3,
    title: 'Adidas / HumanRace',
    description: 'Sport meets style in Pharrell’s iconic collection',
    image: 'https://via.placeholder.com/600x900?text=Adidas',
  },
];

export default function BurstHome() {
  const scrollRef = useRef(null);

  return (
    <View style={{ width: width }}>
      <View style={styles.pageDots}>
        {burstData.map((_, dotIndex) => (
          <View key={dotIndex} style={styles.dot} />
        ))}
      </View>

      <ScrollView
        ref={scrollRef}
        pagingEnabled
        showsVerticalScrollIndicator={false}
      >
        {burstData.map((burst, i) => (
          <ImageBackground
            key={i}
            source={{ uri: burst.image }}
            style={styles.page}
            imageStyle={styles.backgroundImage}
          >
            {/* Card */}
            <View style={styles.card}>
              <TouchableOpacity style={styles.cardTopRightArrow}>
                <Text style={styles.cardButtonArrow}>→</Text>
              </TouchableOpacity>
              <Text style={styles.cardTitle}>{burst.title}</Text>
              <Text style={styles.cardDescription}>{burst.description}</Text>
            </View>
          </ImageBackground>
        ))}
      </ScrollView>
    </View>
  );
}
