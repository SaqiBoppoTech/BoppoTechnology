import React from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ShopByCategoryHooks} from './ShopByCategoryHooks';
import {styles} from './ShopByCategoryStyles';
import { STATIC_DATA } from '../../global/staticdata';

const ShopByCategory = () => {
  const { renderItem} = ShopByCategoryHooks();
  return (
    <View style={styles.backGround}>
      <Text style={styles.headingColor}>Shop by Category</Text>
      <FlatList
        data={STATIC_DATA.shopByCategoryData}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default ShopByCategory;
