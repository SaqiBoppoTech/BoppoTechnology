import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from './ShopByCategoryStyles';

const ShopByCategoyHooks = () => {
  const data = [
    {
      key: '1',
      image: require('../../assets/images/coffee.png'),
      name: 'Coffee Products',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
    },
    {
      key: '2',
      image: require('../../assets/images/dettol.png'),
      name: 'Health Care',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
    },
    {
      key: '3',
      image: require('../../assets/images/coffee.png'),
      name: 'Coffee Products',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
    },
    {
      key: '4',
      image: require('../../assets/images/dettol.png'),
      name: 'Health Care',
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
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            color: 'black',
            fontSize: 13,
            fontWeight: 600,
            marginTop: 15,
          }}>
          {item.name}
        </Text>

        <Text
          style={{
            color: 'red',
            fontSize: 15,
            fontWeight: 700,
            marginTop: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          Up to {item.percent}% off
        </Text>
      </View>
    </TouchableOpacity>
  );

  return {
    data,
    renderItem,
  };
};

export {ShopByCategoyHooks};
