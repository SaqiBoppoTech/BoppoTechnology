const {
  TouchableOpacity,
  Image,
  View,
  Text,
  Modal,
  Animated,
  Dimensions,
} = require('react-native');
import {styles} from './ExploreItemsStyles';
import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {ScreenName, ScreenNames} from '../../global/index';
import PlusSvg from '../../assets/svgs/PlusSvg.svg';
import BlackIncremnetButton from '../Button/BlackIncrementButton';
import AddToCartBottomButton from '../Button/AddToCartBottomButton';
import HomeBottomSheet from '../Common/HomeBottomSheet';

const ExploreItemHooks = () => {
  const {height} = Dimensions.get('window');

  const data = [
    {
      key: '1',
      image: require('../../assets/images/coffee.png'),
      name: 'Nescafe gold Cappuccino Coffee 8 Sachets X 15.5g',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
    },
    {
      key: '2',
      image: require('../../assets/images/dettol.png'),
      name: 'Nescafe gold Cappuccino Coffee 8 Sachets X 15.5g',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
    },
    {
      key: '3',
      image: require('../../assets/images/coffee.png'),
      name: 'Nescafe gold Cappuccino Coffee 8 Sachets X 15.5g',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
    },
    {
      key: '4',
      image: require('../../assets/images/dettol.png'),
      name: 'Nescafe gold Cappuccino Coffee 8 Sachets X 15.5g',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
    },
    // Add more items as needed
  ];

  const navigation = useNavigation();
  const navigateToProductDetail = () => {
    navigation.navigate(ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN);
  };

  const [isVisible, setIsVisible] = useState(false);
  const translateY = useRef(new Animated.Value(height)).current;

  const showBottomSheet = () => {
    setIsVisible(true);
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const hideBottomSheet = () => {
    Animated.timing(translateY, {
      toValue: height,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setIsVisible(false);
    });
  };

  const renderItem = ({item}) => (
    <View>
      <TouchableOpacity style={styles.item}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>${item.price}</Text>
          <Text style={styles.discountPrice}>${item.discountPrice}</Text>

          <Text style={styles.productPercent}>{item.percent}% OFF</Text>
        </View>
        <View style={styles.circularButtonContainer}>
          <TouchableOpacity onPress={showBottomSheet}>
            <PlusSvg />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <Modal
        transparent={true}
        visible={isVisible}
        onRequestClose={hideBottomSheet}>
        <TouchableOpacity
          style={styles.backGroundColorBottomSheetActive}
          activeOpacity={1}
          onPress={hideBottomSheet}>
          <Animated.View
            style={{
              ...styles.bottomSheetBackground,
              transform: [{translateY}],
            }}>
            <HomeBottomSheet />
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );

  return {
    data,
    renderItem,
  };
};

export {ExploreItemHooks};
