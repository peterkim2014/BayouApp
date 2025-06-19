import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headerImage: {
    width: width,
    height: 290,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
  },

  imageRounded: {
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },

  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    zIndex: 10,
    elevation: 3,
  },

  backArrow: {
    fontSize: 20,
    fontWeight: '600',
  },

  viewerRibbon: {
    position: 'absolute',
    top: 50,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 5,
  },

  ribbonTriangle: {
    width: 0,
    height: 0,
    borderTopWidth: 16,
    borderTopColor: 'transparent',
    borderBottomWidth: 16,
    borderBottomColor: 'transparent',
    borderRightWidth: 12,
    borderRightColor: '#fff',
  },

  ribbonBody: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 4,
    paddingRight: 10,
    paddingLeft: 6,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  viewerIcon: {
    fontSize: 13,
    marginRight: 4,
  },

  viewerText: {
    fontWeight: '700',
    fontSize: 12,
  },

  bodyWrapper: {
    // flex: 1,
    backgroundColor: 'black',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    alignItems: 'flex-start',
    paddingHorizontal: 30,
    paddingTop: 50,
    // zIndex: 10
  },
  
  bodyScroll: {
    paddingTop: 24,
    paddingBottom: 40,
  },
  

  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 10,
    color: 'white'
  },

  description: {
    fontSize: 13.5,
    color: '#444',
    lineHeight: 20,
  },

  actionRow: {
    position: 'absolute',
    top: -20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    zIndex: 10,
  },
  
  actionPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 36,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  
  actionIconImage: {
    width: 22,
    height: 22,
  },
  
  actionText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
  },
  
  
});

export default styles;
