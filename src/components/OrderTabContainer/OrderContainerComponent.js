import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './OrderContainerStyles';
import PrivacyPolicyHooks from '../../screen/PrivacyPolicy/PrivacyPolicyHooks';
import {OrderContainerHooks} from './OrderContainerHooks';
import {useNavigation} from '@react-navigation/native';
import {Constant, ScreenNames} from '../../global';
import SelectStarSvg from '../../assets/svgs/SelectStarSvg.svg';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import PopupSvg from '../../assets/svgs/PopupSvg.svg';
import CustomBottomSheet from '../CustomBottomsheetorderDetails/CustomBottomsheetorderDetails';

const OrderContainerComponent = ({
  heading,
  margingBottomSize,
  showPopup,
  showQuantity,
  showProductQty,
  showOrderDetailButton,
  showDivider,
  containerHeight,
}) => {
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

  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const openBottomSheet = () => {
    setIsBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setIsBottomSheetVisible(false);
  };

  const renderItem = ({item}) => (
    <View
      style={{
        ...styles.mainView,
        height: containerHeight
          ? CHANGE_BY_MOBILE_DPI(226)
          : CHANGE_BY_MOBILE_DPI(178),
      }}>
      <View style={styles.rowView}>
        <View style={styles.contaier}>
          <Image source={{uri: item.image}} style={styles.imgcontainer} />
        </View>
        <View style={styles.nameWrapper}>
          {heading ? (
            <View style={styles.textWrapper}>
              <Text style={styles.name} numberOfLines={1}>
                {' '}
                {item.name}{' '}
              </Text>
            </View>
          ) : null}
          <View style={styles.descriptionWrapper}>
            <Text
              style={styles.description}
              numberOfLines={2}
              ellipsizeMode="tail">
              {' '}
              {item.des}{' '}
            </Text>
            {showPopup ? (
              <TouchableOpacity onPress={openBottomSheet}>
                <PopupSvg />
              </TouchableOpacity>
            ) : null}
          </View>
          {showQuantity ? <Text style={styles.quantity}>1Qty </Text> : null}
          {showProductQty ? (
            <Text style={styles.count}>
              {' '}
              This order has{item.productCount} products
            </Text>
          ) : null}
          <View style={styles.rate}>
            <View style={styles.ratingStarBackGround}>
              <FlatList
                horizontal
                data={[1, 2, 3, 4, 5]}
                renderItem={() => <SelectStarSvg style={{marginLeft: 2}} width={CHANGE_BY_MOBILE_DPI(11)} height={CHANGE_BY_MOBILE_DPI(11)}/>}
              />
            </View>
            <Text style={styles.counts}> Rate this product Now</Text>
          </View>

          <Text style={styles.price}> Paid {item.paid} USD </Text>
        </View>
      </View>
      {showDivider ? <View style={styles.btn}></View> : null}
      <TouchableOpacity onPress={navigateToOrderDetails}>
        {showOrderDetailButton ? (
          <View style={styles.viewOrderDetailBtn}>
            <Text style={styles.viewOrderDetailBtnText}>View Order Detail</Text>
          </View>
        ) : null}
      </TouchableOpacity>
      <CustomBottomSheet
              isVisible={isBottomSheetVisible}
              onClose={closeBottomSheet}
            />
    </View>
  );
  return (
    <View
      style={{
        ...styles.background,
        marginBottom: margingBottomSize ? CHANGE_BY_MOBILE_DPI(117) : 0,
      }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default OrderContainerComponent;
