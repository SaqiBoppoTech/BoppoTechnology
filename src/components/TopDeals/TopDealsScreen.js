import React from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {TopDealsHooks} from './TopDealsHooks';
import {styles} from './TopDealsStyles';

const TopDealListScreen = () => {
  const {data, renderItem} = TopDealsHooks();
  return (
    <View style={styles.backGround}>
      <Text style={styles.headingColor}>Top Deals</Text>
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

export default TopDealListScreen;
