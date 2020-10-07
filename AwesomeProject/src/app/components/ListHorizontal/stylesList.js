import { StyleSheet } from 'react-native';
import { grey, black } from '@constants/colors';

export default StyleSheet.create ({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: "center",
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 0.8,
        borderBottomColor:  grey,
        marginBottom: 5,
    },

    darkContainer: {
        borderBottomWidth: 1,
        borderBottomColor:  black,
    }

})