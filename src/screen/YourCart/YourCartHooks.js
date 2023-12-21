import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {BASE_URL, ORIGIN, TOKEN} from '../../global/config';
import {useDispatch} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';

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
  const [cartListData, setCartListData] = useState(null);
  const [paymentDataList, setpaymentDataList] = useState(null);

  const getCartListData = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      let url = `${BASE_URL}/auth/api/v1/customer/get-cart`;
      const response = await axios.get(url, {
        headers: {
          Authorization: TOKEN,
          origin: ORIGIN,
        },
      });
      if (response.data.success == true) {
        dispatch(UserAction.setGlobalLoader(false));
        setCartListData(response.data.data.customerCartDetails);
      }
    } catch (error) {
      dispatch(UserAction.setGlobalLoader(false));
      console.log('error getCartList', error.message);
    }
  };

  ///API CODE OF DELETECART
  const deleteCartListData = async id => {
    try {
      let url = `${BASE_URL}/auth/api/v1/customer/delete-cart-items/${id}`;
      const response = await axios.delete(url, {
        headers: {
          Authorization: TOKEN,
          origin: ORIGIN,
        },
      });
      if (response.data.success == true) {
        getCartListData();
      }
      console.log(response.data);
    } catch (error) {
      console.log('error deleteCartList', error.message);
    }
  };

  ///API OF ADDTOWISHLIST
  const addToWishList = async (productID, productVariantId) => {
    console.log(productID, productVariantId);
    try {
      const url = `${BASE_URL}/auth/api/v1/customer/add-wishlist`;
      const response = await axios.post(
        url,
        {
          productId: productID,
          productVariantId: productVariantId,
        },
        {
          headers: {
            Authorization: TOKEN,
            origin: ORIGIN,
          },
        },
      );
      console.log(response.data);
    } catch (error) {
      console.log('error Add to WishList', error.message);
    }
  };

  const shopPaymentProviders = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      let url = `https://stage-api.boppogo.com/payment/api/v1/providers/shop-payment-providers`;
      const response = await axios.get(url, {
        headers: {
          Authorization: TOKEN,
          origin: ORIGIN,
        },
      });
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

  console.log('bopoooososos poayment', paymentDataList);

  useEffect(() => {
    getCartListData();
    shopPaymentProviders();
  }, []);

  return {
    handleGoBack,
    navigateToProductScreen,
    navigateToOrderSummary,
    cartListData,
    deleteCartListData,
    addToWishList,
  };
};

export default YourCartHook;
