import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  networkContainer: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingLeft: 50,
  },

  insetShadowBottom: {
    position: 'absolute',
    bottom: 75,
    left: 0,
    right: 0,
    // height: 50,
    width: width,
    borderBottomLeftRadius: 32,
    // zIndex: 5,
  },



  networkHeaderContainer: {
    backgroundColor: '#fff',
    marginleft: 32,
    // marginTop: 20,
    // paddingBottom: 20,
    zIndex: 5,
    width: width,
    // height: 380,
    // position: 'relative',
  },

  networkHeaderTitle: {
    fontSize: 22,
    lineHeight: 22,
    fontWeight: '700',
    paddingHorizontal: 25,
  },

  searchIcon: {
    position: 'absolute',
    top: 65,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 8,
    elevation: 4,
  },

  tabRow: {
    flexDirection: 'row',
    marginTop: 12,
    paddingHorizontal: 25,
    zIndex: 10,
  },

  tab: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
  },

  activeTab: {
    backgroundColor: '#e6e6e6',
  },

  tabText: {
    fontSize: 12,
    fontWeight: '400',
  },

  activeTabText: {
    fontWeight: '600',
  },

  scrollBodyWrapper: {
    width: width,
  },
  
  scrollBody: {
    // paddingBottom: 100,
    paddingLeft: 5,
    // paddingTop: 105,
  },

  // scrollBodyContent: {
  //   marginTop: 35,
  // },
  

  profileScroll: { 
    marginTop: 8,
    paddingHorizontal: 12,
    flexDirection: 'column'
  },

  profileContainer: {
    flexDirection: 'row'
  }, 

  featuredHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginLeft: 5,
    width: width * 0.96,
    marginTop: 50,
    // marginBottom: 10,
  },
  
  featuredHeaderText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  
  seeAllText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#5A4BFF', // Match the purple from screenshot
  },

  profileCard: {
    // width: width * 0.32,
    marginRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },

  profilePlaceholder: {
    backgroundColor: '#ddd',
    height: 188,
    borderRadius: 8,
    marginBottom: 6,
  },

  name: {
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'left',
    eight: 15,
  },

  title: {
    fontSize: 12,
    color: '#555',
    height: 15,
    textAlign: 'left',
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },

  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
    height: height * 1.5,
    flexGrow: 1,
  },

  gridItem: {
    width: (width - 60) / 3,
    height: 110,
    // aspectRatio: 1,
    backgroundColor: '#ddd', // ⬅️ match profileCard
    borderRadius: 12,
    marginBottom: 6,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },

  // gridItem: {
  //   width: '100%',
  //   height: 180,
  //   backgroundColor: '#ddd',
  //   borderRadius: 12,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginBottom: 16,
  // },
  
  gridItemPreview: {
    padding: 10,
  },
  
  gridItemTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  
  
});

export default styles;
