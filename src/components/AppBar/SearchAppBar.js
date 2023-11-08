import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import CartSvg from '../../assets/svgs/CartSvg.svg';
import SearchAppBarSvg from '../../assets/svgs/SearchAppBarSvg.svg';
import {Colors} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
          marginLeft: 20,
        }}>
        <TouchableOpacity onPress={onPress} activeOpacity={1}>
          <Icon name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: '500', color: '#000'}}>
          {title}
        </Text>
      </View>
      {showIcon && (
        <View style={{flexDirection: 'row', gap: 20, marginRight: 25}}>
          <SearchAppBarSvg />
          {showFilter && (
            <TouchableOpacity onPress={onFilterPress}>
              <Icon name="filter-outline" size={27} color="#000" />
            </TouchableOpacity>
          )}
          {showHeart && (
            <Icons name="cards-heart-outline" size={27} color="#000" />
          )}

          {showCartIcon && (
            <TouchableOpacity onPress={onPressCart}>
              <View>
                <CartSvg />
                <View
                  style={{
                    position: 'absolute',
                    backgroundColor: Colors.PRIMARY,
                    height: CHANGE_BY_MOBILE_DPI(20),
                    width: CHANGE_BY_MOBILE_DPI(20),
                    bottom: CHANGE_BY_MOBILE_DPI(14),
                    left: CHANGE_BY_MOBILE_DPI(13),
                    borderRadius: CHANGE_BY_MOBILE_DPI(100),
                  }}>
                  <Text style={{color: 'white', alignSelf: 'center'}}>4</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default SearchAppBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    height: CHANGE_BY_MOBILE_DPI(59),
  },
  arrowWrapper: {
    justifyContent: 'center',
  },
});
