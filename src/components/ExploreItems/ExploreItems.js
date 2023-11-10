import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { ExploreItemHooks } from './ExploreItemsHooks';
import { styles } from './ExploreItemsStyles';
import { STATIC_DATA } from '../../global/staticdata';
const ExploreItems = () => {
  const { renderItem } = ExploreItemHooks();
  return (
    <View style={styles.backGround}>
      <Text style={styles.headingText}>Explore Items</Text>
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

export default ExploreItems;
