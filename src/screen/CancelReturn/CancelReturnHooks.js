import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import {styles} from './CancelReturnStyles';
import SelectStarSvg from '../../assets/svgs/SelectStarSvg.svg';
import {ScreenNames} from '../../global';
import {useNavigation} from '@react-navigation/native';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import { GlobalImage } from '../../global/staticImage';

const CancelReturnHooks = () => {
  const data = [
    {
      key: '1',
      image:
        GlobalImage.GoldenRings,
      name: 'Gold Rings',
      productCount: '2',
      discountPrice: '36.99 USD',
      qty: '1',
      paid: '76.99',
      price: '48.56',
    },
    {
      key: '2',
      image:
        GlobalImage.Ring2,
      name: 'Rose Gold ',
      productCount: '2',
      discountPrice: '36.99 USD',
      qty: '1',
      paid: '76.99',
      price: '48.56',
    },
    {
      key: '3',
      image:
       GlobalImage.Ring4,
      name: 'Dimond Gold Ring',
      productCount: '2',
      paid: '76.99',
      discountPrice: '36.99 USD',
      qty: '1',
      price: '48.56',
    },
    {
      key: '4',
      image:
        GlobalImage.Set1,
      name: 'Dimond',
      productCount: '2',
      paid: '76.99',
      discountPrice: '36.99 USD',
      qty: '1',
      price: '48.56',
    },
    {
      key: '5',
      image:
       GlobalImage.TwoEarings,
      name: 'Earrings',
      productCount: '2',
      paid: '76.99',
      discountPrice: '36.99 USD',
      qty: '1',
      price: '48.56',
    },
    {
      key: '6',
      image:
        GlobalImage.Set2,
      name: 'Dimond',
      productCount: '2',
      paid: '76.99',
      discountPrice: '36.99 USD',
      qty: '1',
      price: '48.56',
    },
    {
      key: '7',
      image:
        GlobalImage.GoldenPendent,
      name: 'Pendant',
      productCount: '2',
      paid: '76.99',
      discountPrice: '36.99 USD',
      qty: '1',
      price: '48.56',
    },
    {
      key: '8',
      image:
       GlobalImage.Ring6,
      name: 'Ring',
      productCount: '2',
      paid: '76.99',
      discountPrice: '36.99 USD',
      qty: '1',
      price: '48.56',
    },
  ];

  // VARIABLE
  const navigation = useNavigation();
  // FUNCTION
  const navigateToCancelReturnDetailScreen = () => {
    navigation.navigate(ScreenNames.CANCELRETURNDETAIL_SCREEN);
  };

  const navigateToOrderSummaryPage = () => {
    navigation.navigate(ScreenNames.ORDER_SUMMARY_SCREEN);
  };

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <View style={styles.alignContent}>
        <View style={styles.imgWrapper}>
          <Image source={ item.image} style={styles.imgcontainer} />
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
                renderItem={() => <SelectStarSvg style={{marginLeft: 1}}  width={CHANGE_BY_MOBILE_DPI(11)} height={CHANGE_BY_MOBILE_DPI(11)}/>}
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
          <TouchableOpacity onPress={navigateToOrderSummaryPage}>
            <View style={styles.buyAgainBtn}>
              <Text style={styles.buyAgainText}>Buy Again</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btn}></View>
      <TouchableOpacity onPress={navigateToCancelReturnDetailScreen}>
        <View style={styles.viewcancelDetailBtn}>
          <Text style={styles.viewCancelDetailBtnText}>
            View Cancelled/Returned Detail
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return {
    data,
    renderItem,
  };
};

export {CancelReturnHooks};
