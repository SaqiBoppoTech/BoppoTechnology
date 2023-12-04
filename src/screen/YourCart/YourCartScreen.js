import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {styles} from './YourCartStyles';
import CheckoutNavigationBar from '../../components/CheckoutNavigationBar/CheckoutNavigationBar';
import BlackIncremnetButton from '../../components/BlackIncrementButton/BlackIncrementButton';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import CommonButton from '../../components/Button/CommonButton';
import Heart from '../../assets/svgs/Heart.svg';
import Cross from '../../assets/svgs/Cross.svg';
import YourCartHook from './YourCartHooks';
import {Colors} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import { GlobalImage } from '../../global/staticImage';

const YourCart = () => {
  const {
    handleGoBack,
    navigateToProductScreen,
    removeFromCart,
    wishListClick,
    navigateToOrderSummary,
  } = YourCartHook();
  const data = [
    {
      id: 1,
      image:
        GlobalImage.Goldenearings,
      name: 'Gold Earrings',
      numOfCustumer: 1,
      starCount: 3,
      price: 36.99,
      discount: 48.56,
      quantity: 1,
    },
    {
      id: 2,
      image:
        GlobalImage.Ring2,
      name: 'Rings',
      numOfCustumer: 1,
      starCount: 3,
      price: 36.99,
      discount: 48.56,
      quantity: 1,
    },
    {
      id: 3,
      image:
        GlobalImage.Set1,
      name: 'Platinum',
      numOfCustumer: 1,
      starCount: 3,
      price: 36.99,
      discount: 48.56,
      quantity: 1,
    },
    {
      id: 4,
      image:
       GlobalImage.TwoEarings,
      name: 'Earrings',
      numOfCustumer: 1,
      starCount: 3,
      price: 36.99,
      discount: 48.56,
      quantity: 1,
    },
    {
      id: 5,
      image:
       GlobalImage.GoldenPendent,
      name: 'Pendant',
      numOfCustumer: 1,
      starCount: 3,
      price: 36.99,
      discount: 48.56,
      quantity: 1,
    },
    {
      id: 6,
      image:
        GlobalImage.WhiteEarings,
      name: 'Diamond Earring',
      numOfCustumer: 1,
      starCount: 3,
      price: 36.99,
      discount: 48.56,
      quantity: 1,
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.renderMainView}>
        <View style={styles.imageViewWrapper}>
          <Image source={item.image} style={styles.imageWrapper} />
          <View style={styles.containWrapper}>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{item.price} USD</Text>
              <Text style={styles.discount}>{item.discount}USD</Text>
            </View>
            <Text style={styles.quantity}>Qty</Text>
            <BlackIncremnetButton />
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.editWrapper} onPress={wishListClick}>
            <Heart
              width={CHANGE_BY_MOBILE_DPI(14)}
              height={CHANGE_BY_MOBILE_DPI(14)}
            />
            <Text style={styles.optionText}>Wishlist</Text>
          </TouchableOpacity>
          <View style={styles.verticalLine}></View>
          <TouchableOpacity
            style={styles.removeWrapper}
            onPress={removeFromCart}>
            <Cross
              width={CHANGE_BY_MOBILE_DPI(12)}
              height={CHANGE_BY_MOBILE_DPI(12)}
            />
            <Text style={styles.optionText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainView}>
      <FocusAwareStatusBar barColor={Colors.CONCRETE} />
      <SearchAppBar title={'Cart'} onPress={handleGoBack} />
      <CheckoutNavigationBar />
      <View style={styles.flatlistView}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.key}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.btnStyle}>
        {/* <CommonButton title={'Continue'} onPress={navigateToOrderSummary} /> */}
        <CommonButton
          color={Colors.BLACK}
          externalCustomButtonStyle={styles.externalCustomButtonStyle}
          externalContainer={styles.externalContainer}
          externalFontStyle={styles.externalFontStyle}
          title={'Continue'}
          onPress={navigateToOrderSummary}
        />
      </View>
    </View>
  );
};

export default YourCart;
