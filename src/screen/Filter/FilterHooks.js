import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import FilterType from '../../components/FilterType/FilterTypeScreen';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import {useNavigation} from '@react-navigation/native';
import Brand from '../../components/BrandFilter/BrandScreen';
import { style } from './FilterStyles';

const FilterHooks = () => {
  const DATA = [
    {
      id: '1',
      title: 'Sort',
    },
    {
      id: '2',
      title: 'Price',
    },
    {
      id: '3',
      title: 'Brand',
    },
    {
      id: '4',
      title: 'Customer \nRating',
    },
    {
      id: '5',
      title: 'Categories',
    },
    {
      id: '6',
      title: 'Availaibility',
    },
    {
      id: '7',
      title: 'Discount',
    },
  ];

  const [filter, setFilter] = useState(0);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => setFilter(item.id)}>
        <View>
          <FilterType filterTypeName={item} selectedId={filter} />
        </View>
      </TouchableOpacity>
    );
  };

  const redirect = useNavigation();
  const handleGoBack = () => {
    redirect.goBack();
  };

  return {DATA, renderItem, handleGoBack,filter,setFilter};
};

export {FilterHooks};
