import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import FilterType from '../../components/FilterType/FilterTypeScreen';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import {useNavigation} from '@react-navigation/native';
import Brand from '../../components/BrandFilter/BrandScreen';
import {FilterHooks} from './FilterHooks';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors} from '../../global';
import {style} from './FilterStyles';

const Filter = () => {
  const {
    DATA,
    renderItem,
    handleGoBack,
    filter,
    setFilter,
    navigateToFilterPage,
  } = FilterHooks();
  return (
    <View style={{flex: 1}}>
      <FocusAwareStatusBar barColor={Colors.GRAY_LIGHT} />
      <SearchAppBar
        title="Filter"
        showText={true}
        showCartCount={false}
        onFilterTextPress={navigateToFilterPage}
        onPress={() => {
          handleGoBack();
        }}
      />
      <View style={style.main}>
        <View style={style.filterType}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={style.filterContent}>
          {filter == 1 ? (
            <Brand />
          ) : filter == 2 ? (
            <Brand />
          ) : filter == 3 ? (
            <Brand />
          ) : filter == 4 ? (
            <Brand />
          ) : filter == 5 ? (
            <Brand />
          ) : filter == 6 ? (
            <Brand />
          ) : filter == 7 ? (
            <Brand />
          ) : (
            ''
          )}
        </View>
      </View>
    </View>
  );
};

export default Filter;
