import React, {useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CircleIncrementButton from '../../components/Button/CircleIncrementButton';
import RatingComponent from '../../components/RatingStar';
import {styles} from './CategoryDetailStyle';
import Card from '../../components/Card/Card';
import {ScreenNames} from '../../global';
import Filter from '../Filter/FilterScreen';

const CategoryDetailHooks = () => {
  // VARIABLE
  const navigation = useNavigation();
  const categoryData = [
    {
      key: '1',
      image: require('../../assets/images/vanish.png'),
      name: 'Vanish Oxi Action..',
      price: '500',
      discountPrice: '18.44',
      percent: '20',
      benefit: 'Free Delivery Today',
    },
    {
      key: '2',
      image: require('../../assets/images/vanish.png'),
      name: 'Vanish Oxi Action..',
      price: '600',
      discountPrice: '18.44',
      percent: '20',
      benefit: 'Free Delivery Today',
    },
    {
      key: '3',
      image: require('../../assets/images/vanish.png'),
      name: 'Vanish Oxi Action..',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
      benefit: 'Free Delivery Today',
    },
    {
      key: '4',
      image: require('../../assets/images/vanish.png'),
      name: 'Vanish Oxi Action..',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
      benefit: 'Free Delivery Today',
    },
    {
      key: '5',
      image: require('../../assets/images/vanish.png'),
      name: 'Vanish Oxi Action..',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
      benefit: 'Free Delivery Today',
    },
    {
      key: '6',
      image: require('../../assets/images/vanish.png'),
      name: 'Vanish Oxi Action..',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
      benefit: 'Free Delivery Today',
    },
    {
      key: '7',
      image: require('../../assets/images/vanish.png'),
      name: 'Vanish Oxi Action..',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
      benefit: 'Free Delivery Today',
    },
    {
      key: '8',
      image: require('../../assets/images/vanish.png'),
      name: 'Vanish Oxi Action..',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
      benefit: 'Free Delivery Today',
    },
  ];

  const renderItem = ({item}) => (
    <Card
      categoryCardContainer={styles.categoryCardContainer}
      image={item.image}
      categoryDetailImageContainer={styles.categoryDetailImageContainer}
      paddingContainerCategoryDetail={styles.paddingContainerCategoryDetail}
      name={item.name}
      titleFontStyleCategoryDetail={styles.titleFontStyleCategoryDetail}
      price={item.price}
      discountPrice={item.discountPrice}
      percent={item.percent}
      categoryDetailRatingStar={true}
      freeDelivery={true}
      plusSvgVisibility={true}
    />
  );
  const redirect = useNavigation();
  const handleGoBack = () => {
    redirect.goBack();
  };

  //FUNCTION
  const navigateToFilterPage = () => {
    navigation.navigate(ScreenNames.FILTER);
  };

  return {categoryData, renderItem, handleGoBack, navigateToFilterPage};
};

export {CategoryDetailHooks};
