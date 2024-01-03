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
import {STATIC_DATA} from '../../global/staticdata';

const AllOrderScreen = () => {
  const {renderItem, orders} = AllOrderHooks();

  return (
    <View style={styles.background}>
      {orders && (
        <FlatList
          data={orders}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default AllOrderScreen;
