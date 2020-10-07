import React , {useContext} from 'react';
import { View } from 'react-native';

import { imgData } from './contants';
import styles from './stylesList';
import ItemHorizontal from '@components/ItemHorizontal';
import ThemeContext from '@context/themeContext';


function ListHorizontal () {
    const { isDarkTheme, toggleTheme} = useContext(ThemeContext);
     const renderImg =(img) => {
            const {image} = img;
            return (
            <ItemHorizontal
            image = {image}
            />
            );
    };
        return (
            <View style={[styles.container, isDarkTheme && styles.darkContainer]}>
                {imgData.map(renderImg)}
           </View>

        );
    
    }

export default ListHorizontal
