import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../global';
import { style } from './FilterTypeStyle';

const FilterType = ({filterTypeName, selectedId}) => {
  return (
    <View
      style={{
        ...style.container,
        backgroundColor:
          filterTypeName.id == selectedId ? Colors.WHITE : 'transparent',
      }}>
      <Text
        style={{
          ...style.textStyle,
          color:
            filterTypeName.id == selectedId ? Colors.PRIMARY : Colors.BLACK,
        }}>
        {filterTypeName.title}
      </Text>
    </View>
  );
};

export default FilterType;
