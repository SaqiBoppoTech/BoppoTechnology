import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import SearchField from '../../components/SearchField';
import {GlobalImage} from '../../global/staticImage';
import {styles} from './CategoryStyle';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';

const CategoryHooks = () => {
  // VARIABLE
  const navigation = useNavigation();

  //HOOKS
  const {categoryImg} = GlobalImage;
  const categoryData = [
    {
      name: 'Personal Care',
      quantity: '160',
      image: categoryImg,
    },
    {
      name: 'Grocery',
      quantity: '160',
      image: categoryImg,
    },
    {
      name: 'Beauty Products',
      quantity: '160',
      image: categoryImg,
    },
    {
      name: 'Health Care',
      quantity: '160',
      image: categoryImg,
    },
    {
      name: 'Books & Toys',
      quantity: '160',
      image: categoryImg,
    },
    {
      name: 'Baby Products',
      quantity: '160',
      image: categoryImg,
    },
    {
      name: 'Beauty Products',
      quantity: '160',
      image: categoryImg,
    },
    {
      name: 'Grocery',
      quantity: '160',
      image: categoryImg,
    },
  ];

  //FUNCTION
  const navigateToCategoryDetail = item => {
    navigation.navigate(ScreenNames.CATEGORY_DETAIL_SCREEN, {
      name: item.name,
    });
  };

  return {categoryData, categoryImg, navigateToCategoryDetail};
};

export {CategoryHooks};
