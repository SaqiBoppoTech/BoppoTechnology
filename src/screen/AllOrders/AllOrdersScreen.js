import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import RatingComponent from '../../components/RatingStar';
import {styles} from './AllOrdersStyles';
import {AllOrderHooks} from './AllOrdersHooks';

const AllOrderScreen = () => {
  const {data, renderItem} = AllOrderHooks();

  return (
    <View style={styles.background}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default AllOrderScreen;
