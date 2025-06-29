import React from 'react';
import {
  View,
  Text,
  Animated,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from '../../styles/pages/network/brandsContent';

const brands = [
  { name: 'Starbucks', category: 'Food & Drinks', image: 'https://logo.clearbit.com/starbucks.com' },
  { name: 'Lululemon', category: 'Clothing', image: 'https://logo.clearbit.com/lululemon.com' },
  { name: 'Mizuno', category: 'Golf', image: 'https://logo.clearbit.com/mizunousa.com' },
];

const products = [
    { name: 'Vessel', category: 'Golf', image: 'https://via.placeholder.com/300x400?text=Vessel' },
    { name: 'Adidas', category: 'Shoes', image: 'https://via.placeholder.com/300x400?text=Adidas' },
    { name: 'Elf', category: 'Beauty', image: 'https://via.placeholder.com/300x400?text=Elf' },
  ];
  

function Header({ translateY, navigate }) {
  const collapseDistance = -115;
  const width = 320;

  const cardWidth = translateY.interpolate({
    inputRange: [collapseDistance, 0],
    outputRange: [width * 0.16, width * 0.32],
    extrapolate: 'clamp',
  });

  const cardHeight = translateY.interpolate({
    inputRange: [collapseDistance, 0],
    outputRange: [50, 120],
    extrapolate: 'clamp',
  });

  const cardRadius = translateY.interpolate({
    inputRange: [collapseDistance, 0],
    outputRange: [110, 8],
    extrapolate: 'clamp',
  });

  const translateCards = translateY.interpolate({
    inputRange: [collapseDistance, 0],
    outputRange: [-35, -15],
    extrapolate: 'clamp',
  });

  const paddingTop = translateY.interpolate({
    inputRange: [collapseDistance, 0],
    outputRange: [30, 10],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.brand__animatedContainer, {
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
        contentContainerStyle={styles.brand__scroll}
        style={styles.brand__scroll}
        >
        <View style={styles.brand__container}>
            {brands.map((brand, i) => (
              <TouchableOpacity
                key={i}
                activeOpacity={0.85}
                onPress={() => navigate('/network/selected-profile', { state: brand })}
              >
                <Animated.View style={[styles.brand__card, { 
                  width: cardWidth,
                  transform: [{ translateY: translateCards }],
                  borderRadius: cardRadius,
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginTop: paddingTop,
                }]}>
                <Animated.View
                style={[
                    styles.brand__placeholder,
                    {
                    height: cardHeight,
                    width: cardWidth,
                    borderRadius: cardRadius,
                    justifyContent: 'center',
                    alignItems: 'center',
                    },
                ]}
                >
                <Animated.Image
                source={{ uri: brand.image }}
                style={{
                    width: translateY.interpolate({
                    inputRange: [collapseDistance, 0],
                    outputRange: [48, 80], // shrinks from 60 to 32
                    extrapolate: 'clamp',
                    }),
                    height: translateY.interpolate({
                    inputRange: [collapseDistance, 0],
                    outputRange: [48, 80],
                    extrapolate: 'clamp',
                    }),
                    borderRadius: translateY.interpolate({
                    inputRange: [collapseDistance, 0],
                    outputRange: [40, 40],
                    extrapolate: 'clamp',
                    }),
                }}
                />


                </Animated.View>
                <Animated.Text
                style={{
                    fontSize: translateY.interpolate({
                    inputRange: [collapseDistance, -collapseDistance / 2],
                    outputRange: [9, 12],
                    extrapolate: 'clamp',
                    }),
                    marginTop: 6,
                }}
                >
                {brand.name}
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
                {brand.category}
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
                onPress={() => navigate('/network/brands')}
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

        <Animated.View style={[styles.featuredHeaderRow, {
            opacity: translateY.interpolate({
                inputRange: [collapseDistance, 0],
                outputRange: [0, 1],
                extrapolate: 'clamp',
                }),
        }]}>
            <Text style={styles.featuredHeaderText}>New Product Releases</Text>
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
            </Animated.View>

            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.brand__scroll}
            style={styles.brand__scroll}
            >
            <View style={styles.brand__container}>
                {products.map((product, i) => (
                <Animated.View
                    key={i}
                    style={[
                    styles.brand__card,
                    {
                        width: cardWidth,
                        transform: [{ translateY: translateCards }],
                        borderRadius: cardRadius,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginTop: paddingTop,
                        opacity: translateY.interpolate({
                            inputRange: [collapseDistance, -30],
                            outputRange: [0, 1],
                            extrapolate: 'clamp',
                            }),
                    },
                    ]}
                >
                    <Animated.View
                    style={[
                        styles.brand__placeholder,
                        {
                        height: cardHeight,
                        width: cardWidth,
                        borderRadius: cardRadius,
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                        },
                    ]}
                    >
                    <Animated.Image
                        source={{ uri: product.image }}
                        resizeMode="cover"
                        style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: cardRadius,
                        }}
                    />
                    </Animated.View>
                    <Animated.Text
                    style={{
                        fontSize: translateY.interpolate({
                        inputRange: [collapseDistance, -collapseDistance / 2],
                        outputRange: [9, 12],
                        extrapolate: 'clamp',
                        }),
                        marginTop: 6,
                    }}
                    >
                    {product.name}
                    </Animated.Text>
                    <Animated.Text
                    style={{
                        fontSize: translateY.interpolate({
                        inputRange: [collapseDistance, -collapseDistance / 2],
                        outputRange: [0.01, 14],
                        extrapolate: 'clamp',
                        }),
                        // opacity: translateY.interpolate({
                        // inputRange: [collapseDistance, -collapseDistance / 2],
                        // outputRange: [0, 1],
                        // extrapolate: 'clamp',
                        // }),
                    }}
                    >
                    {product.category}
                    </Animated.Text>
                </Animated.View>
                ))}
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
      outputRange: [0, 150],
      extrapolate: 'clamp',
    });
  
    const paddingTop = translateY.interpolate({
      inputRange: [collapseDistance, 0],
      outputRange: [-105, -5],
      extrapolate: 'clamp',
    });
  
    return (
<Animated.View style={[styles.brand__scrollBody, { marginTop: scrollBodyMarginTop }]}>
  <Text style={styles.brand__sectionTitle}>What's happening</Text>
  <AnimatedScrollView
    ref={scrollRef}
    scrollEnabled={collapsed}
    onScroll={(e) => {
      onScrollY.current = e.nativeEvent.contentOffset.y;
    }}
    scrollEventThrottle={16}
    showsVerticalScrollIndicator={false}
    bounces={false}
    overScrollMode="never"
    style={[styles.brand__scrollBodyContent, { paddingTop }]}
  >
    <View style={styles.brand__gridContainer}>
      {Array(24)
        .fill(null)
        .map((_, i) => (
          <View key={i} style={styles.brand__gridItem} />
        ))}
    </View>
  </AnimatedScrollView>
</Animated.View>

    );
  }

  export default { Header, Body };
