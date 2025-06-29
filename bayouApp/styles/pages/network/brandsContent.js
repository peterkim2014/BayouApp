import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    rowHeader: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginBottom: 8 
    },
    subheading: { 
        fontSize: 16, 
        fontWeight: '600' 
    },
    featuredHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      
      featuredHeaderText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      

    brand__animatedContainer: {
        paddingHorizontal: 25,
      },
    brand__headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 10,
      },
    
      brand__headerText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    
      brand__scroll: {
        paddingBottom: 10,
        marginTop: 10,
      },
    
      brand__container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
      },
    
      brand__card: {
        marginRight: 12,
      },
    
      brand__placeholder: {
        backgroundColor: '#f5f5f5',
      },
    
      seeAll: {
        fontSize: 13,
        color: 'blue',
      },
    
      sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginTop: 24,
        marginBottom: 10,
      },
    
      gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingBottom: 40,
      },
    
      gridItem: {
        width: '47%',
        height: 120,
        backgroundColor: '#eaeaea',
        borderRadius: 10,
        marginBottom: 15,
      },
      
    seeAll: { 
        fontSize: 13, 
        color: 'blue' 
    },
    card: { 
        width: 120, 
        marginRight: 12, 
        backgroundColor: '#fff', 
        borderRadius: 10, 
        padding: 8, 
        alignItems: 'center' 
    },
    cardImage: { 
        width: 90, 
        height: 90, 
        borderRadius: 8, 
        marginBottom: 6 
    },
    cardTitle: { 
        fontSize: 12, 
        fontWeight: 'bold' 
    },
    cardSubtitle: { 
        fontSize: 11, 
        color: '#888' 
    },
    sectionTitle: { 
        fontSize: 18, 
        fontWeight: '700', 
        marginTop: 24, 
        marginBottom: 10 
    },
    gridContainer: { 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-between', 
        paddingBottom: 40 
    },
    gridItem: { 
        width: '47%', 
        height: 120, 
        backgroundColor: '#eaeaea', 
        borderRadius: 10, 
        marginBottom: 15 
    },
  });

  export default styles;