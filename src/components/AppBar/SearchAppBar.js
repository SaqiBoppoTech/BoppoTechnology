import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

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
          <Icon name="search" size={27} color="#000" />
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
              <Icons name="cart-outline" size={30} color="#000" />
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
    height: 50,
  },
  arrowWrapper: {
    justifyContent: 'center',
  },
});
