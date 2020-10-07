import React , { useContext } from 'react';
import {View, Image} from 'react-native';

import styles from './styleIcon';
import icon from '@assets/img/home.png';
import iconWhite from '@assets/img/homeWhite.png';
import ThemeContext from '@context/themeContext';

function HeaderIcon () {
    const { isDarkTheme, toggleTheme} = useContext(ThemeContext);
    return (
        <View style={styles.imgContainer}>
            {isDarkTheme && <Image style={styles.image} resizeMode="cover" source={ iconWhite } />}
            {!isDarkTheme && <Image style={styles.image} resizeMode="cover" source={ icon } />}
        
        </View>
    )
} 

export default HeaderIcon;