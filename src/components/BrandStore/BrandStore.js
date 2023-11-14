import React from 'react';
import {View, Image, FlatList, StyleSheet, Text} from 'react-native';
import {BrandStoreHooks} from './BrandStoreHooks';
import {styles} from './BrandStoreStyles';

const BrandStore = () => {
  const {data, renderItem} = BrandStoreHooks();
  return (
    <View style={styles.backGround}>
      <Text style={styles.headingColor}>Brand Store</Text>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default BrandStore;
