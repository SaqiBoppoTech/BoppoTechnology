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
import Arrow from '../../assets/svgs/ArrowCategorySvg.svg';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';

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

  const renderCategory = ({item}) => (
    <TouchableOpacity
      onPress={() => navigateToCategoryDetail(item)}
      activeOpacity={1}>
      <View style={styles.productWrapper}>
        <Image source={item.image} style={styles.imageWrapper} />
        <View style={styles.titleWrapper}>
          <Text numberOfLines={1} style={styles.textWrapper}>
            {item.name}
          </Text>
          <Text style={styles.productText}>{item.quantity} products</Text>
        </View>
        <View style={styles.arrowWrapper}>
          <Arrow height={CHANGE_BY_MOBILE_DPI(12)} width={CHANGE_BY_MOBILE_DPI(9)}/>
        </View>
      </View>
    </TouchableOpacity>
  )
  return {categoryData, categoryImg, navigateToCategoryDetail,renderCategory};
};

export {CategoryHooks};
