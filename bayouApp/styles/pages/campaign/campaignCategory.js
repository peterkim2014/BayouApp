import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const gridGap = 10;

const styles = StyleSheet.create({
  campaignCategory__container: {
    flex: 1,
    backgroundColor: '#fff',
    width: width,
  },

  campaignCategory__heroImage: {
    width: '100%',
    height: 370,
    justifyContent: 'flex-end',
    backgroundColor: '#ddd',
  },

  campaignCategory__backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    zIndex: 10,
    elevation: 3,
  },
  heroCardWrapper: {
    // margin: 20,
    // borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6, // For Android
    backgroundColor: 'transparent', // prevent background layering
  },

  heroCard: {
    margin: 18,
    borderRadius: 12,
    padding: 12,
    minHeight: 90,
    position: 'relative',
    // position: 'relative',
    // padding: 15,
    // borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.6,
    // shadowRadius: 6,
    overflow: 'hidden', // to match borderRadius
    backgroundColor: '#ffffff40',
  },  


  campaignCategory__backArrow: {
    fontSize: 20,
    fontWeight: '600',
  },

  // campaignCategory__heroOverlay: {
  //   // backgroundColor: 'rgba(255,255,255,0.9)',
  //   margin: 15,
  //   borderRadius: 12,
  //   padding: 12,
  //   position: 'relative',
  // },

  campaignCategory__heroTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },

  campaignCategory__heroSubtitle: {
    fontSize: 13,
    color: '#444',
    width: width * .8,
  },

  campaignCategory__heroArrow: {
    position: 'absolute',
    right: 12,
    top: 12,
    padding: 4,
  },

  campaignCategory__scrollContainer: {
    backgroundColor: '#fff',
  },

  campaignCategory__sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    // marginBottom: 4,
    marginTop: -2,
  },

  campaignCategory__stageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 28,
    width: width,
  },

  campaignCategory__tabRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
    paddingHorizontal: 16,
    width: width,
    marginTop: 6,
  },

  campaignCategory__tabText: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    color: '#444',
    marginRight: 8,
    // marginBottom: 4,
  },
  
  campaignCategory__activeTabText: {
    fontWeight: '600',
    backgroundColor: '#2f7c8f',
    color: '#fff',
  },

  campaignCategory__grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // paddingBottom: 80,
    // paddingHorizontal: 8,
    backgroundColor: 'white',
    marginTop: 5,
  },

  campaignCategory__gridItem: {
    width: width / 2.08 - 10,
    aspectRatio: 1,
    borderRadius: 10,
    margin: 3,
    backgroundColor: 'grey',
  },
});

export default styles;
