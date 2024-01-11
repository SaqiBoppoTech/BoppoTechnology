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
import {useDispatch} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
const YourCart = () => {
  const {
    handleGoBack,
    navigateToProductScreen,
    navigateToOrderSummary,
    cartListData,
    deleteCartListData,
    addToWishList,
    createCheckout,
    wishListData,
    navigateToProdiuctDetail,
  } = YourCartHook();

  console.log('hello cartitem', cartListData);
  console.log('hello wishlistItem', wishListData);
  const dispatch = useDispatch();

  const renderItem = ({item}) => {
    console.log('item', item);
    const isItemInWishlist = wishListData.some(
      wishlistItem => wishlistItem.product_id === item.product_id,
    );
    return (
      <View style={styles.renderMainView}>
        <View style={styles.imageViewWrapper}>
          <TouchableOpacity
            onPress={() => {
              const productHandle = item.product.handle;
              const productId = item.product_variant_id;
              navigateToProdiuctDetail(productHandle, productId);
              console.log(
                'productandle and productid',
                productHandle,
                productId,
              );
            }}>
            <Image
              source={{
                uri: `https://cdn-stage.boppogo.com/${item.product_variant.shop_product_media.url}`,
              }}
              style={styles.imageWrapper}
            />
          </TouchableOpacity>

          <View style={styles.containWrapper}>
            <Text style={styles.name}>{item.product.title}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{item.product_variant.price} ₹</Text>
              <Text style={styles.discount}>
                {item.product_variant.compare_price}₹
              </Text>
            </View>
            <Text style={styles.quantity}>1 Qty</Text>
            <BlackIncremnetButton />
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.editWrapper}
            onPress={() =>
              isItemInWishlist
                ? dispatch(
                    UserAction.setToastedAlert({
                      condition: true,
                      toastedAlertText: `Product already added in Wishlist`,
                    }),
                  )
                : addToWishList(item.product_id, item.product_variant_id)
            }>
            {isItemInWishlist ? (
              <Heart
                width={CHANGE_BY_MOBILE_DPI(14)}
                height={CHANGE_BY_MOBILE_DPI(14)}
                fill={Colors.RED}
              />
            ) : (
              <Heart
                width={CHANGE_BY_MOBILE_DPI(14)}
                height={CHANGE_BY_MOBILE_DPI(14)}
              />
            )}
            <Text style={styles.optionText}>Wishlist</Text>
          </TouchableOpacity>
          <View style={styles.verticalLine}></View>
          <TouchableOpacity
            onPress={() => {
              deleteCartListData(item.id);
              console.log('clicked', item);
            }}
            style={styles.removeWrapper}>
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
        {cartListData.length > 0 ? (
          <FlatList
            data={cartListData}
            renderItem={renderItem}
            keyExtractor={item => item.key}
            showsHorizontalScrollIndicator={false}
          />
        ) : (
          <View style={styles.noItemView}>
            <Text style={styles.noItemText}>No item Added in a Cart</Text>
          </View>
        )}
      </View>

      <View style={styles.btnStyle}>
        {/* <CommonButton title={'Continue'} onPress={navigateToOrderSummary} /> */}
        <CommonButton
          color={cartListData.length > 0 ? Colors.BLACK : Colors.GRAY}
          externalCustomButtonStyle={styles.externalCustomButtonStyle}
          externalContainer={styles.externalContainer}
          externalFontStyle={styles.externalFontStyle}
          title={'Continue'}
          onPress={() => {
            cartListData.length > 0 ? createCheckout() : null;
          }}
        />
      </View>
    </View>
  );
};

export default YourCart;
