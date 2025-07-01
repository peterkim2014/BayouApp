import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headerImage: {
    width: '100%',
    // height: 260, 
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // overflow: 'hidden',
    backgroundColor: '#eee', 
    justifyContent: 'flex-end',
  },
  
  headerBackground: {
    height: 200,
    width: width,
  },
  

  headerContainer: {
    paddingTop: 73,
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
    width: width,
  },

  headerTitleRow: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 7.5,
  },

  headerIcon: {
    height: '100%',
    alignItems: 'center',
    width: 50,
    height: 50,
    marginRight: -40,
    marginLeft: -10,
  },

  
  headerTitle: {
    fontSize: 24,
    fontWeight: '475',
  },
  
  tabRow: {
    flexDirection: 'row',
    // width: '80%',
    // gap: -5,
    // justifyContent: 'space-around',
    alignItems: 'start',
  },

  tab: {
    marginRight: 10,
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },

  activeTab: {
    backgroundColor: '#e6e6e6',
  },

  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // gap: 10,
  },
  
  logoTitleGroup: {
    flexDirection: 'column',
    alignItems: 'start',
    gap: 5,
  },
  
  headerActions: {
    flexDirection: 'row',
    gap: 12,
  },
  
  headerIconCircle: {
    width: 34,
    height: 34,
    backgroundColor: '#fff',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    position: 'relative',
  },
  
  iconText: {
    fontSize: 30,
  },

  notificationIcon: {
    width: 20,
    height: 20,
  },

  iconTextAlert: {
    fontSize: 18,
  },
  
  redDot: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 8,
    height: 8,
    backgroundColor: 'red',
    borderRadius: 4,
  },
  
  activeTab: {
    backgroundColor: '#e6e6e6',
    borderRadius: 8,
  },
  
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    // marginRight: 1,
  },
  

  tabText: {
    fontWeight: '500',
    fontSize: 12,
    color: '#333',
  },

  activeTabText: {
    fontWeight: '700',
  },

  feed: {
    paddingHorizontal: 10,
    paddingTop: 15,
    paddingBottom: 100,
  },

  card: {
    width: width * 0.95, // Use more width
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    elevation: 1,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  username: {
    fontWeight: '600',
    fontSize: 15.5,
  },

  actions: {
    flexDirection: 'row',
    gap: 12,
  },

  placeholderBox: {
    height: 140,
    backgroundColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
  },

  cardTitle: {
    fontWeight: '600',
    fontSize: 15,
  },

  cardDescription: {
    marginTop: 4,
    marginBottom: 10,
    color: '#444',
    fontSize: 12.25,
  },

  commentButton: {
    backgroundColor: '#497E8D',
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },

  commentButtonText: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 12.5,
  },

  commentSection: {
    marginTop: 12,
    paddingTop: 10,
    marginLeft: 20,
  },
  
  commentBlock: {
    marginBottom: 10,
    width: '94%',
  },
  
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  
  commentAuthor: {
    fontWeight: '600',
  },
  
  commentActions: {
    flexDirection: 'row',
    gap: 12,
    fontSize: 10,
  },

  commentActionText: {
    fontSize: 12.25,
  },
  
  commentText: {
    color: '#333',
    fontSize: 12.25,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d6d6d6'
  },
  
  seeMore: {
    color: '#007bff',
    marginTop: 2,
    fontSize: 12,
  },

  
  
});

export default styles;
