import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CircleIncrementButton from '../../components/Button/CircleIncrementButton';
import RatingComponent from '../../components/RatingStar';
import { styles } from './CategoryDetailStyle';
import Card from '../../components/Card/Card';
import { ScreenNames } from '../../global';
import Filter from '../Filter/FilterScreen';
import TopTabBar from '../../components/TopTabBar/TopTabBar';

const CategoryDetailHooks = () => {
  // VARIABLE
  const navigation = useNavigation();

  const [selectedtopTab, setSelectedTopTab] = React.useState(0)

  const navigateToProdiuctDetail = () => {
    navigation.navigate(ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN)
  }
  const renderItem = ({ item }) => (
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
      onPress={navigateToProdiuctDetail}
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

  const renderItemTopTab = ({ item ,index }) => {
    return (
      <TopTabBar
      item={item} 
      index={index}
      setValue={setSelectedTopTab}
      value={selectedtopTab}
      name={'name'}
      externalTopTabContainerStyle={styles.externalTopTabContainerStyle}
      externalTopTabStyle={styles.externalTopTabStyle}
       />
    )
  }

  return {  renderItem, handleGoBack, navigateToFilterPage, renderItemTopTab };
};

export { CategoryDetailHooks };
