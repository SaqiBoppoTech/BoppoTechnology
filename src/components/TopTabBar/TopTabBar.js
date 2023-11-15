//import liraries
import React, { Component } from 'react';
import { View, Text ,TouchableOpacity} from 'react-native';
import { styles } from './TopTabBarStyle';
import { Colors, Fonts } from '../../global';
const TopTabBar = ({item,index,name,externalTopTabStyle,externalTopTabContainerStyle,setValue,value}) => {
    const setIndex =( ) => {
        setValue(index)
    }
    let removeBorderWidth = !(value == index) && {backgroundColor:Colors.TRANSPARENT}
    let ligthText = !(value == index) && { fontFamily:Fonts.MANROPE_SEMIBOLD}
    return (
        <TouchableOpacity onPress={setIndex} style={[styles.topTbaMainContainer,externalTopTabContainerStyle]}>
            <Text style={[styles.topTabFontStyle,externalTopTabStyle,ligthText]}>{item[name]}</Text>
            <View style={[styles.bottomBarStyle,removeBorderWidth]}>
            </View>
        </TouchableOpacity>
    );
};

// define your styles

//make this component available to the app
export default TopTabBar;
