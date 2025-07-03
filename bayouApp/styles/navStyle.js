import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 75,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    // elevation: 1,
    zIndex: 5,
  },

  

  link: {
    flex: 1,
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconStack: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: -8, 
  },

  iconWrapper: {
    width: 20,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  activeTabBump: {
    position: 'absolute',
    top: -15,
    width: 55,
    height: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#ffffff',
  },

  activeIconWrapper: {
    elevation: 0, 
    backgroundColor: '#ffffff', 
    width: 45,
    height: 45,
    borderRadius: 40,
    marginTop: -15, 
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ffffff', 
    
  },

  activeIconBackgroundCircle: {
    position: 'absolute',
    width: 35,
    height: 35,
    borderRadius: 22.5,
    backgroundColor: '#00C2B3',
    zIndex: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 2,
    
  },
  

  icon: {
    width: 27,
    height: 27,
    resizeMode: 'contain',
  },

  activeIcon: {
    width: 25,
    height: 25,
  },

  linkText: {
    fontSize: 11,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif-medium',
    color: '#1a1a1a',
  },

  activeText: {
    color: '#000',
    marginTop: -2,
  },
});

export default styles;
