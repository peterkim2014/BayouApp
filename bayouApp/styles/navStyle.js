import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    width: width * 0.9,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff', // white background
    alignSelf: 'center',
    borderRadius: 6,
    marginBottom: 5,

    // Drop shadow (iOS and Android)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5, // Android
    zIndex: 5
  },

  link: {
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
});

export default styles;
