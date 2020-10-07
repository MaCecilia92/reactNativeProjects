import { StyleSheet } from 'react-native';
import { grey, red, white, black, transparent } from '@constants/colors';

 
 export default StyleSheet.create({

   image: {
    width: 120,
    height: 210,
    marginRight: 5,
  },

  bookContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 230,
    borderRadius: 5,
   },

  title: {
    color: red,
    fontWeight: "bold",
    fontSize: 20,
    shadowRadius: 0.2,
    shadowColor: 'black',
    shadowOpacity: 0.7,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 5,
  },

  author: {
    fontStyle: 'italic',
    marginBottom: 5,
    color: red,
  },

  textContainer: {
    flex: 1,
    margin: 5,
  },

  description:{
    lineHeight: 20, 
  },
  
  bookContainerTouched: {
    backgroundColor: white,
    padding: 5,
    width: 350,
    height: 200,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    },

    darkContainer:{
      backgroundColor: black,
    },

    darkText: {
      color: white,
    },

    darkContainerTouched: {
      borderBottomWidth: 5,
      borderBottomColor: grey,
    }
    
 })