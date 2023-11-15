import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './SearchAppStyle';
import BackArrow from '../../../assets/svgs/BackArrow.svg';
import Search from '../../../assets/svgs/Search.svg';
import Filter from '../../../assets/svgs/Filter.svg';
import Cart from '../../../assets/svgs/Cart.svg';
import Heart from '../../../assets/svgs/Heart.svg';
import { CHANGE_BY_MOBILE_DPI } from '../../../global/constant';

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
          <BackArrow  height={CHANGE_BY_MOBILE_DPI(20)}  width={CHANGE_BY_MOBILE_DPI(20)} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rowWrapper}>
        {showSearchIcon && (
          <TouchableOpacity
            style={styles.searchWrapper}
            onPress={onSearchPress}>
            <Search  height={CHANGE_BY_MOBILE_DPI(20)}  width={CHANGE_BY_MOBILE_DPI(20)}/>
          </TouchableOpacity>
        )}

        {showFilter && (
          <TouchableOpacity style={styles.cartWrapper} onPress={onFilterPress}>
            <Filter height={CHANGE_BY_MOBILE_DPI(20)}  width={CHANGE_BY_MOBILE_DPI(20)}/>
          </TouchableOpacity>
        )}
        {showHeart && (
          <TouchableOpacity style={styles.cartWrapper} onPress={onHeartPress}>
            <Heart  height={CHANGE_BY_MOBILE_DPI(20)}  width={CHANGE_BY_MOBILE_DPI(20)} />
          </TouchableOpacity>
        )}

        {showCartIcon && (
          <TouchableOpacity style={styles.cartWrapper} onPress={onCartPress}>
            <Cart  height={CHANGE_BY_MOBILE_DPI(20)}  width={CHANGE_BY_MOBILE_DPI(20)} />
          </TouchableOpacity>
        )}
        {
          <View style={styles.count}>
            <Text style={styles.countNumber}>4</Text>
          </View>
        }
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
