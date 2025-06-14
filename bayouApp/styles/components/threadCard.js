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
  }
  
});

export default styles;
