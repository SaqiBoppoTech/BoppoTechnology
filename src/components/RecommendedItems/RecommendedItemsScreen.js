import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {RecommendedItemHooks} from './RecommendedItemsHooks';
import {styles} from './RecommendedItemsStyles';

const RecommendedItemListScreen = () => {
  const {data, renderItem} = RecommendedItemHooks();
  return (
    <View style={styles.backGround}>
      <Text style={styles.headingText}>Recommended Items</Text>
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

export default RecommendedItemListScreen;
