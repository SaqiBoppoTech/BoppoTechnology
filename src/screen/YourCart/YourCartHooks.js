import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import {useEffect, useState} from 'react';
import {BASE_URL, API_END_POINT} from '../../global/config';
import {useDispatch} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import axiosInstance from '../../global/api-core';

const YourCartHook = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const dispatch = useDispatch();

  const navigateToProductScreen = () => {
    navigation.navigate(ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN);
  };
  const navigateToOrderSummary = () => {
    navigation.navigate(ScreenNames.ORDER_SUMMARY_SCREEN);
  };

  ///API CODE
  const [cartListData, setCartListData] = useState([]);
  const [paymentDataList, setpaymentDataList] = useState(null);
  const [checkoutData, setCheckoutData] = useState(null);
  const [wishListData, setWishListData] = useState([]);

  const navigateToProdiuctDetail = (productHandle, productId) => {
    console.log('Going To Product detail with :', productHandle, productId);
    navigation.navigate(ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN, {
      productHandle,
      productId,
    });
  };

  const getCartListData = async () => {
    let abc = `${BASE_URL}${API_END_POINT.GET_CART}`;
    console.log('222222222222222222222', abc);
    try {
      dispatch(UserAction.setGlobalLoader(true));
      let url = `${BASE_URL}${API_END_POINT.GET_CART}`;
      const response = await axiosInstance.get(url);
      if (response.data.success == true) {
        dispatch(UserAction.setGlobalLoader(false));
        setCartListData(response.data.data.customerCartDetails);
      }
      console.log('0000000000000000000000000000000', response.data.data);
    } catch (error) {
      dispatch(UserAction.setGlobalLoader(false));
      console.log('error getCartList', error.message);
    }
  };

  ///API CODE OF DELETECART
  const deleteCartListData = async id => {
    dispatch(UserAction.setGlobalLoader(true));
    try {
      let url = `${BASE_URL}${API_END_POINT.DELETE_FROM_CART}/${id}`;
      const response = await axiosInstance.delete(url);
      if (response.data.success == true) {
        dispatch(UserAction.setGlobalLoader(false));
        getCartListData();
      }
      console.log(response.data);
    } catch (error) {
      dispatch(UserAction.setGlobalLoader(false));
      console.log('error deleteCartList', error.message);
    }
  };

  ///API OF ADDTOWISHLIST
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

  const shopPaymentProviders = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      let url = `${BASE_URL}${API_END_POINT.PAYMENT_PROVIDER}`;
      const response = await axiosInstance.get(url);
      if (response.data.success == true) {
        dispatch(UserAction.setGlobalLoader(false));
        setpaymentDataList(response.data);
        console.log('payment list', response.data);
      }
    } catch (error) {
      dispatch(UserAction.setGlobalLoader(false));
      console.log('error paymentlist', error.message);
    }
  };

  const createCheckout = async () => {
    let aaa = `${BASE_URL}${API_END_POINT.CREATE_CHECKOUT}`;
    console.log('uuuuuuuuuuuuuuuu', aaa);
    try {
      dispatch(UserAction.setGlobalLoader(true));
      let url = `${BASE_URL}${API_END_POINT.CREATE_CHECKOUT}`;
      const response = await axiosInstance.post(url, {
        payment_mode: 'Cash On Delivery(COD)',
        payment_provider_id: 3,
      });
      if (response.data.success == true) {
        dispatch(UserAction.setGlobalLoader(false));
        setCheckoutData(response.data.data.checkout_id);
        dispatch(UserAction.setCheckoutData(response.data.data.checkout_id));
        navigateToOrderSummary();
        console.log('checkout response', response.data.data.checkout_id);
      }
    } catch (error) {
      dispatch(UserAction.setGlobalLoader(false));
      console.log('error checkout api', error.message);
    }
  };
  console.log('checkout =>>>>>>>>>>>>> ', checkoutData);

  const getWishListData = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      let url = `${API_END_POINT.GET_WISHLIST}`;
      console.log('url=>>>>>>>>>>>', url);
      let response = await axiosInstance.get(url);
      if (response.data.success == true) {
        dispatch(UserAction.setGlobalLoader(false));
        setWishListData(response.data.data.customerWishlistDetails);
        console.log('wishlist form cart', wishListData);
      }
    } catch (error) {
      dispatch(UserAction.setGlobalLoader(false));
      console.log('error getWishList', error.message);
    }
  };

  useEffect(() => {
    getCartListData();
    getWishListData();
  }, []);

  return {
    handleGoBack,
    navigateToProductScreen,
    navigateToOrderSummary,
    cartListData,
    deleteCartListData,
    addToWishList,
    createCheckout,
    wishListData,
    navigateToProdiuctDetail,
  };
};

export default YourCartHook;
