import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: width,
  },

  headerContainer: {
    overflow: 'hidden',
    width: width,
    position: 'relative',
  },

  headerImage: {
    height: 240,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: width,
    borderBottomLeftRadius: 57,
    borderBottomRightRadius: 57,
  },

  curveWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  settingsIcon: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 999,
    elevation: 3,
  },

  settingsImage: {
    width: 20,
    height: 20,
  },

  profileImageWrapper: {
    position: 'absolute',
    top: 195,
    right: width / 2.6,
    borderWidth: 0,
    borderColor: '#fff',
    borderRadius: 50,
    overflow: 'hidden',
  },

  blankProfileCircle: {
    width: 87,
    height: 87,
    borderRadius: 40,
    backgroundColor: 'grey',
    // borderWidth: 2,
    borderColor: '#fff',
    zIndex: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 5,
  },

  profileUserHeader: {
    marginTop: 45,
  },
  

  profileCard: {
    marginTop: 10,
    paddingHorizontal: 20,
    flex: 1,
  },

  name: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },

  username: {
    textAlign: 'center',
    color: '#555',
    marginBottom: 6,
  },

  bio: {
    textAlign: 'center',
    color: '#555',
    marginBottom: 16,
    fontSize: 13.5,
  },

  statsCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 5,
    borderRadius: 12,
    elevation: 3,
    marginBottom: 18,
  },

  statBlock: {
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 18,
    fontWeight: '600',
  },

  statLabel: {
    fontSize: 12,
    color: '#555',
  },

  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },

  tabText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#555',
  },

  activeTabText: {
    color: '#000',
    fontWeight: '700',
  },

  tabIndicator: {
    height: 3,
    backgroundColor: '#3B9CA1',
    borderRadius: 10,
    marginTop: 4,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },

  gridBox: {
    width: (width - 55) / 3, // total side + inner spacing removed
    aspectRatio: 1,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginBottom: 12,
  },
});
