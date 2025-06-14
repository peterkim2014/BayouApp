import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({

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
    height: 210,
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


  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  profileImage: {
    width: 26,
    height: 26,
    borderRadius: 13,
    marginRight: 6,
  },
  
  profileCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ccc',
    marginRight: 8,
  },
  

  watchingText: {
    fontSize: 12.5,
    fontWeight: '600',
  },
  
  upArrowToggle: {
    position: 'absolute',
    bottom: -30,
    right: 10,
    backgroundColor: '#fff',
    zIndex: 3,
  },
  
  upArrowIcon: {
    width: 25,
    height: 25,
  },
  
  iconActionsRow: {
    position: 'absolute',
    bottom: 10,
    right: 5,
    flexDirection: 'column',
    gap: 8,
  },
  
  iconPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  
  pillIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  
  pillText: {
    fontSize: 11,
    fontWeight: '500',
  }
  
  
});

export default styles;
