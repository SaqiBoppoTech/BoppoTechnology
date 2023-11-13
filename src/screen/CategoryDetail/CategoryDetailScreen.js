import React, {useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CircleIncrementButton from '../../components/Button/CircleIncrementButton';
import RatingComponent from '../../components/RatingStar';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import {CategoryDetailHooks} from './CategoryDetailHooks';
import {styles} from './CategoryDetailStyle';
import {Colors} from '../../global';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';

const CategoryDetailScreen = ({route, navigation}) => {
  // const {name} = route.params;
  const {categoryData, renderItem, handleGoBack} = CategoryDetailHooks();
  return (
    <View
      style={{
        backgroundColor: '#EFEFEF',
        height: '100%',
      }}>
      <FocusAwareStatusBar barColor={Colors.GRAY_LIGHT} />
      <SearchAppBar
        title="{name}"
        showIcon={true}
        showFilter={true}
        onFilterPress={() => {
          navigation.navigate('CategoryFIlter');
        }}
        onPress={() => {
          handleGoBack();
        }}
      />
      <FlatList
        data={categoryData}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        numColumns={2}
      />
    </View>
  );
};

export default CategoryDetailScreen;
