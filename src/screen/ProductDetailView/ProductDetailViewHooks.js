import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {styles} from './ProductDetailViewStyle';
import {Colors, ScreenNames} from '../../global';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import ProductReview from '../../components/ProductReview/ProductReview';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import QuestionAndAnswer from '../../components/QuestionAndAnswer/QuestionAndAnswer';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import {BASE_URL, API_END_POINT} from '../../global/config';
import axiosInstance from '../../global/api-core';

const ProductDetailViewHooks = () => {
  const [selectedTab, setSelectTabs] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [wishListData, setWishListData] = useState([]);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  let route = useRoute();
  let routeProductHandle = route?.params?.productHandle;
  let routeProductId = route?.params?.productId;
  console.log('routeProductHandle', routeProductHandle);
  console.log('routeProductId', routeProductId);

  const openCustomView = (description, price, stockCount) => {
    console.log({description});
    return (
      <View style={styles.marginBottomContainer}>
        {selectedTab == 0 ? (
          <ProductDescription
            description={description}
            price={price}
            stockCount={stockCount}
          />
        ) : selectedTab == 1 ? (
          <ProductDetail />
        ) : selectedTab == 2 ? (
          <ProductReview />
        ) : (
          <QuestionAndAnswer />
        )}
      </View>
    );
  };

  //FUNCTION

  const navigateToCheckOut = () => {
    navigation.navigate(ScreenNames.ORDER_SUMMARY_SCREEN);
  };

  const navigateToCartPage = () => {
    navigation.navigate(ScreenNames.YOUR_CART_SCREEN);
  };

  const renderTopBar = ({item, index}) => {
    const addIndexOntState = () => {
      setSelectTabs(index);
    };
    let bottomBar = selectedTab == index && {backgroundColor: Colors.PRIMARY};
    return (
      <TouchableOpacity
        style={styles.barContainerStyle}
        onPress={addIndexOntState}>
        <Text
          style={[
            selectedTab == index
              ? styles.labelFontStyle
              : styles.labelBlurFontStyle,
          ]}>
          {item}
        </Text>
        <View style={{...styles.bottomBar, ...bottomBar}}></View>
      </TouchableOpacity>
    );
  };

  const getSingleProduct = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      let url = `${BASE_URL}${API_END_POINT.SINGLE_PRODUCT_BY_ID}/${routeProductHandle}/${routeProductId}`;
      console.log('single product detail url', url);
      const response = await axiosInstance.get(url);
      if (response.data.success == true) {
        dispatch(UserAction.setGlobalLoader(false));
        setSelectedProduct(response.data.data);
        console.log(
          `response of single product by id  ${response.data.data.shop_product_variants.product}`,
        );
      }
    } catch (error) {
      console.log('error getsingleProduct data', error.message);
    }
  };

  const addToWishList = async (productID, productVariantId) => {
    console.log('addtowishlist item data ', productID, productVariantId);
    try {
      dispatch(UserAction.setGlobalLoader(true));
      const url = `${BASE_URL}${API_END_POINT.ADD_WISHLIST}`;
      const response = await axiosInstance.post(url, {
        productId: productID,
        productVariantId: productVariantId,
      });
      console.log('add to wishlist response', response.data);
      if (response.data.success == true) {
        getWishListData();
        dispatch(UserAction.setGlobalLoader(false));
      }
      console.log(response.data);
    } catch (error) {
      dispatch(UserAction.setGlobalLoader(false));
      console.log('error Add to WishList', error.message);
    }
  };

  const addToCart = async (productId, id) => {
    console.log('aaaazzzzziddd', productId, id);
    console.log('before', selectedProduct);
    try {
      dispatch(UserAction.setGlobalLoader(true));
      let url = `${BASE_URL}${API_END_POINT.ADD_TO_CART}`;
      console.log('categorydetailurl', url);
      const response = await axiosInstance.post(url, {
        productId: productId,
        productVariantId: id,
        productQuantity: 1,
      });
      if (response.data.success == true) {
        dispatch(UserAction.setGlobalLoader(false));
        setSelectedProduct(response.data.data);
        getSingleProduct();
        // navigateToCartPage();
        console.log(
          `response of add to card product by id  ${response.data.message}`,
        );
      }
      console.log('after', selectedProduct);
    } catch (error) {
      console.log('error add to card data', error.message);
    }
  };

  console.log('oooooooooooooo', selectedProduct);

  const getWishListData = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      let url = `${API_END_POINT.GET_WISHLIST}`;
      console.log('url=>>>>>>>>>>>', url);
      let response = await axiosInstance.get(url);
      if (response.data.success == true) {
        dispatch(UserAction.setGlobalLoader(false));
        setWishListData(response.data.data.customerWishlistDetails);
        console.log('wishlist form product detail', wishListData);
      }
    } catch (error) {
      dispatch(UserAction.setGlobalLoader(false));
      console.log('error getWishList fro product detail', error.message);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
    console.log('data');
  };

  useEffect(() => {
    getSingleProduct();
    getWishListData();
  }, []);

  return {
    renderTopBar,
    openCustomView,
    navigateToCheckOut,
    handleGoBack,
    navigateToCartPage,
    selectedProduct,
    addToCart,
    wishListData,
    addToWishList,
  };
};
export {ProductDetailViewHooks};
