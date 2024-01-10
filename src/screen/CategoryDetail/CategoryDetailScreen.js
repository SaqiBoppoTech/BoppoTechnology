import React, {useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import {CategoryDetailHooks} from './CategoryDetailHooks';
import {styles} from './CategoryDetailStyle';
import {Colors} from '../../global';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {STATIC_DATA} from '../../global/staticdata';
import {CategoryHooks} from '../Category/CategoryHooks';
import Card from '../../components/Card/Card';

const CategoryDetailScreen = ({route}) => {
  const {name,handle,index} = route.params;
  const {
    handleGoBack,
    navigateToFilterPage,
    renderItemTopTab,
    collectionByHandel,
    setCollectionByHandel,
    navigateToProdiuctDetail
  } = CategoryDetailHooks();
  const {categoriesList} = CategoryHooks();

  const renderItem = ({item}) => (
    <Card
      categoryCardContainer={styles.categoryCardContainer}
      image={`https://cdn-stage.boppogo.com/${item?.shop_collection?.collection_image_url}`}
      categoryDetailImageContainer={styles.categoryDetailImageContainer}
      paddingContainerCategoryDetail={styles.paddingContainerCategoryDetail}
      name={item.shop_product.title}
      titleFontStyleCategoryDetail={styles.titleFontStyleCategoryDetail}
      price={item.shop_product_variant.price}
      discountPrice={item.shop_product_variant.compare_price}
      percent={item.percent}
      categoryDetailRatingStar={true}
      freeDelivery={true}
      plusSvgVisibility={true}
      onPress={navigateToProdiuctDetail}
    />
  );

  return (
    <View style={styles.main}>
      <FocusAwareStatusBar barColor={Colors.GRAY_LIGHT} />
      <SearchAppBar
        title={name}
        showIcon={true}
        showSearchIcon={true}
        showFilter={true}
        onFilterPress={navigateToFilterPage}
        onPress={() => {
          handleGoBack();
        }}
      />
      <View>
        <FlatList
          horizontal
          data={categoriesList}
          renderItem={renderItemTopTab}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
      <View style={styles.listWrapper}>
        <FlatList
          data={collectionByHandel}
          renderItem={renderItem}
          keyExtractor={item => item.key}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default CategoryDetailScreen;
