import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {BrandStoreHooks} from '../BrandStore/BrandStoreHooks';
import {YourBrowsingHistoryHooks} from './YourBrowsingHistoryHooks';
import {styles} from './YourBrowsingHistoryStyle';

const BrowsingHistoryListScreen = () => {
  const {data, renderItem} = YourBrowsingHistoryHooks();
  return (
    <View style={styles.backGround}>
      <Text style={styles.headingText}>Your Browsing History</Text>
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

export default BrowsingHistoryListScreen;
