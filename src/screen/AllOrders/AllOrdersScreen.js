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

const AllOrderScreen = ({navigation, onPressOrder}) => {
  const data = [
    {
      key: '1',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Coffee Products',
      des: 'Kinder Happy Hippo Cocoa Cream 5',
      productCount: '2',
      paid: '76.99',
      ratecount: 0,
    },
    {
      key: '2',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Dettol Products',
      des: 'Kinder Happy Hippo Cocoa Cream 5',
      productCount: '2',
      paid: '76.99',
      ratecount: 0,
    },
    {
      key: '3',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Coffee Products',
      des: 'Kinder Happy Hippo Cocoa Cream 5',
      productCount: '2',
      paid: '76.99',
      ratecount: 0,
    },
    {
      key: '4',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Dettol Products',
      des: 'Kinder Happy Hippo Cocoa Cream 5',
      productCount: '2',
      paid: '76.99',
      ratecount: 0,
    },
    {
      key: '5',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Coffee Products',
      des: 'Kinder Happy Hippo Cocoa Cream 5',
      productCount: '2',
      paid: '76.99',
      ratecount: 0,
    },
    {
      key: '6',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Dettol Products',
      des: 'Kinder Happy Hippo Cocoa Cream 5',
      productCount: '2',
      paid: '76.99',
      ratecount: 0,
    },
    {
      key: '7',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Coffee Products',
      des: 'Kinder Happy Hippo Cocoa Cream 5',
      productCount: '2',
      paid: '76.99',
      ratecount: 0,
    },
    {
      key: '8',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Dettol Products',
      des: 'Kinder Happy Hippo Cocoa Cream 5',
      productCount: '2',
      paid: '76.99',
      ratecount: 0,
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.mainView}>
      <View style={styles.rowView}>
        <View style={styles.contaier}>
          <Image source={{uri:item.image}} style={styles.imgcontainer} />
        </View>
        <View style={styles.nameWrapper}>
          <Text style={styles.name}> {item.name} </Text>
          <Text
            style={styles.description}
            numberOfLines={2}
            ellipsizeMode="tail">
            {' '}
            {item.des}{' '}
          </Text>

          <Text style={styles.count}>
            {' '}
            This order has{item.productCount} products
          </Text>
          <View style={styles.rate}>
            <RatingComponent />
            <Text style={styles.counts}> Rate this product</Text>
          </View>

          <Text style={styles.price}> Paid {item.paid} USD </Text>
        </View>
      </View>
      <View style={styles.btn}></View>
      <TouchableOpacity onPress={onPressOrder}>
        <Text style={styles.btn}>View Order Detail</Text>
      </TouchableOpacity>
    </View>
  );

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
