// styles/components/threadCard.js
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    width: width,
    alignSelf: 'center',
    marginBottom: 28,
    marginTop: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 1,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 14,
  },

  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ccc',
    marginRight: 8,
  },

  username: {
    fontWeight: '600',
    fontSize: 15.5,
  },

  watchingText: {
    fontSize: 12.5,
    fontWeight: '600',
    marginRight: 7,
  },

  cardImage: {
    width: width,
    height: 300,
    marginBottom: 10,
    backgroundColor: 'lightgrey'
  },

  actionRow: {
    flexDirection: 'row',
    gap: 12,
    paddingVertical: 10,
    marginTop: -35,
    marginLeft: 20,
  },

  iconImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },  

  iconCircle: {
    width: 33,
    height: 33,
    backgroundColor: '#fff',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },

  metaRow: {
    // marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
    gap: 12,
    paddingHorizontal: 14,
  },

  leftMeta: {
    flex: 1.25,
  },

  ratingStars: {
    fontSize: 16,
    marginBottom: 2,
  },

  rightStats: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'flex-end',
    height: '85%',
    marginRight: 4,
  },

  statColumn: {
    alignItems: 'center',
  },

  statValue: {
    fontWeight: '600',
    fontSize: 16,
  },

  statLabel: {
    fontSize: 12.25,
    color: '#333',
    fontWeight: '600',
  },

  divider: {
    width: 1.2,
    height: '90%',
    backgroundColor: 'black',
    marginHorizontal: -3,
  },

  watchingContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    gap: 1,
  },

  watchingIcon: {
    width: 20,
    height: 16,
    opacity: .75,
  },

  cardTitle: {
    fontWeight: '600',
    fontSize: 17.5,
    marginBottom: 2,
  },

  cardDescription: {
    // marginTop: -1,
    marginBottom: 10,
    color: '#444',
    fontSize: 13.25,
    paddingHorizontal: 14,
    lineHeight: 18,
  },

  commentButton: {
    backgroundColor: '#497E8D',
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginLeft: 14,
    marginTop: 2,
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
    paddingHorizontal: 14,
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
    borderBottomColor: '#d6d6d6',
  },

  seeMore: {
    color: '#007bff',
    marginTop: 2,
    fontSize: 12,
  },
});

export default styles;
