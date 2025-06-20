import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  campaignContainer: {
    flex: 1,
    backgroundColor: '#f9fafa',
  },

  heroImage: {
    width: width,
    height: 450,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 40,
    position: 'relative',
    backgroundColor: 'grey',
  },

  searchButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20,
    zIndex: 2,
  },

  dotStack: {
    position: 'absolute',
    top: 110,
    right: 24,
    justifyContent: 'space-between',
    height: 90,
    zIndex: 2,
  },

  dot: {
    width: 35,
    height: 35,
    backgroundColor: '#999',
    borderRadius: 8,
    marginBottom: 10,
  },

  heroCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },

  heroTitle: {
    fontSize: 18,
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
    bottom: -225,
    left: 0,
    right: 0,
    paddingLeft: 16,
    paddingBottom: 20,
  },

  categoryRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingRight: 16,
    marginTop: 50,
  },

  categoryCard: {
    width: width * 0.55,
    height: 220,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginRight: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
