import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headerContainer: {
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    zIndex: 4,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    width: width,
  },

  body: {
    paddingHorizontal: 20,
    // paddingBottom: 100,
  },

  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7.5,
  },

  headerIcon: {
    width: 27,
    height: 27,
    marginRight: 2,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: '475',
  },

  tabRow: {
    flexDirection: 'row',
  },

  tab: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginRight: 10,
  },

  activeTab: {
    backgroundColor: '#ddd',
  },

  tabText: {
    fontSize: 13,
    color: '#333',
  },

  activeTabText: {
    fontWeight: '700',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 24,
    marginBottom: 12,
  },

  categoryList: {
    marginBottom: 18,
  },

  categoryItem: {
    alignItems: 'center',
    marginRight: 18,
  },

  categoryCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#fff',
    elevation: 3,
    marginBottom: 6,
  },

  categoryLabel: {
    fontSize: 12.25,
    fontWeight: '500',
  },

  subTabRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },

  subTabText: {
    fontSize: 13.5,
    color: 'black',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginRight: 10,
  },

  activeSubTab: {
    backgroundColor: '#e6e6e6',
    fontWeight: '700',
  },

  cardList: {
    marginBottom: 30,
  },

  card: {
    width: width * 0.45,
    marginRight: 18,
  },

  cardImage: {
    width: '100%',
    aspectRatio: 3 / 4,
    borderRadius: 12,
    backgroundColor: '#ccc',
    marginBottom: 4,
  },

  viewerTag: {
    position: 'absolute',
    top: 18,
    right: 0.25,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  
  viewerIcon: {
    fontSize: 13,
    marginRight: 4,
  },
  
  viewerText: {
    fontWeight: '700',
    fontSize: 12,
  },  

  cardTitle: {
    fontSize: 13.5,
    fontWeight: '600',
    paddingHorizontal: 5,
  },
});

export default styles;
