import React from 'react';
import {View, Image, FlatList, StyleSheet, Text} from 'react-native';
import {styles} from './BrandStoreStyles';

const BrandStoreHooks = () => {
  const data = [
    {
      key: '1',
      image: require('../../assets/images/carasolimage.png'),
      name: 'Coffee & Tea',
      price: 'Beverages',
    },
    {
      key: '2',
      image: require('../../assets/images/carasolimage.png'),
      name: 'Coffee & Tea',
      price: 'Beverages',
    },
    {
      key: '3',
      image: require('../../assets/images/carasolimage.png'),
      name: 'Coffee & Tea',
      price: 'Beverages',
    },
    {
      key: '4',
      image: require('../../assets/images/carasolimage.png'),
      name: 'Coffee & Tea',
      price: 'Beverages',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <View style={styles.imageback}>
        <Image source={item.image} style={styles.image} />
      </View>
    </View>
  );

  return {
    data,
    renderItem,
  };
};

export {BrandStoreHooks};
