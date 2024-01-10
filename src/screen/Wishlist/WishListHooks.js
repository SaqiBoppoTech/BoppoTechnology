import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {API_END_POINT, BASE_URL, ORIGIN, TOKEN} from '../../global/config';
import {useDispatch} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import axiosInstance from '../../global/api-core';

const WishListHooks = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const addToCartPress = () => {};
  const removeFromCart = () => {};
  const navigateToProductScreen = () => {
    navigation.navigate(ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN);
  };

  const navigateToCartPage = () => {
    navigation.navigate(ScreenNames.YOUR_CART_SCREEN);
  };

  const dispatch = useDispatch();

  ///API CODE GETWISHLIST
  const [wishListData, setWishListData] = useState(null);

  const getWishListData = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      let url = `${API_END_POINT.GET_WISHLIST}`;
      let response = await axiosInstance.get(url);
      if (response.data.success == true) {
        dispatch(UserAction.setGlobalLoader(false));
        setWishListData(response.data.data.customerWishlistDetails);
      }
    } catch (error) {
      dispatch(UserAction.setGlobalLoader(false));
      console.log('error getWishList', error.message);
    }
  };

  ///API CODE OF DELETEWISHLIST
  const deleteWishListData = async id => {
    try {
      let url = `${API_END_POINT.DELETE_WISHLIST}/${id}`;
      let response = await axiosInstance.delete(url);
      if (response.data.success == true) {
        getWishListData();
        console.log(response.data);
      }
    } catch (error) {
      console.log('error deleteWishList', error.message);
    }
  };

  ///API OF ADDTOCART
  const addToCart = async (productID, productVariantId, productQuantity) => {
    console.log(productID, productVariantId);
    try {
      let url = `${API_END_POINT.ADD_CART}`;
      let response = await axiosInstance.post(url, {
        productId: productID,
        productVariantId: productVariantId,
        productQuantity: 1,
      });
      if (response.data.success == true) {
        console.log(`SUCCESSFULL ${response.data}`);
      }
    } catch (error) {
      console.log('error Add to Cart', error.message);
    }
  };

  useEffect(() => {
    getWishListData();
  }, []);

  return {
    handleGoBack,
    addToCartPress,
    removeFromCart,
    navigateToProductScreen,
    navigateToCartPage,
    wishListData,
    deleteWishListData,
    addToCart,
  };
};

export default WishListHooks;
