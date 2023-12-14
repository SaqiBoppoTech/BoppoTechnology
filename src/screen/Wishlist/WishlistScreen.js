import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {styles} from './WishlistStyle';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import {Colors} from '../../global';
import RatingComponent from '../../components/RatingStar';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import ShoppingBag from '../../assets/svgs/Shopping_Bag.svg';
import Cross from '../../assets/svgs/Cross.svg';
import WishListHooks from './WishListHooks';
import {GlobalImage} from '../../global/staticImage';

const WishlistScreen = () => {
  const {
    handleGoBack,
    addToCartPress,
    removeFromCart,
    navigateToProductScreen,
    navigateToCartPage,
    wishListData,
  } = WishListHooks();

  const renderItem = ({item}) => {
    return (
      <View style={styles.renderMainView}>
        <View style={styles.imageViewWrapper}>
          <Image
            source={{
              uri: `https://cdn-stage.boppogo.com/${item.product_variant.shop_product_media.url}`,
            }}
            style={styles.imageWrapper}
          />
          <View style={styles.containWrapper}>
            <Text style={styles.name}>{item.product.title}</Text>
            <View style={styles.ratingRowView}>
              <RatingComponent
                initialRating={item.starCount}
                starheight={CHANGE_BY_MOBILE_DPI(15)}
                starwidth={CHANGE_BY_MOBILE_DPI(15)}
                width={CHANGE_BY_MOBILE_DPI(90)}
              />
              <Text style={styles.customer}>
                ({item.numOfCustumer} customer review)
              </Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{item.product_variant.price} USD</Text>
              <View style={styles.circle}></View>
              <Text style={styles.quantity}>{item.quantity}Qty</Text>
            </View>
            <Text style={styles.discount}>{item.product_variant.compare_price} USD</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={navigateToProductScreen}>
              <Text style={styles.btnText}>View Product</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.editWrapper} onPress={addToCartPress}>
            <ShoppingBag
              width={CHANGE_BY_MOBILE_DPI(16)}
              height={CHANGE_BY_MOBILE_DPI(16)}
            />
            <Text style={styles.optionText}>Add to Cart</Text>
          </TouchableOpacity>
          <View style={styles.verticalLine}></View>
          <TouchableOpacity
            style={styles.removeWrapper}
            onPress={removeFromCart}>
            <Cross
              width={CHANGE_BY_MOBILE_DPI(14)}
              height={CHANGE_BY_MOBILE_DPI(14)}
            />
            <Text style={styles.optionText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.WHITE}}>
      <FocusAwareStatusBar barColor={Colors.CONCRETE} />
      <SearchAppBar
        title={'Your Wishlist'}
        onPress={handleGoBack}
        showCartCount={true}
        showCartIcon={true}
        onCartPress={navigateToCartPage}
      />
      <FlatList
        data={wishListData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default WishlistScreen;
