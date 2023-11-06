import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from './YourBrowsingHistoryStyle';

const YourBrowsingHistoryHooks = () => {
  const data = [
    {
      key: '1',
      image: require('../../assets/images/coffee.png'),
      name: 'Nescafe gold Cappuccino Coffee 8 Sachets X 15.5g',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
    },
    {
      key: '2',
      image: require('../../assets/images/dettol.png'),
      name: 'Nescafe gold Cappuccino Coffee 8 Sachets X 15.5g',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
    },
    {
      key: '3',
      image: require('../../assets/images/coffee.png'),
      name: 'Nescafe gold Cappuccino Coffee 8 Sachets X 15.5g',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
    },
    {
      key: '4',
      image: require('../../assets/images/dettol.png'),
      name: 'Nescafe gold Cappuccino Coffee 8 Sachets X 15.5g',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
    },
    // Add more items as needed
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.item}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text
        style={{
          color: 'black',
          fontSize: 13,
          fontWeight: '500',
          marginTop: 15,
        }}>
        {item.name}
      </Text>
      <View style={styles.priceContainer}>
        <Text style={{color: 'black', fontSize: 14, fontWeight: '600'}}>
          ${item.price}
        </Text>
        <Text
          style={{
            color: '#888888',
            fontSize: 12,
            fontWeight: '400',
            textDecorationLine: 'line-through',
          }}>
          ${item.discountPrice}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 12,
            fontWeight: '700',
            color: '#E50404',
          }}>
          {item.percent}% OFF
        </Text>
      </View>

      <View style={styles.circularButtonContainer}>
        {/* <ProductHomeBottomSheet
        // onAddToCartPress={onAddToCartPress}
        // onBuyNowPress={onBuyNowPress}
        /> */}
      </View>
    </TouchableOpacity>
  );
  return {
    data,
    renderItem,
  };
};

export {YourBrowsingHistoryHooks};
