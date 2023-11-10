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
import { STATIC_DATA } from '../../global/staticdata';

const TopDealList = () => {
  const { renderItem} = TopDealsHooks();
  return (
    <View style={styles.backGround}>
      <Text style={styles.headingColor}>Top Deals</Text>
      <FlatList
        data={STATIC_DATA.topDetailData}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default TopDealList;
