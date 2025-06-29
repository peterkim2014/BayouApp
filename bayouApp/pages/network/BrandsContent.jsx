import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  rowHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  subheading: { fontSize: 16, fontWeight: '600' },
  seeAll: { fontSize: 13, color: 'blue' },
  card: { width: 120, marginRight: 12, backgroundColor: '#fff', borderRadius: 10, padding: 8, alignItems: 'center' },
  cardImage: { width: 90, height: 90, borderRadius: 8, marginBottom: 6 },
  cardTitle: { fontSize: 12, fontWeight: 'bold' },
  cardSubtitle: { fontSize: 11, color: '#888' },
  sectionTitle: { fontSize: 18, fontWeight: '700', marginTop: 24, marginBottom: 10 },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingBottom: 40 },
  gridItem: { width: '47%', height: 120, backgroundColor: '#eaeaea', borderRadius: 10, marginBottom: 15 },
});
