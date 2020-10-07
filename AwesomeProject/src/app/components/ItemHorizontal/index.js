import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import style from './style';


function ItemHorizontal ({image}) {
    return (
        
        <View style={style.imgContainer}>
        <TouchableOpacity>
        <Image style={style.image} resizeMode="cover" source={{uri:image}} />
        </TouchableOpacity>
        </View>
        
        )

}
export default ItemHorizontal;