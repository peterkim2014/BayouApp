import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const gridGap = 10;

const styles = StyleSheet.create({
  campaignCategory__container: {
    flex: 1,
    backgroundColor: '#fff',
    width: width,
  },

  campaignCategory__heroImage: {
    width: '100%',
    height: 320,
    justifyContent: 'flex-end',
    backgroundColor: '#ddd',
  },

  campaignCategory__backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    zIndex: 10,
    elevation: 3,
  },

  campaignCategory__backArrow: {
    fontSize: 20,
    fontWeight: '600',
  },

  campaignCategory__heroOverlay: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    margin: 15,
    borderRadius: 12,
    padding: 12,
    position: 'relative',
  },

  campaignCategory__heroTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },

  campaignCategory__heroSubtitle: {
    fontSize: 13,
    color: '#444',
  },

  campaignCategory__heroArrow: {
    position: 'absolute',
    right: 12,
    top: 12,
    padding: 4,
  },

  campaignCategory__scrollContainer: {
    backgroundColor: '#fff',
  },

  campaignCategory__sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  campaignCategory__stageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 20,
    width: width,
  },

  campaignCategory__tabRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
    paddingHorizontal: 16,
    width: width,
  },

  campaignCategory__tabText: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    color: '#444',
    marginRight: 8,
    marginBottom: 6,
  },

  campaignCategory__activeTabText: {
    backgroundColor: '#2f7c8f',
    color: '#fff',
  },

  campaignCategory__grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 80,
    paddingHorizontal: 10,
    backgroundColor: 'white'
  },

  campaignCategory__gridItem: {
    width: width / 2.08 - 20,
    aspectRatio: 1,
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'grey',
  },
});

export default styles;
