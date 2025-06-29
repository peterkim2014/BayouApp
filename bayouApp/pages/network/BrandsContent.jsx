import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import styles from '../../styles/pages/network/brandsContent'

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

export default function BrandsContent() {
  return (
    <ScrollView style={{ paddingHorizontal: 20 }} showsVerticalScrollIndicator={false}>
      <Section title="Top Rated Brands">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {brands.map((b, i) => <Card key={i} {...b} />)}
        </ScrollView>
      </Section>

      <Section title="New Product Releases">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {products.map((p, i) => <Card key={i} {...p} />)}
        </ScrollView>
      </Section>

      <Text style={styles.sectionTitle}>What's happening</Text>
      <View style={styles.gridContainer}>
        {Array(6).fill(null).map((_, i) => (
          <View key={i} style={styles.gridItem} />
        ))}
      </View>
    </ScrollView>
  );
}

function Section({ title, children }) {
  return (
    <View style={{ marginBottom: 25 }}>
      <View style={styles.rowHeader}>
        <Text style={styles.subheading}>{title}</Text>
        <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
      </View>
      {children}
    </View>
  );
}

function Card({ name, category, image }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{name}</Text>
      <Text style={styles.cardSubtitle}>{category}</Text>
    </View>
  );
}
