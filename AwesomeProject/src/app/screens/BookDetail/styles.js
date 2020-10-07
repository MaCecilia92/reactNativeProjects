import { StyleSheet } from 'react-native';
import { white, grey, red, black } from '@constants/colors.js';


export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: grey,
    },
    contentContainer: {
        backgroundColor: white,
        flex: 1,
        alignItems: 'center',
    },

    coverContainer: {
        borderBottomStartRadius: 100, 
        backgroundColor: black,
        width: '100%',
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        flex:1,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },

    cover: {
        width: 200,
        height: 300,
    },

    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 5,
        borderBottomWidth: 0.8,
        borderBottomColor: red,
        width: '90%',
        
    },

    bookTitle: {
        color: red,
        fontWeight: "bold",
        fontSize: 30,
        shadowRadius: 0.2,
        shadowColor: 'black',
        shadowOpacity: 0.7,
        shadowOffset: {
        width: 1,
        height: 1,
        },
        elevation: 5,
    },

    bookAuthor:{
        fontStyle: 'italic',
        marginBottom: 5,
        fontSize: 15,
        fontWeight: 'bold',
    },

    descriptionContainer: {
        padding: 25,
        flex: 1,
    },

    bookDescription: {
        fontSize: 13,
        lineHeight: 20, 
        textAlign:'justify'
       
    },

    darkContainer: {
        backgroundColor: black,
    },

    darkCoverContainer: {
        backgroundColor: white,
    },

    darkBookAuthor: {
       color: white,
    },

    darkBookDescription: {
       color: white,  
    },



})