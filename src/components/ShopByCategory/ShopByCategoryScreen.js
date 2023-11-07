import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ShopByCategoyHooks} from './ShopByCategoryHooks';
import {styles} from './ShopByCategoryStyles';

const ShopByCategoryListScreen = () => {
  const {data, renderItem} = ShopByCategoyHooks();
  return (
    <View style={styles.backGround}>
      <Text style={styles.headingText}>Shop by Category</Text>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ShopByCategoryListScreen;
