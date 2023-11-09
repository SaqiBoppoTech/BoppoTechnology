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
import {Constant, ScreenNames} from '../../global';
import SelectStarSvg from '../../assets/svgs/SelectStarSvg.svg';
import {useNavigation} from '@react-navigation/native';

const AllOrderHooks = () => {
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
      name: 'Dettol Products 123455678899',
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
  // VARIABLE
  const navigation = useNavigation();

  // FUNCTION
  const navigateToOrderDetails = () => {
    navigation.navigate(ScreenNames.ORDERDETAIL_SCREEN);
  };

  const renderItem = ({item}) => (
    <View style={styles.mainView}>
      <View style={styles.rowView}>
        <View style={styles.contaier}>
          <Image source={{uri: item.image}} style={styles.imgcontainer} />
        </View>
        <View style={styles.nameWrapper}>
          <View style={styles.textWrapper}>
            <Text style={styles.name} numberOfLines={1}>
              {' '}
              {item.name}{' '}
            </Text>
          </View>
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
            <View style={styles.ratingStarBackGround}>
              <FlatList
                horizontal
                data={[1, 2, 3, 4, 5]}
                renderItem={() => <SelectStarSvg style={{marginLeft: 2}} />}
              />
            </View>
            <Text style={styles.counts}> Rate this product Now</Text>
          </View>

          <Text style={styles.price}> Paid {item.paid} USD </Text>
        </View>
      </View>
      <View style={styles.btn}></View>
      <TouchableOpacity onPress={navigateToOrderDetails}>
        <View style={styles.viewOrderDetailBtn}>
          <Text style={styles.viewOrderDetailBtnText}>View Order Detail</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return {
    data,
    renderItem,
  };
};

export {AllOrderHooks};
