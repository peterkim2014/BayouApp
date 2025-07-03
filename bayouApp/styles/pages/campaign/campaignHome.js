import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  campaignContainer: {
    flex: 1,
    backgroundColor: '#f9fafa',
  },

  heroImage: {
    width: width,
    height: 560,
    justifyContent: 'flex-end',
    paddingHorizontal: 25,
    paddingBottom: 40,
    position: 'relative',
    backgroundColor: 'grey',
  },

  searchButton: {
    position: 'absolute',
    top: 60,
    right: 25,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20,
    zIndex: 2,
  },

  dotStack: {
    position: 'absolute',
    top: 130,
    right: 24,
    justifyContent: 'space-between',
    height: 90,
    zIndex: 2,
  },

  dot: {
    width: 35,
    height: 35,
    backgroundColor: '#999',
    borderRadius: 5,
    marginBottom: 10,
  },

  heroCardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#ffffff',
    opacity: 0.7,
    borderRadius: 8,
    zIndex: -1,
  },

  heroCard: {
    position: 'relative',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
    marginBottom: -6,
    // marginTop: 50,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.6,
    // shadowRadius: 6,
    overflow: 'hidden', // to match borderRadius
    backgroundColor: '#ffffff40',
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
    // marginTop: 30,
  },

  heroTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#000',
  },

  heroDesc: {
    fontSize: 13,
    color: '#444',
    marginTop: 4,
    width: width * 0.7,
  },

  scrollOverlay: {
    position: 'absolute',
    bottom: -237.5,
    left: 0,
    right: 0,
    paddingLeft: 25,
    paddingBottom: 55,
  },

  categoryRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    // gap: -11,
    // paddingRight: 10,
    // marginTop: 50,
  },

  categoryCard: {
    width: width * 0.42,
    height: 200,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginRight: 11,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 5,
  },
  
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',

  },
  

  campaignBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
  },

  campaignBadgeText: {
    fontSize: 12,
    fontWeight: '600',
  },

  categoryLabel: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 16,
  },

  labelText: {
    fontWeight: '600',
  },
});

export default styles;
