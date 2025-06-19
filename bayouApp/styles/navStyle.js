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
    borderRadius: 20,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
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
    marginTop: -8, 
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
    width: 65,
    height: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#ffffff',
    // borderWidth: 1,
  },

  activeIconWrapper: {
    elevation: 0, 
    backgroundColor: '#ffffff', 
    width: 45,
    height: 45,
    borderRadius: 40,
    marginTop: -14, 
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ffffff', 
  },

  activeIconBackgroundCircle: {
    position: 'absolute',
    width: 40,
    height: 40,
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
    width: 22,
    height: 22,
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
