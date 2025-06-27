import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    campaignWaitlistContainer: {
    flex: 1,
    backgroundColor: '#fff',
    width: width
  },
  headerWrapper: {
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingBottom: 12,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
    height: 200,
  },
  backRow: {
    marginBottom: 10,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 60,
  },
  headerLeft: {
    flexDirection: 'column',
  },
  headerRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  
  headerRightTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    height: 20,
  },
  
  iconSpacing: {
    marginRight: 6,
    marginTop: 1, // fine-tune vertical alignment
  },
  
  waitlistText: {
    fontSize: 14,
    fontWeight: '600',
  },
  
  waitlistSubText: {
    fontSize: 13,
    color: '#555',
  },
  
  
  cardScrollWrapper: {
    height: 260,
    marginTop: -30,
  },
  
  cardScroll: {
    paddingLeft: 20,
    alignItems: 'center',
  },
  
  productCard: {
    width: width * 0.53,
    height: width * 0.67,
    borderRadius: 8,
    marginRight: 12,
    resizeMode: 'cover',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    backgroundColor: 'lightgrey'
  },
  form: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
  inputLabel: {
    fontWeight: '400',
    fontSize: 15,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  input: {
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
    padding: 7,
    flex: 1,
    marginBottom: 15,
    marginTop: 5,
  },
  dropdown: {
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
    padding: 7,
    marginBottom: 15,
    marginTop: 5,
    justifyContent: 'center',
  },
  dropdownText: {
    color: '#777',
  },
  footerNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerIcon: {
    fontSize: 12,
    color: '#333',
  },
  activeFooterIcon: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#007c91',
  },
});

export default styles;
