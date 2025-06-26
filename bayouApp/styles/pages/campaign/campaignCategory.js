import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const gridGap = 10;

const styles = StyleSheet.create({
  campaignCategoryContainer: {
    flex: 1,
    backgroundColor: '#fff',
    width: width,
    alignItems: 'center',
  },

  heroImage: {
    width: '100%',
    height: 320,
    justifyContent: 'flex-end',
    backgroundColor: '#ddd',
  },

  heroOverlay: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    margin: 15,
    borderRadius: 12,
    padding: 12,
    position: 'relative',
  },

  heroTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },

  heroSubtitle: {
    fontSize: 13,
    color: '#444',
  },

  heroArrow: {
    position: 'absolute',
    right: 12,
    top: 12,
    padding: 4,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  stageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 25,
    width: width * 0.96,
  },

  tabRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 10,
    width: width * 0.88,
  },

  tabText: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    color: '#444',
  },

  activeTabText: {
    backgroundColor: '#2f7c8f',
    color: '#fff',
  },

  campaignCategory__grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: gridGap,
    justifyContent: 'space-between',
    // backgroundColor: '#fff',
    paddingBottom: 100,
  },
  
  campaignCategory__gridItem: {
    width: (width - gridGap * 3) / 2,
    height: 10,
    aspectRatio: 1,
    borderRadius: 10,
    marginBottom: gridGap,
    backgroundColor: '#fff',
  },
  
});

export default styles;
