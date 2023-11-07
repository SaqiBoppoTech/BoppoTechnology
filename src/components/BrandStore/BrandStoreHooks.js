import React from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {styles} from './BrandStoreStyles';
import {useNavigation} from '@react-navigation/native';
import {ScreenName, ScreenNames} from '../../global/index';

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

  const navigation = useNavigation();
  const navigateToProductDetail = () => {
    navigation.navigate(ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={navigateToProductDetail}>
      <View style={styles.item}>
        <View style={styles.imageback}>
          <Image source={item.image} style={styles.image} />
        </View>
      </View>
    </TouchableOpacity>
  );

  return {
    data,
    renderItem,
  };
};

export {BrandStoreHooks};
