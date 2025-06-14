import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headerImage: {
    height: 260,
    width: width,
    justifyContent: 'flex-end',
    backgroundColor: 'grey'
  },

  watchingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    alignSelf: 'flex-end',
    margin: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 4,
    bottom: 175,
  },

  watchingIcon: {
    marginRight: 6,
  },

  watchingText: {
    fontWeight: '600',
    fontSize: 11,
  },

  profileCard: {
    marginTop: -35,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    flex: 1,
  },

  grabber: {
    alignSelf: 'center',
    width: 100,
    height: 4,
    borderRadius: 3,
    backgroundColor: '#ccc',
    marginBottom: 20,
    marginTop: -12,
  },

  name: {
    fontSize: 22,
    fontWeight: '600',
  },

  bio: {
    marginTop: 4,
    color: '#555',
  },

  profileHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  
  leftHeader: {
    flex: 1,
  },
  
  rightHeader: {
    alignItems: 'flex-end',
    gap: 6,
    width: '40%',
  },
  

  followButton: {
    borderWidth: 0.5,
    borderColor: '#000',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 20,
    width: '70%',
    alignItems: 'center',
  },

  followText: {
    fontWeight: '500',
  },

  creatorTag: {
    backgroundColor: '#0011cc',
    paddingHorizontal: 14,
    paddingVertical: 0,
    borderRadius: 20,
    width: '70%',
    alignItems: 'center',
  },

  creatorText: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 12,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 12,
    elevation: 2,
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    zIndex: 5,
  },

  statBlock: {
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 18,
    fontWeight: '500',
  },

  statLabel: {
    fontSize: 11.75,
    color: '#555',
    fontWeight: '500',
  },

  tabRow: {
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    justifyContent: 'space-around',
    gap: 20,
    marginBottom: 12,
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  tabText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#666',
  },

  activeTabText: {
    color: '#000',
    fontWeight: '700',
  },

  tabIndicator: {
    height: 3,
    backgroundColor: '#88C2C0',
    marginTop: 2,
    borderRadius: 2,
  },
  
  cardContainerStyle: {
    width: (width - 55) / 3,
    marginBottom: 20,
    alignItems: 'flex-start',
    marginHorizontal: 3,
  },
  
  card: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  
  cardText: {
    marginTop: 2,
    fontWeight: '400',
    fontSize: 11,
    textAlign: 'flex-start',
    paddingLeft: 4,
  },


  detailContainer: {
    marginTop: 5,
  },
  
  backButton: {
    marginBottom: 5,
  },
  
  backArrow: {
    fontSize: 25,
    fontWeight: '500',
  },
  
  detailRow: {
    flexDirection: 'row',
    gap: 20,
  },
  
  detailImage: {
    width: 160,
    height: 160,
    borderRadius: 16,
    backgroundColor: '#ddd',
    elevation: 2,
  },
  
  detailInfo: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  
  detailTitle: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
  },
  
  starRating: {
    fontSize: 16,
    marginBottom: 30,
  },
  
  metricRow: {
    marginBottom: 6,
  },
  
  metricHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
  },
  
  metricLabel: {
    fontSize: 12.5,
  },
  
  metricPercent: {
    fontSize: 12.5,
  },
  
  metricBarBackground: {
    height: 2.5,
    backgroundColor: '#ccc',
    borderRadius: 4,
    width: '100%',
  },
  
  metricBarFill: {
    width: '87%',
    height: 2.5,
    backgroundColor: '#000',
    borderRadius: 4,
  },  
  
});

export default styles;
