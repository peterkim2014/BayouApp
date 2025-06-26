import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headerImage: {
    width: width,
    height: 320,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
    backgroundColor: 'grey',
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
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 25,
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

  ribbonBody: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 8,
    paddingRight: 10,
    paddingLeft: 6,
    borderRadius: 8,
    elevation: 3,
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
    paddingHorizontal: 30,
    paddingTop: 50,
  },

  actionRow: {
    position: 'absolute',
    top: 305,
    left: 20,
    right: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
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
    gap: 8,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
    color: '#000',
  },

  subtitleText: {
    fontSize: 13.5,
    color: '#777',
    marginBottom: 4,
  },

  ratingRow: {
    marginBottom: 10,
  },

  ratingStars: {
    fontSize: 16,
    color: '#333',
  },

  followButton: {
    borderWidth: 1,
    borderColor: '#333',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
  },

  followText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
  },

  statusPill: {
    backgroundColor: '#3E2FE1',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },

  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'grey'
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
  },

  description: {
    fontSize: 13.5,
    color: '#444',
    lineHeight: 20,
  },
});

export default styles;
