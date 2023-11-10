import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { YourBrowserHistoryHooks } from './YourBrowserHistoryHooks';
import { styles } from './YourBrowserHistoryStyles';
import { STATIC_DATA } from '../../global/staticdata';
const YourBrowserHistory = () => {
  const { renderItem } = YourBrowserHistoryHooks();
  return (
    <View style={styles.backGround}>
      <Text style={styles.headingText}>Your browsing history</Text>
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

export default YourBrowserHistory;
