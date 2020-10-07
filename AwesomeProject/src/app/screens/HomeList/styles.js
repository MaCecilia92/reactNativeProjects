import { StyleSheet } from 'react-native';
import { white, black, red, grey } from '@constants/colors';

export default StyleSheet.create ({
    container: {
     backgroundColor: 'white',
     flex: 1,
     justifyContent: 'flex-start',
     alignItems: 'center',
     height: 100,
   },
   contentContainer: {
    backgroundColor: white,
    flexGrow: 1,
    alignItems: 'center',
   },
   navigateButton: {
    flexGrow: 1,
    justifyContent: 'center',
    height: 50,
    width: '80%',
    backgroundColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: white,
    marginVertical: 5,
   },

   darkContainer: {
     backgroundColor: black, 
   },

   image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },

imgContainer: {
    borderRadius: 10,
    backgroundColor:red,
    margin: 10,
},

containerList: {
  flexDirection: 'row',
  width: '100%',
  justifyContent: "center",
  paddingTop: 10,
  paddingBottom: 10,
  borderBottomWidth: 0.8,
  borderBottomColor:  grey,
  marginBottom: 5,
},

darkContainerList: {
  borderBottomWidth: 1,
  borderBottomColor:  black,
}
  
})