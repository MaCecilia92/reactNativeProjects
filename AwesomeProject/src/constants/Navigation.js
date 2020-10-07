import React from 'react';
import { white, black} from '@constants/colors.js';
import { View, Image } from 'react-native';
import darkIcon from '@assets/img/darkMode.png';
import lightIcon from '@assets/img/lightMode.png';
import darkIconDetail from '@assets/img/darkModeDetail.png';
import lightIconDetail from '@assets/img/lightModeDetail.png';
import SwitchTheme from '@components/SwitchTheme';
import HeaderIcon from '@components/HeaderIcon';

export const HomeNavOptions = (isDarkTheme)=> ({
          title:"", 
          headerTitleAlign:"center", 
          headerTitle: ()=><HeaderIcon/>,
          headerRight: () => (
          <View style = {{flexDirection: 'row', width: 80, height: 20, justifyContent: 'center', alignContent: 'center'}}>
          {isDarkTheme && <Image style={{width: 20, height: 20}} resizeMode="cover" source={ darkIcon } />}
          {!isDarkTheme && <Image style={{width: 20, height: 20}} resizeMode="cover" source={ lightIcon } />}
          <SwitchTheme/>
          </View>
            ),
          headerStyle: {
            backgroundColor: isDarkTheme? black : white,
            borderBottomWidth: 0.8,
            borderBottomColor: white, 
          },
          headerTintColor: isDarkTheme? white : black, 
})

export const DetailNavOptions = (isDarkTheme) => ({
        title:"", 
        headerTitleAlign:"center",
        headerTintColor: isDarkTheme? black : white, 
        headerRight: () => (
        <View style = {{flexDirection: 'row', width: 80, height: 20, justifyContent: 'center', alignContent: 'center'}}>
          {isDarkTheme && <Image style={{width: 20, height: 20}} resizeMode="cover" source={ darkIconDetail } />}
          {!isDarkTheme && <Image style={{width: 20, height: 20}} resizeMode="cover" source={ lightIconDetail } />}
          <SwitchTheme/>
        </View>
        ),
        headerStyle: {
          backgroundColor: isDarkTheme? white : black,
          elevation: 0, 
          shadowOpacity: 0, 
        },

})