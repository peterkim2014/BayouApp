import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  Animated,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import styles from '../../styles/pages/network/brandsContent';
import ThreadCard from '../../components/cards/ThreadCard';

const brands = [
  { name: 'Starbucks', category: 'Food & Drinks', image: 'https://logo.clearbit.com/starbucks.com' },
  { name: 'Lululemon', category: 'Clothing', image: 'https://logo.clearbit.com/lululemon.com' },
  { name: 'Mizuno', category: 'Golf', image: 'https://logo.clearbit.com/mizunousa.com' },
  { type: 'seeAll' }
];

const products = [
    { name: 'Vessel', category: 'Golf', image: 'https://via.placeholder.com/300x400?text=Vessel' },
    { name: 'Adidas', category: 'Shoes', image: 'https://via.placeholder.com/300x400?text=Adidas' },
    { name: 'Elf', category: 'Beauty', image: 'https://via.placeholder.com/300x400?text=Elf' },
    { name: 'Vessel', category: 'Golf', image: 'https://via.placeholder.com/300x400?text=Vessel' },
    { name: 'Adidas', category: 'Shoes', image: 'https://via.placeholder.com/300x400?text=Adidas' },
    { name: 'Elf', category: 'Beauty', image: 'https://via.placeholder.com/300x400?text=Elf' },
    { name: 'Vessel', category: 'Golf', image: 'https://via.placeholder.com/300x400?text=Vessel' },
    { name: 'Adidas', category: 'Shoes', image: 'https://via.placeholder.com/300x400?text=Adidas' },
    { name: 'Elf', category: 'Beauty', image: 'https://via.placeholder.com/300x400?text=Elf' },
    { name: 'Vessel', category: 'Golf', image: 'https://via.placeholder.com/300x400?text=Vessel' },
    { name: 'Adidas', category: 'Shoes', image: 'https://via.placeholder.com/300x400?text=Adidas' },
    { name: 'Elf', category: 'Beauty', image: 'https://via.placeholder.com/300x400?text=Elf' },
    { name: 'Vessel', category: 'Golf', image: 'https://via.placeholder.com/300x400?text=Vessel' },
    { name: 'Adidas', category: 'Shoes', image: 'https://via.placeholder.com/300x400?text=Adidas' },
    { name: 'Elf', category: 'Beauty', image: 'https://via.placeholder.com/300x400?text=Elf' },
    { name: 'Vessel', category: 'Golf', image: 'https://via.placeholder.com/300x400?text=Vessel' },
    { name: 'Adidas', category: 'Shoes', image: 'https://via.placeholder.com/300x400?text=Adidas' },
    { name: 'Elf', category: 'Beauty', image: 'https://via.placeholder.com/300x400?text=Elf' },
    { name: 'Vessel', category: 'Golf', image: 'https://via.placeholder.com/300x400?text=Vessel' },
    { name: 'Adidas', category: 'Shoes', image: 'https://via.placeholder.com/300x400?text=Adidas' },
    { name: 'Elf', category: 'Beauty', image: 'https://via.placeholder.com/300x400?text=Elf' },
  ];
  

  function Header({ translateY, navigate, selectedPost }) {
    const collapseDistance = -115;
    const width = 320;

    // All interpolations precomputed
    const cardWidth = useMemo(() => translateY.interpolate({
      inputRange: [collapseDistance, 0],
      outputRange: [width * 0.16, width * 0.32],
      extrapolate: 'clamp',
    }), [translateY]);
  
    const cardHeight = useMemo(() => translateY.interpolate({
      inputRange: [collapseDistance, 0],
      outputRange: [50, 120],
      extrapolate: 'clamp',
    }), [translateY]);
  
    const cardRadius = useMemo(() => translateY.interpolate({
      inputRange: [collapseDistance, 0],
      outputRange: [110, 8],
      extrapolate: 'clamp',
    }), [translateY]);
  
    const translateCards = useMemo(() => translateY.interpolate({
      inputRange: [collapseDistance, 0],
      outputRange: [-35, -15],
      extrapolate: 'clamp',
    }), [translateY]);
  
    const paddingTop = useMemo(() => translateY.interpolate({
      inputRange: [collapseDistance, 0],
      outputRange: [30, 10],
      extrapolate: 'clamp',
    }), [translateY]);
  
    const opacityNewSection = useMemo(() => translateY.interpolate({
      inputRange: [-75 , 0],
      outputRange: [0,1],
      extrapolate: 'clamp',
    }), [translateY]);
  
    const renderBrandCard = ({ item }) => {
      if (item.type === 'seeAll') {
        return (
          <Animated.View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              opacity: translateY.interpolate({
                inputRange: [collapseDistance, collapseDistance * 0.6],
                outputRange: [1, 0],
                extrapolate: 'clamp',
              }),
              transform: [
                {
                  scale: translateY.interpolate({
                    inputRange: [collapseDistance, collapseDistance * 0.6],
                    outputRange: [1, 0.9],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          >
            <TouchableOpacity
              onPress={() => navigate('/network/featured')}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f0f0f0',
                marginLeft: 6,
                marginRight: 10,
                padding: 12,
                marginTop: -50,
                paddingHorizontal: 0,
                borderRadius: 40,
                borderWidth: 7,
                borderColor: '#f0f0f0',
                opacity: 0.6,
              }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 12 }}>See All</Text>
            </TouchableOpacity>
          </Animated.View>
        );
      }
    
      // regular brand card
      return (
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => navigate('/network/selected-profile', { state: item })}
          style={{ marginRight: 0 }}
        >
          <Animated.View style={[
            styles.brand__card,
            {
              width: cardWidth,
              transform: [{ translateY: translateCards }],
              borderRadius: cardRadius,
              marginTop: paddingTop,
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
            <Animated.Image
              source={{ uri: item.image }}
              style={{
                width: cardWidth,
                height: cardHeight,
                borderRadius: cardRadius,
              }}
              resizeMode="cover"
            />
            <Animated.Text
              style={{
                fontSize: translateY.interpolate({
                  inputRange: [collapseDistance, collapseDistance * 0.3],
                  outputRange: [10, 10],
                  extrapolate: 'clamp',
                }),
              }}
            >
              {item.name}
            </Animated.Text>
            <Animated.Text
              style={{
                fontSize: translateY.interpolate({
                  inputRange: [collapseDistance, 0],
                  outputRange: [0.0001, 10],
                  extrapolate: 'clamp',
                }),
                opacity: translateY.interpolate({
                  inputRange: [collapseDistance, 0],
                  outputRange: [0, 1],
                  extrapolate: 'clamp',
                }),
              }}
            >
              {item.category}
            </Animated.Text>
          </Animated.View>
        </TouchableOpacity>
      );
    };
    
  
    const renderProductCard = ({ item }) => (
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => navigate(`/campaign/${item.name.toLowerCase()}`, { state: { post: item } })}
      >
        <Animated.View style={[
          styles.brand__card,
          {
            opacity: opacityNewSection,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
          <Animated.Image
            source={{ uri: item.image }}
            style={{
              width: 100,
              height: 120,
              borderRadius: 8,
              backgroundColor: 'lightgrey'
            }}
            resizeMode="cover"
          />
          <Text style={{ marginTop: 6, fontSize: 12 }}>{item.name}</Text>
          <Text style={{ fontSize: 10, opacity: 0.6 }}>{item.category}</Text>
        </Animated.View>
      </TouchableOpacity>
    );
    
  
    return (
      <Animated.View
        pointerEvents={selectedPost ? 'none' : 'auto'}
        style={[styles.brand__animatedContainer, {
          transform: [{
            translateY: translateY.interpolate({
              inputRange: [collapseDistance, 0],
              outputRange: [-20, 90],
              extrapolate: 'clamp',
            }),
          }],
        }]}
      >
        <View style={styles.featuredHeaderRow}>
          <Text style={styles.featuredHeaderText}>Top Rated Brands</Text>

          <Animated.View
            style={{
              opacity: translateY.interpolate({
                inputRange: [collapseDistance, 0],
                outputRange: [0, 1], // fade out as user scrolls up
                extrapolate: 'clamp',
              }),
              transform: [
                {
                  scale: translateY.interpolate({
                    inputRange: [collapseDistance, 0],
                    outputRange: [0.0001, 1], // optional slight shrink
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          >
            <TouchableOpacity onPress={() => navigate('/network/featured')}>
              <Text style={{ fontSize: 12, fontWeight: '500' }}>See All</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

  
        <FlatList
          data={brands}
          renderItem={renderBrandCard}
          keyExtractor={(_, i) => i.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.brand__scroll}
        />
  
        {/* New Product Releases */}
        <Animated.View style={[styles.featuredHeaderRow, { opacity: opacityNewSection }]}>
          <Text style={styles.featuredHeaderText}>New Product Releases</Text>
          <TouchableOpacity><Text style={{ fontSize: 12 }}>See All</Text></TouchableOpacity>
        </Animated.View>
  
        <FlatList
          data={products}
          renderItem={renderProductCard}
          keyExtractor={(_, i) => i.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.brand__scroll}
        />
      </Animated.View>
    );
  }


function Body({
  translateY,
  collapsed,
  scrollRef,
  onScrollY,
  selectedPost,
  expandedThreadId,
  onSelectPost,
  onBack,
}) {
  const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);
  const collapseDistance = -115;
  const [scrollYBeforeExpand, setScrollYBeforeExpand] = useState(0);

  const scrollBodyMarginTop = translateY.interpolate({
    inputRange: [collapseDistance, 0],
    outputRange: [0, 125],
    extrapolate: 'clamp',
  });

  const paddingTop = translateY.interpolate({
    inputRange: [collapseDistance, 0],
    outputRange: [-105, -5],
    extrapolate: 'clamp',
  });


  return (
    <Animated.View style={[styles.brand__scrollBody, { marginTop: scrollBodyMarginTop }]}>
      <Text style={styles.brand__sectionTitle}>Popular Posts</Text>

      {selectedPost ? (
        <ScrollView
          contentContainerStyle={{ padding: 20 }}
          style={{ flexGrow: 1 }}
        >
          <TouchableOpacity onPress={onBack} style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>← Back to Explore</Text>
          </TouchableOpacity>

          <ThreadCard
            item={selectedPost}
            expandedId={expandedThreadId}
            toggleComments={() => {}}
          />
        </ScrollView>
      ) : (
        <AnimatedScrollView
          ref={scrollRef}
          scrollEnabled={collapsed}
          onScroll={(e) => {
            onScrollY.current = e.nativeEvent.contentOffset.y;
          }}
          scrollEventThrottle={16}
          bounces={false}
          overScrollMode="never"
          style={[styles.brand__scrollBodyContent, { paddingTop }]}
        >
          <View style={styles.brand__gridContainer}>
            {products.map((product, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => onSelectPost(product)}
                activeOpacity={0.85}
                style={styles.brand__gridItem}
              >
                <View style={styles.brand__gridPreview} />
              </TouchableOpacity>
            ))}
          </View>
        </AnimatedScrollView>
      )}
    </Animated.View>
  );
}


  export default { Header, Body };
