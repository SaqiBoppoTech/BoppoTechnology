import React from 'react';
import {View, Text, Image, FlatList, Button} from 'react-native';
import {styles} from './CancelReturnStyles';
import SelectStarSvg from '../../assets/svgs/SelectStarSvg.svg';

const CancelReturnHooks = () => {
  const data = [
    {
      key: '1',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Kinder Happy Hippo Cocoa Cream 5',
      productCount: '2',
      discountPrice: '36.99 USD',
      qty: '1',
      paid: '76.99',
      price: '48.56',
    },
    {
      key: '2',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Kinder Happy Hippo Cocoa Cream 5 ',
      productCount: '2',
      discountPrice: '36.99 USD',
      qty: '1',
      paid: '76.99',
      price: '48.56',
    },
    {
      key: '3',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Kinder Happy Hippo Cocoa Cream 5 ',
      productCount: '2',
      paid: '76.99',
      discountPrice: '36.99 USD',
      qty: '1',
      price: '48.56',
    },
    {
      key: '4',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Kinder Happy Hippo Cocoa Cream 5 ',
      productCount: '2',
      paid: '76.99',
      discountPrice: '36.99 USD',
      qty: '1',
      price: '48.56',
    },
    {
      key: '5',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Kinder Happy Hippo Cocoa Cream 5',
      productCount: '2',
      paid: '76.99',
      discountPrice: '36.99 USD',
      qty: '1',
      price: '48.56',
    },
    {
      key: '6',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Kinder Happy Hippo Cocoa Cream 5',
      productCount: '2',
      paid: '76.99',
      discountPrice: '36.99 USD',
      qty: '1',
      price: '48.56',
    },
    {
      key: '7',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Kinder Happy Hippo Cocoa Cream 5',
      productCount: '2',
      paid: '76.99',
      discountPrice: '36.99 USD',
      qty: '1',
      price: '48.56',
    },
    {
      key: '8',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Kinder Happy Hippo Cocoa Cream 5',
      productCount: '2',
      paid: '76.99',
      discountPrice: '36.99 USD',
      qty: '1',
      price: '48.56',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <View style={styles.alignContent}>
        <View style={styles.imgWrapper}>
          <Image source={{uri: item.image}} style={styles.imgcontainer} />
        </View>
        <View style={styles.colWrapper}>
          <View style={styles.textWrapper}>
            <Text numberOfLines={2} style={styles.name}>
              {' '}
              {item.name}{' '}
            </Text>
          </View>
          <View style={styles.rate}>
            <View style={styles.ratingStarBackGround}>
              <FlatList
                horizontal
                data={[1, 2, 3, 4, 5]}
                renderItem={() => <SelectStarSvg style={{marginLeft: 1}} />}
              />
            </View>
            <Text style={styles.counts}> (1 customer review)</Text>
          </View>
          <View style={styles.qtyStyleWrapper}>
            <Text style={styles.discountPriceText}>{item.discountPrice}</Text>
            <View style={styles.dot} />
            <Text style={styles.qtyText}>{item.qty} Qty </Text>
          </View>
          <Text style={styles.priceText}> {item.price} USD</Text>
          <View style={styles.buyAgainBtn}>
            <Text style={styles.buyAgainText}>Buy Again</Text>
          </View>
        </View>
      </View>
      <View style={styles.border}></View>
      <View>
        <Text style={styles.cancelWrapper}>
          {' '}
          View Cancelled/Returned Detail
        </Text>
      </View>
    </View>
  );

  return {
    data,
    renderItem,
  };
};

export {CancelReturnHooks};
