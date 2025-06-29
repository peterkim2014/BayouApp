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