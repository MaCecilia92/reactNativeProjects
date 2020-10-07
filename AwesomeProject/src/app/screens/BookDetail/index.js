import React, { useContext } from 'react';
import {SafeAreaView, Text, View, Image, StatusBar} from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import ThemeContext from '@context/themeContext';
import { white, black} from '@constants/colors.js';


function BookDetail ({route}) {
    const { title, author, description, image} = route.params;
    const { isDarkTheme, toggleTheme} = useContext(ThemeContext);
    return (
    <SafeAreaView style = {[styles.container, isDarkTheme && styles.darkContainer]}>
        <StatusBar barStyle={ isDarkTheme? 'dark-content': 'light-content' } backgroundColor= {isDarkTheme? white : black} />
        <ScrollView>
        <View style = {[styles.coverContainer, isDarkTheme && styles.darkCoverContainer]}>
            <Image source={{uri:image}} style= {styles.cover}/>
        </View>
        <View style = {styles.textContainer}>
            <Text style = {styles.bookTitle}>{title}</Text>
            <Text style = {[styles.bookAuthor, isDarkTheme && styles.darkBookAuthor]}>{author}</Text>
        </View>
        <View style = {styles.descriptionContainer}>
            <Text style = {[styles.bookDescription, isDarkTheme && styles.darkBookDescription]}>{description}</Text>
        </View>
        </ScrollView>
    </SafeAreaView>
    )
}

export default BookDetail;