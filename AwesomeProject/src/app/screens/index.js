/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import HomeList from '@screens/HomeList';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookDetail from '@screens/BookDetail';
import ThemeContext, {themes} from '@context/themeContext';
import BooksContext from '@context/booksContext';
import { white, black} from '@constants/colors.js';
import {HomeNavOptions, DetailNavOptions} from '@constants/Navigation.js';
import { getBookList } from '@services/bookService';


const Stack = createStackNavigator();

const App = () => {
const [theme, setTheme]=useState(themes.light);
const isDarkTheme = theme === themes.dark;
const toggleTheme = () => setTheme (isDarkTheme ? themes.light:themes.dark);

const [books, setBooks] = useState ([]);
useEffect (()=>{
  const getBooks = async () => setBooks(await getBookList());
  getBooks();
}, [])

// const [isLoading, setLoading] = useState(true);
// const [books, setBooks]= useState([]);
//   useEffect (()=>{
//       fetch('https://private-5709b2-booklists.apiary-mock.com/booklists')
//       .then((response) => response.json())
//       .then((json) => setBooks(json))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//       }, []);

  return (
    <BooksContext.Provider value = {{ books, isLoading }}>
    <ThemeContext.Provider value={{ theme, isDarkTheme, toggleTheme }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" 
      screenOptions= {{ 
          title:"Inicio", 
          headerTitleAlign:"center", 
          headerStyle: {
            backgroundColor: isDarkTheme? black : white,
          },
          headerTintColor: isDarkTheme? white : black, 
}} >
        <Stack.Screen 
        name="Home" 
        component={HomeList} 
        options={HomeNavOptions(isDarkTheme)}
        />
        <Stack.Screen 
        name="Detalle" 
        component={BookDetail}
        options={DetailNavOptions(isDarkTheme)}
        initialParams={{warningInit: 'No encontramos el libro'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeContext.Provider>
    </BooksContext.Provider>
  );
}
export default App;
