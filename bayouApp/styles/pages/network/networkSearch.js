import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  networkSearchContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    width: width,
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 50,
    // paddingHorizontal: 15,
    paddingVertical: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
    width: width * 0.92
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 20,
  },
  clearButton: {
    marginLeft: 10,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 30,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  sectionLabel: {
    marginTop: 28,
    marginBottom: 12,
    fontSize: 16,
    fontWeight: '600',
    width: width * 0.92
  },
  
    categoryWrapper: {
    height: 90,
    width: width,
  },
  categoryRow: {
    flexDirection: 'row',
    marginLeft: 16,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 18,
  },
  categoryIcon: {
    width: 54,
    height: 54,
    borderRadius: 30,
    marginBottom: 6,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryLabel: {
    fontSize: 13,
  },
  categoryIconPlaceholder: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#e6e6e6',
    marginBottom: 6,
  },
  
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    width: width * 0.93
  },
  historyTitle: {
    fontWeight: '600',
    fontSize: 15,
  },
  historySubtitle: {
    color: '#444',
    fontSize: 13,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  circleButton: {
    width: 28,
    height: 28,
    backgroundColor: '#e5e5e5',
    borderRadius: 14,
  },

  historyScroll: {
    flex: 1,
  },
  
  historyScrollContent: {
    marginTop: -10, // so it scrolls above keyboard
  },
});

export default styles;
