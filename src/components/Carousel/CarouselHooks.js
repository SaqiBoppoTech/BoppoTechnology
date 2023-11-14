import React, {Component, useRef, useState} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {FlatList} from 'react-native-gesture-handler';
import { styles } from './CarouselStyle';
import { Colors } from '../../global';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';

const CarouselHooks = () => {
  const width = Dimensions.get('window').width;

  const [isFocused, setIsFocused] = useState(0);

  const carasolimagedata = [
    {id: 1, image: require('../../assets/images/carasolimage.png')},
    {id: 2, image: require('../../assets/images/carasolimage.png')},
    {id: 3, image: require('../../assets/images/carasolimage.png')},
    // Add more items here
  ];

  const DATA = [
    {
      id: '1',
      title: 'Data Structures',
    },
    {
      id: '2',
      title: 'STL',
    },
    {
      id: '3',
      title: 'C++',
    },
  ];

  const renderItem = ({item, index}) => {
    let focusStyle = isFocused === index ?  { backgroundColor: Colors.BLACK} : {backgroundColor:Colors.WHITE,borderWidth:CHANGE_BY_MOBILE_DPI(0.5),borderColor:Colors.GRAY_MEDIUM}
    return (
      <View>
        <View
          style={{
            ...styles.indicator,
             ...focusStyle
          }}></View>
      </View>
    );
  };
  return {
    carasolimagedata,
    width,
    DATA,
    setIsFocused,
    isFocused,
    renderItem,
  };
};

export {CarouselHooks};
