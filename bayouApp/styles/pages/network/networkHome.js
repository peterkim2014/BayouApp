import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  networkContainer: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingLeft: 50,
  },

  insetShadowBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    width: width,
    borderBottomLeftRadius: 32,
    // zIndex: 5,
  },



  networkHeaderContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    marginleft: 32,
    paddingTop: 70,
    paddingBottom: 20,
    // zIndex: 5,
    width: width,
    height: 250,
    position: 'relative',
  },

  networkHeaderTitle: {
    fontSize: 22,
    lineHeight: 22,
    fontWeight: '700',
  },

  searchIcon: {
    position: 'absolute',
    top: 65,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 8,
    elevation: 4,
  },

  tabRow: {
    flexDirection: 'row',
    marginTop: 12,
  },

  tab: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
  },

  activeTab: {
    backgroundColor: '#e6e6e6',
  },

  tabText: {
    fontSize: 12,
    fontWeight: '400',
  },

  activeTabText: {
    fontWeight: '600',
  },

  scrollBodyWrapper: {
    position: 'absolute',
    top: 175,
    zIndex: 3,
    width: width,
    gap: 35,
  },
  
  scrollBody: {
    paddingBottom: 100,
    paddingLeft: 5
  },

  scrollBodyContent: {
    gap: 30,
  },
  

  profileScroll: { 
    paddingVertical: 16,
    paddingLeft: 30,
  },

  profileCard: {
    width: width * 0.33,
    marginRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },

  profilePlaceholder: {
    backgroundColor: '#ddd',
    height: 205,
    borderRadius: 8,
    marginBottom: 6,
  },

  name: {
    fontWeight: '500',
    fontSize: 14,
  },

  title: {
    fontSize: 12,
    color: '#555',
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },

  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },

  gridItem: {
    width: (width - 60) / 3,
    height: 10,
    aspectRatio: 1,
    backgroundColor: '#fff', // ⬅️ match profileCard
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  
});

export default styles;
