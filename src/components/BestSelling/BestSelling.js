import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { ExploreItemHooks } from './BestSellingHooks';
import { styles } from './BestSellingStyles';
import { STATIC_DATA } from '../../global/staticdata';
const BestSelling = () => {
  const { renderItem } = ExploreItemHooks();
  return (
    <View style={styles.backGround}>
      <Text style={styles.headingText}>Best Selling</Text>
      <FlatList
        data={STATIC_DATA.exploreItemData}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default BestSelling;
