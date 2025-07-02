import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from '../../styles/pages/burst/burstHome';
import { useNavigate } from 'react-router-native';
import violentShoeCollabb from '../../assets/violentShoeCollabb.webp';
import { BlurView } from 'expo-blur';


const { width, height } = Dimensions.get('window');

const burstData = [
  { id: 1, title: 'Vans / Violent', description: 'Collaboration for shoe enthusiasts...', image: 'https://via.placeholder.com/600x900?text=Vans' },
  { id: 2, title: 'Nike / Atmos', description: 'Experience modern streetwear...', image: 'https://via.placeholder.com/600x900?text=Nike' },
  { id: 3, title: 'Adidas / HumanRace', description: 'Sport meets style in Pharrell’s...', image: 'https://via.placeholder.com/600x900?text=Adidas' },
  { id: 4, title: 'Puma / Ader', description: 'Progressive design in comfort', image: 'https://via.placeholder.com/600x900?text=Puma' },
  { id: 5, title: 'Reebok / Pyer Moss', description: 'Futuristic streetwear collab', image: 'https://via.placeholder.com/600x900?text=Reebok' },
  { id: 6, title: 'New Balance / JJJJound', description: 'Minimalism meets quality', image: 'https://via.placeholder.com/600x900?text=NB' },
];

export default function BurstHome() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dotWindowSize = 3;

  const handleScroll = (e) => {
    const yOffset = e.nativeEvent.contentOffset.y;
    const newIndex = Math.round(yOffset / height);
    if (newIndex !== currentIndex) setCurrentIndex(newIndex);
  };

  const scrollToIndex = (index) => {
    scrollRef.current?.scrollTo({ y: index * height, animated: true });
    setCurrentIndex(index);
  };

  const getVisibleDots = () => {
    const maxDots = 5;
    const total = burstData.length;
  
    if (total <= maxDots) return burstData;
  
    if (currentIndex <= 2) return burstData.slice(0, 5);
  
    if (currentIndex >= total - 2) return burstData.slice(total - 5);
  
    return burstData.slice(currentIndex - 2, currentIndex + 3);
  };
  

  return (
    <View style={{ width: width }}>
      {/* 🔘 Fixed Dot Bar */}
      <View style={styles.pageDots}>
        {getVisibleDots().map((item, idx) => {
          const actualIndex = burstData.findIndex(b => b.id === item.id);
          const isActive = actualIndex === currentIndex;

          return (
            <TouchableOpacity key={item.id} onPress={() => scrollToIndex(actualIndex)}>
              <View style={[styles.dot, isActive && styles.activeDot]} />
            </TouchableOpacity>
          );
        })}
      </View>

      {/* 📜 Vertical Burst Scroll */}
      <ScrollView
        ref={scrollRef}
        pagingEnabled
        onMomentumScrollEnd={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        
        {burstData.map((burst, i) => (
          <ImageBackground
            key={burst.id}
            source={violentShoeCollabb}
            style={styles.page}
            imageStyle={styles.backgroundImage}
          >
            <View style={styles.heroCardWrapper}>
              <BlurView intensity={40} tint="light" style={styles.heroCard}>
              <View style={styles.card}>
                <TouchableOpacity
                  style={styles.cardTopRightArrow}
                  onPress={() => navigate(`/campaign/${burst.id}`, { state: { campaign: burst } })}
                >
                  <Text style={styles.cardButtonArrow}>→</Text>
                </TouchableOpacity>
                <Text style={styles.cardTitle}>{burst.title}</Text>
                <Text style={styles.cardDescription}>{burst.description}</Text>
              </View>
            </BlurView>
            </View>
          </ImageBackground>
        ))}
      </ScrollView>
    </View>
  );
}
