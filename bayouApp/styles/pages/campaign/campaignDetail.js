import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  campaignDetailcontainer: {
    width: width,
  },

  headerImage: {
    width: width,
    height: 380,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
    backgroundColor: 'grey',
    
  },

  divider: {
    width: .6,
    height: '75%',
    backgroundColor: 'black',
    marginHorizontal: -3,
    opacity: .4,
    // gap: 1,
  },

  imageRounded: {
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },

  backButton: {
    position: 'absolute',
    top: 60,
    left: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 25,
    zIndex: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },

  backArrow: {
    fontSize: 20,
    fontWeight: '600',
  },

  viewerRibbon: {
    position: 'absolute',
    top: 62,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 5,
  },

  ribbonBody: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 7,
    paddingHorizontal: 10,
    paddingRight: 12,
    paddingLeft: 8,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
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
    backgroundColor: '#fff',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    overflow: 'hidden',
    paddingHorizontal: 22,
    paddingTop: 50,
  },

  actionRow: {
    position: 'absolute',
    top: 360,
    left: 20,
    right: 25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    zIndex: 10,
  },

  actionPill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 36,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },

  actionIconImage: {
    width: 20,
    height: 20,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 5,
    width: '100%',
  },

  infoLeft: {
    flex: 1,
    paddingRight: 10,
  },

  infoRight: {
    alignItems: 'flex-end',
    gap: 6,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    // marginBottom: 4,
    color: '#000',

  },

  subtitleText: {
    fontSize: 15.5,
    color: '#000',
    marginBottom: 4,
    flexDirection: 'row',
    display: 'flex',
    fontWeight: '300',
  },

  ratingRow: {
    marginBottom: 10,
  },

  ratingStars: {
    fontSize: 17,
    color: '#333',
  },

  followButton: {
    borderWidth: .7,
    borderColor: '#333',
    paddingVertical: 3,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  followText: {
    fontSize: 13.5,
    fontWeight: '600',
    color: '#333',
  },

  statusPill: {
    backgroundColor: '#3E2FE1',
    borderRadius: 14,
    paddingHorizontal: 45,
    paddingVertical: 1.8,
  },

  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
    width: '100%',
    gap: 40,
    // borderWidth: 1,
    borderRadius: 8,
    // borderColor: 'white',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },

  statBox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },

  statNumber: {
    fontWeight: '700',
    fontSize: 15,
  },

  statLabel: {
    fontSize: 10.4,
    color: '#777',
  },

  bodyScroll: {
    paddingBottom: 40,
    height: height,
  },

  description: {
    fontSize: 13.5,
    color: '#444',
    lineHeight: 20,
  },
});

export default styles;
