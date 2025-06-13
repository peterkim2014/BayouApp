import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    width: width * 0.9,
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    borderRadius: 6,
    marginBottom: 5,
  
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 5,
  },

  link: {
    flex: 1, 
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
