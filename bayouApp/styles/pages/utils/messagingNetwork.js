// styles/pages/utils/messagingNetwork.js
import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  messagingHomeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 150,
    width: width
  },

  // Header
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  backButton: {
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
    gap: -12,
  },

  brandLogo: {
    width: 38,
    height: 38,
    borderRadius: 19,
    resizeMode: 'cover',
    zIndex: 2,
  },

  userProfile: {
    width: 38,
    height: 38,
    borderRadius: 19,
    resizeMode: 'cover',
    marginLeft: -10,
    zIndex: 1,
  },

  newMessageButton: {
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
    paddingHorizontal: 20,
    marginTop: 5,
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
