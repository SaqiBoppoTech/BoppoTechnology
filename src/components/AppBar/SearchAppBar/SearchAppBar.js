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
  showIcon,
  showHeart,
  showFilter,
  onFilterPress,
  onPressCart,
  showCartIcon,
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
      {showIcon && (
        <View style={styles.iconWrapper}>
          <Search />
          {showFilter && (
            <TouchableOpacity onPress={onFilterPress}>
              <Filter />
            </TouchableOpacity>
          )}
          {showHeart && <Heart />}

          {showCartIcon && (
            <TouchableOpacity onPress={onPressCart}>
              <Cart />
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default SearchAppBar;
