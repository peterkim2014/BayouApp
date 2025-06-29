// styles/pages/utils/messagingNetwork.js
import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  messagingHomeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 75,
    width: width
  },

  // Header
  headerRow: {
    height: 60,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  

  backButton: {
    position: 'absolute',
    left: 20,
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

  backArrow: {
    fontSize: 22,
    fontWeight: '600',
  },


  profileColumn: {
    alignItems: 'center',
    marginHorizontal: -6, // overlaps slightly
  },
  
  profileName: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
    marginTop: 4,
  },

  brandProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 25, 
    marginTop: 40,
  },
  

  brandLogo: {
    width: 58,
    height: 58,
    borderRadius: 30,
    resizeMode: 'cover',
    zIndex: 2,
    backgroundColor: 'lightgrey'
  },

  userProfile: {
    width: 58,
    height: 58,
    borderRadius: 30,
    resizeMode: 'cover',
    marginLeft: -10,
    zIndex: 1,
    backgroundColor: 'lightgrey'
  },

  newMessageButton: {
    position: 'absolute',
    right: 20,
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

  // Tabs
  tabsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 65,
    marginBottom: 15,
  },

  tab: {
    marginRight: 20,
    fontSize: 15,
    color: '#666',
    fontWeight: '500',
  },

  activeTab: {
    color: '#fff',
    backgroundColor: '#3B8C97',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
  },

  // Messages list
  messagesList: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },

  messageCard: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 14,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },

  messageAvatars: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },

  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    zIndex: 2,
  },

  avatarOverlay: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginLeft: -10,
    zIndex: 1,
  },

  messageDetails: {
    flex: 1,
  },

  messageTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },

  messageDate: {
    fontSize: 13,
    color: '#555',
  },

  messageMenu: {
    paddingHorizontal: 8,
    paddingVertical: 10,
  },

  menuDots: {
    fontSize: 20,
    color: '#333',
    fontWeight: '600',
  },
});
