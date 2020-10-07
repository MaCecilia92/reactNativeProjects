import React, { useContext } from 'react';
import {Switch} from 'react-native';
import ThemeContext from '@context/themeContext';
import { white, red } from '@constants/colors';



function SwitchTheme (){
    const { isDarkTheme, toggleTheme} = useContext(ThemeContext);
    return (
    <Switch
        trackColor={{ false: "#767577", true: red }}
        thumbColor={white}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleTheme}
        value={isDarkTheme}
      />
      )
}

export default SwitchTheme;