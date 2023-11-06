import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './TopDealsStyles';
import {useNavigation} from '@react-navigation/native';
import {ScreenName, ScreenNames} from '../../global/index';

const TopDealsHooks = () => {
  const data = [
    {
      key: '1',
      image: require('../../assets/images/coffee.png'),
      name: 'Coffee & Tea',
      price: 'Beverages',
    },
    {
      key: '2',
      image: require('../../assets/images/dettol.png'),
      name: 'Coffee & Tea',
      price: 'Beverages',
    },
    {
      key: '3',
      image: require('../../assets/images/coffee.png'),
      name: 'Coffee & Tea',
      price: 'Beverages',
    },
    {
      key: '4',
      image: require('../../assets/images/dettol.png'),
      name: 'Coffee & Tea',
      price: 'Beverages',
    },
    // Add more items as needed
  ];

  const navigation = useNavigation();
  const navigateToProductDetail = () => {
    navigation.navigate(ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN);
  };

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <TouchableOpacity style={styles.imageback} onPress={navigateToProductDetail}>
        <Image source={item.image} style={styles.image} />
      </TouchableOpacity>

      <View
        style={{
          position: 'absolute',
          bottom: 120,
          left: 0,
          width: '80%',
          height: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: 2,
        }}>
        <Image
          source={require('../../assets/images/rectangle.png')}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'fill',
          }}
        />
        <Text style={{color: '#000', position: 'relative'}}>GET 50% OFF</Text>
      </View>

      <Text style={{fontSize: 15, fontWeight: '700', color: 'black'}}>
        {item.name}
      </Text>
      <Text style={{fontSize: 13, fontWeight: '400', color: '#DA1319'}}>
        {item.price}
      </Text>
    </View>
  );
  return {
    data,
    renderItem,
  };
};

export {TopDealsHooks};
