import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './SearchAppStyle';
import BackArrow from '../../../assets/svgs/BackArrow.svg';
import Search from '../../../assets/svgs/Search.svg';
import Filter from '../../../assets/svgs/Filter.svg';
import Cart from '../../../assets/svgs/Cart.svg';
import Heart from '../../../assets/svgs/Heart.svg';

const SearchAppBar = ({
  title,
  onPress,
  showSearchIcon,
  onSearchPress,
  showFilter,
  onFilterPress,
  showHeart,
  onHeartPress,
  showCartIcon,
  onCartPress,
  showText,
  onFilterTextPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity
          hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
          onPress={onPress}
          activeOpacity={0.7}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rowWrapper}>
        {showSearchIcon && (
          <TouchableOpacity
            style={styles.searchWrapper}
            onPress={onSearchPress}>
            <Search width="20" height="20" />
          </TouchableOpacity>
        )}

        {showFilter && (
          <TouchableOpacity style={styles.cartWrapper} onPress={onFilterPress}>
            <Filter />
          </TouchableOpacity>
        )}
        {showHeart && (
          <TouchableOpacity style={styles.cartWrapper} onPress={onHeartPress}>
            <Heart />
          </TouchableOpacity>
        )}

        {showCartIcon && (
          <TouchableOpacity style={styles.cartWrapper} onPress={onCartPress}>
            <Cart />
          </TouchableOpacity>
        )}

        {showText && (
          <TouchableOpacity onPress={onFilterTextPress}>
            <Text style={styles.filter}>Clear Filter</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SearchAppBar;
