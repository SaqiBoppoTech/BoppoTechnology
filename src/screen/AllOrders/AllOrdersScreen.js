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
import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

const AllOrderScreen = () => {
  const {renderItem, orders} = AllOrderHooks();

  console.log('order length', orders);

  return (
    <View style={styles.background}>
      {orders.length > 0 ? (
        <FlatList
          data={orders}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              color: Colors.BLACK,
              fontFamily: Fonts.INTER_REGULAR,
              fontSize: CHANGE_BY_MOBILE_DPI(16),
            }}>
            No Order Item Found
          </Text>
        </View>
      )}
    </View>
  );
};

export default AllOrderScreen;
