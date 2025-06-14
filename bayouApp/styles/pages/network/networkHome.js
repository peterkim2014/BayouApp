import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },

  headerContainer: {
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    zIndex: 4,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    // height: 130,
    width: width
  },
  
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  
  headerIcon: {
    width: 27,
    height: 27,
    marginRight: 2,
    resizeMode: 'contain',
  },
  
  headerTitle: {
    fontSize: 24,
    fontWeight: '475',
  },
  
  tabRow: {
    flexDirection: 'row',
  },

  tab: {
    marginRight: 7,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },

  activeTab: {
    backgroundColor: '#e6e6e6',
  },

  tabText: {
    fontWeight: '500',
    fontSize: 12,
    color: '#333',
  },

  activeTabText: {
    fontWeight: '700',
  },

  body: {
    paddingHorizontal: 20,
    },

  

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    marginTop: 22,
  },

  categoryList: {
    marginBottom: 20,
  },
  
  categoryItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  
  categoryCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  
  categoryIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  
  categoryLabel: {
    fontSize: 12,
    color: '#333',
  },
  

  creatorList: {
    marginBottom: 20,
    height: 170,
    
  },
  
  creatorShadowWrapper: {
    width: width * 0.4,
    aspectRatio: 2 / 3,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6, // Android
    borderRadius: 14,
  },
  
  creatorCard: {
    height: '80%',
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#eee',
  },
  
  creatorImage: {
    width: '100%',
    height: '50%',
  },
  
  creatorNameOverlay: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(255,255,255,0.85)',
  },
  
  creatorName: {
    fontWeight: '600',
    fontSize: 14,
  },
  

  activityTabs: {
    flexDirection: 'row',
    gap: 2,
    marginBottom: 10,
  },

  activityTabText: {
    fontSize: 14,
    color: '#333',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 8,
  },

  activeActivityTab: {
    backgroundColor: '#ddd',
    fontWeight: '700',
    fontSize: 12,
  },

  activityList: {
    paddingBottom: 100,
  },

  activityCard: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },

  activityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },

  activityName: {
    flex: 1,
    fontWeight: '600',
    fontSize: 14,
  },

  viewCount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  activityContentBox: {
    height: 120,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
});

export default styles;
