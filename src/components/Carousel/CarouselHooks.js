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

const CarouselHooks = () => {
  const width = Dimensions.get('window').width;

  const [isFocused, setIsFocused] = useState(0);

  const data = [
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
    return (
      <View style={{marginEnd: 10}}>
        <View
          style={{
            ...styles.indicator,
            backgroundColor: isFocused === index ? 'black' : 'white',
          }}></View>
      </View>
    );
  };
  return {
    data,
    width,
    DATA,
    setIsFocused,
    isFocused,
    renderItem,
  };
};

export {CarouselHooks};
