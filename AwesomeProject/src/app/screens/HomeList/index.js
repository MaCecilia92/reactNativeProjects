import React, { useContext, useState, useEffect } from 'react';
import {SafeAreaView, FlatList, StatusBar, ActivityIndicator, View, TouchableOpacity, Image} from 'react-native';
import ThemeContext from '@context/themeContext';
import BooksContext from '@context/booksContext';

//import { bookData } from './constants'
import BookItem from '@components/BookItem';
import styles from './styles';
//import ListHorizontal from '@components/ListHorizontal';
import murakami from '@assets/img/harukiMurakami.jpg';
import shirley from '@assets/img/shirleyJackson.jpg';
import borges from '@assets/img/jorgeluisborges.jpg';
import ItemSeparator from '@components/ItemSeparator';
import { white, black } from '@constants/colors.js';


function HomeList ({}) {

    const { isDarkTheme } = useContext(ThemeContext);
    const { books, isLoading } = useContext(BooksContext);

    const [filterBooks, setFilterBooks] = useState(books);
    useEffect(()=>setFilterBooks(books), [books]);
    const handleFilterJackson = ()=>{
        setFilterBooks(books.filter((book)=>book.author==="Shirley Jackson"));
    }
    const handleFilterBorges = ()=>{
        setFilterBooks(books.filter((book)=>book.author==="Jorge Luis Borges"));
    }

    const handleFilterMurakami = ()=>{
        setFilterBooks(books.filter((book)=>book.author==="Haruki Murakami"));
    }


    const KeyExtractor = ({id})=> `Libro ${id}`;
    const renderItem =({item}) => {
        const { title, author, description, image} = item;
        return (
        <BookItem
        title = {title}
        author = {author}
        description = {description}
        image = {image}
        />
        );
};
    return (
        <SafeAreaView style={[styles.container, isDarkTheme && styles.darkContainer]}>
            <StatusBar barStyle={ isDarkTheme? 'light-content': 'dark-content' } backgroundColor= {isDarkTheme? black : white} />
                <View style={[styles.containerList, isDarkTheme && styles.darkContainerList]}>
                    <View style={styles.imgContainer}>
                        <TouchableOpacity onPress={handleFilterMurakami}>
                            <Image style={styles.image} resizeMode="cover" source={murakami} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imgContainer}>
                        <TouchableOpacity onPress={handleFilterJackson}>
                            <Image style={styles.image} resizeMode="cover" source={shirley} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imgContainer}>
                        <TouchableOpacity onPress={handleFilterBorges}>
                            <Image style={styles.image} resizeMode="cover" source={borges} />
                        </TouchableOpacity>
                    </View>
                </View>
            {isLoading ?
                <ActivityIndicator color="red" size="large"/> : (<FlatList
                    data={filterBooks}
                    renderItem={renderItem}
                    keyExtractor={KeyExtractor}
                    ItemSeparatorComponent = {ItemSeparator}
                    contentContainerStyle= {[styles.contentContainer, isDarkTheme && styles.darkContainer ]}
                />)}
       </SafeAreaView>
    );

}

export default HomeList;