import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  messagingRoomContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 75,
    paddingHorizontal: 20,
    width: width,
    alignItems: 'center'
    // backgroundColor: 'lightgrey'
  },

  // Header
  headerRow: {
    height: 100,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: width * 0.9
  },

  backButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  backArrow: {
    fontSize: 22,
    fontWeight: '600',
  },

  brandProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 25,
    marginTop: -20,
  },

  profileColumn: {
    alignItems: 'center',
    marginHorizontal: -6,
  },

  brandLogo: {
    width: 58,
    height: 58,
    borderRadius: 30,
    resizeMode: 'cover',
    zIndex: 2,
    backgroundColor: 'lightgrey',
  },

  userProfile: {
    width: 58,
    height: 58,
    borderRadius: 30,
    resizeMode: 'cover',
    marginLeft: -10,
    zIndex: 1,
    backgroundColor: 'lightgrey',
  },

  profileName: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
    marginTop: 4,
  },

  newMessageButton: {
    position: 'absolute',
    right: 0,
    top: -10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  plusIcon: {
    fontSize: 26,
    fontWeight: '300',
    marginBottom: 2,
  },

  // Message bubble
  messageBubble: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 16,
    shadowColor: '#aaa',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
    marginBottom: 20,
    width: width * 0.9
  },

  messageTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    textAlign: 'center',
  },

  messageDate: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },

  // Main message
  brandMessageBlock: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    paddingRight: 10,
  },

  avatarSmall: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },

  messageText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    color: '#222',
  },

  typingText: {
    alignSelf: 'flex-end',
    marginRight: 10,
    fontSize: 13,
    color: '#666',
    marginBottom: 6,
  },

  messageInput: {
    backgroundColor: '#F3F4F4',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 15,
    minHeight: 75,
    width: width * 0.9,
    textAlignVertical: 'top',
    marginBottom: 20,
    position: 'absolute',
    bottom: 75,
  },
});
