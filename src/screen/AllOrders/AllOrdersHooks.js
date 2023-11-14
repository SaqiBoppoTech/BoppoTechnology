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
import OrderContainerComponent from '../../components/OrderTabContainer/OrderContainerComponent';

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
    <OrderContainerComponent
      heading={true}
      margingBottomSize={true}
      showProductQty={true}
      showOrderDetailButton={true}
      showDivider={true}
      containerHeight={true}
    />
  );
  return {
    data,
    renderItem,
  };
};

export {AllOrderHooks};
