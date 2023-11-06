import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {ExploreItemHooks} from './ExploreItemsHooks';
import {styles} from './ExploreItemsStyles';

const ExploreItemScreen = ({navigation, onBuyNowPress, onPress}) => {
  const {data, renderItem} = ExploreItemHooks();
  return (
    <View style={styles.backGround}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('BottomSheetExample');
        }}>
        <Text style={styles.headingText}>Explore Items</Text>
      </TouchableOpacity>

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

export default ExploreItemScreen;
