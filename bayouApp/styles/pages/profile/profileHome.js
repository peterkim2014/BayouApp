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
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    elevation: 4,
    bottom: 175,
  },

  watchingIcon: {
    marginRight: 6,
  },

  watchingText: {
    fontWeight: '600',
  },

  profileCard: {
    marginTop: -30,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    flex: 1,
  },

  grabber: {
    alignSelf: 'center',
    width: 50,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#ccc',
    marginBottom: 12,
  },

  name: {
    fontSize: 22,
    fontWeight: '700',
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
  },
  

  followButton: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 20,
  },

  followText: {
    fontWeight: '600',
  },

  creatorTag: {
    backgroundColor: '#0011cc',
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 20,
  },

  creatorText: {
    color: '#fff',
    fontWeight: '600',
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    elevation: 2,
  },

  statBlock: {
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 18,
    fontWeight: '700',
  },

  statLabel: {
    fontSize: 12,
    color: '#555',
  },

  tabRow: {
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    justifyContent: 'space-around',
    gap: 20,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  tabText: {
    fontSize: 13,
    fontWeight: '500',
    paddingBottom: 6,
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

  grid: {
    paddingBottom: 100,
    paddingHorizontal: 10, // tighten side padding
  },
  
  gridRow: {
    justifyContent: 'space-between',
    marginBottom: 14,
    right: 10,
  },
  
  card: {
    width: (width - 60) / 3, // expand horizontally
    aspectRatio: 1,
    backgroundColor: '#eee',
    borderRadius: 10,
    justifyContent: 'flex-end',
    padding: 8,
    margin: 4,
  },
  
  cardText: {
    fontWeight: '400',
  },
  
});

export default styles;
