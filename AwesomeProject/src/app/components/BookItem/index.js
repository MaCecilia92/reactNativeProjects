import React, { useContext } from 'react';
import { View, Text, Image,TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import ThemeContext from '@context/themeContext';

function BookItem ( { title, author , description, image} ) {
    const { isDarkTheme} = useContext(ThemeContext);
    const navigation = useNavigation ();
    const navigationToDetail = () => navigation.navigate('Detalle', {title, author, description, image} );
    return (
    <TouchableHighlight style={[styles.bookContainerTouched, isDarkTheme && styles.darkContainerTouched]} underlayColor="#edebeb" onPress={navigationToDetail}>
    <View style={[styles.bookContainer, isDarkTheme && styles.darkContainer]}>
    <Image style={styles.image} resizeMode="contain" source={{uri:image}} />
      <View style={styles.textContainer}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.author}>{author}</Text>
    <Text style={[styles.description, isDarkTheme && styles.darkText]} numberOfLines={3} ellipsizeMode="tail">{description} </Text>
      </View>
    </View>
    </TouchableHighlight>
    )
}
export default BookItem; 
