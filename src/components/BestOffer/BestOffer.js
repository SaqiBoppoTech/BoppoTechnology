import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { BestOfferHooks } from './BestOfferHooks';
import { styles } from './BestOfferStyles';
import { STATIC_DATA } from '../../global/staticdata';
const BestOffer = () => {
  const { renderItem ,renderOfferTopTab } = BestOfferHooks();
  return (
    <View style={styles.backGround}>
      <Text style={styles.headingText}>Best Offers</Text>
       <FlatList horizontal data={STATIC_DATA.offerTopData} renderItem={renderOfferTopTab}
        contentContainerStyle={styles.offerTopTabMainContainer}
       />
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

export default BestOffer;
