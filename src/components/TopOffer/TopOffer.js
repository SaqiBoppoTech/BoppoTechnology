import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { TopOfferHooks } from './TopOfferHooks';
import { styles } from './TopOfferStyles';
import { STATIC_DATA } from '../../global/staticdata';
const TopOffer = () => {
  const { renderItem } = TopOfferHooks();
  return (
    <View style={styles.backGround}>
      <Text style={styles.headingText}>Top Offers</Text>
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

export default TopOffer;
