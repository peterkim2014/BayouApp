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
  
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  
  tabRow: {
    flexDirection: 'row',
  },

  tab: {
    marginRight: 10,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#f1f1f1',
    alignSelf: 'flex-start',
  },

  activeTab: {
    backgroundColor: '#ddd',
  },

  tabText: {
    fontWeight: '200',
    color: '#333',
  },

  activeTabText: {
    fontWeight: '400',
  },

  feed: {
    paddingHorizontal: 10,
    paddingTop: 15,
    paddingBottom: 100,
  },

  card: {
    width: width * 0.95, // Use more width
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    elevation: 1,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  username: {
    fontWeight: '600',
  },

  actions: {
    flexDirection: 'row',
    gap: 12,
  },

  placeholderBox: {
    height: 120,
    backgroundColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
  },

  cardTitle: {
    fontWeight: '600',
    fontSize: 16,
  },

  cardDescription: {
    marginTop: 4,
    marginBottom: 10,
    color: '#444',
  },

  commentButton: {
    backgroundColor: '#497E8D',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },

  commentButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
});

export default styles;
