import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  screenWrapper: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    // backgroundColor: 'lightgrey',
    width: width * 0.96
  },

  newPostContainer: {
    backgroundColor: '#fff',
    paddingBottom: 200,
  },

  // Header & Navigation
  backButton: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 15,
  },

  header: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },

  // Tabs
  tabRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  activeTab: {
    backgroundColor: '#317A8D',
    borderRadius: 8,
  },
  
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginRight: 10,
  },
  

  tabText: {
    fontWeight: '500',
    fontSize: 12,
    color: '#333',
  },

  activeTabText: {
    fontWeight: '600',
    color: 'white'
  },

  // Image Upload Section
  imageUploadBox: {
    height: 200,
    width: width * 0.86,
    borderRadius: 14,
    backgroundColor: '#F3F7F8',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },

  imageUploadInner: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageSideStack: {
    position: 'absolute',
    right: -10,
    top: 10,
    gap: 5,
  },

  sideThumbnail: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#F0F4F5',
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },

  // Form Labels & Inputs
  label: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 6,
    marginTop: 10,
  },

  input: {
    height: 45,
    borderRadius: 20,
    backgroundColor: '#F3F4F4',
    paddingHorizontal: 16,
    marginBottom: 10,
  },

  textArea: {
    height: 100,
    borderRadius: 20,
    backgroundColor: '#F3F4F4',
    paddingHorizontal: 16,
    paddingVertical: 10,
    textAlignVertical: 'top',
  },

  // Party Tags
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 10,
  },

  tagPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 10,
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  tagImage: {
    width: 25,
    height: 25,
    borderRadius: 15,
    marginRight: 6,
  },

  tagText: {
    marginRight: 6,
    fontSize: 13,
  },
});
