import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  page: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
  pageDots: {
    position: 'absolute',
    right: 20,
    top: height / 6,
    zIndex: 10,
    gap: 5,
  },
  dot: {
    width: 38,
    height: 38,
    borderRadius: 6,
    backgroundColor: '#7a7a7a',
    opacity: 0.7,
    marginVertical: 4,
  },
  activeDot: {
    borderWidth: 0.75,
    borderColor: '#ffffff',
    // backgroundColor: '#000',
    opacity: 1,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 5,
  },
  card: {
    width: width * 0.81,
    backgroundColor: 'transparent',
    borderRadius: 8,
    marginBottom: 50,
    elevation: 5,
    // position: 'relative',
    justifyContent: 'flex-start',
    minHeight: 30,
  },
  
  heroCard: {
    padding: 15,
    borderRadius: 8,
    overflow: 'hidden', // to match borderRadius
    backgroundColor: '#ffffff40',
  },  
  heroCardWrapper: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: .6,
    shadowRadius: 6,
    elevation: 6, // For Android
    backgroundColor: 'transparent', // prevent background layering
    marginBottom: 120,
    // minHeight: 180,
  },
  cardTopRightArrow: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
  cardButtonArrow: {
    fontSize: 18,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#444',
  },
});
