import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import {
  BASE_URL,
  API_END_POINT,
  BearerToken,
  ORIGIN,
} from '../../global/config';
import axiosInstance from '../../global/api-core';

const OrderSummaryHooks = () => {
  const [orderData, setOrderData] = useState(null);
  const [checkoutInfo, setCheckoutInfo] = useState(null);
  const [cartListData, setCartListData] = useState([]);

  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const onChangeDeliveryAddress = () => {
    navigation.navigate(ScreenNames.CHANGE_ADDRESS, {getCheckoutInfo});
  };

  const onAddNewDeliveryAddress = () => {};
  const onAddNewBillingAddress = () => {};
  const dispatch = useDispatch();

  const checkoutId = useSelector(e => e.user.checkoutData);
  console.log('checkoutId', checkoutId);

  const navigateToPayment = () => {
    navigation.navigate(ScreenNames.PAYMENT_SCREEN, {checkoutInfo});
  };

  const getOrderDetail = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      const url = `https://stage-api.boppogo.com/order/api/v1/customer/orders`;
      const response = await axios.post(
        url,
        {
          page: 1,
          limit: 50,
          order_status: ['Active'],
        },

        {
          headers: {
            Authorization: BearerToken,
            origin: ORIGIN,
          },
        },
      );
      if (response.data.success == true) {
        console.log('inside');
        dispatch(UserAction.setGlobalLoader(false));
        setOrderData(response.data);
        console.log('ppppppppppppp', response.data);
      }
      console.log('orderdata ', response.data);
    } catch (error) {
      dispatch(UserAction.setGlobalLoader(false));
      console.log('error orderdata Api', error.message);
    }
  };
  // console.log('orderData', orderData);

  const getCheckoutInfo = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      const url = `${BASE_URL}${API_END_POINT.CHECKOUT_INFO}/${checkoutId}`;
      const response = await axiosInstance.get(url);
      console.log('url --------->', url);
      if (response.data.success == true) {
        console.log('inside checkpout ');
        dispatch(UserAction.setGlobalLoader(false));
        setCheckoutInfo(response.data.data);
        console.log('checkoutInfo =>>>>', response.data.data);
      }
    } catch (error) {
      dispatch(UserAction.setGlobalLoader(false));
      console.log('error checkpoutInfo Api', error.message);
    }
  };
  console.log('checkpoutInfo', checkoutInfo);

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

  useEffect(() => {
    // getOrderDetail();
    getCheckoutInfo();
    getCartListData();
  }, []);

  return {
    handleGoBack,
    onAddNewBillingAddress,
    onAddNewDeliveryAddress,
    navigateToPayment,
    checkoutInfo,
    onChangeDeliveryAddress,
    cartListData,
  };
};

export default OrderSummaryHooks;
