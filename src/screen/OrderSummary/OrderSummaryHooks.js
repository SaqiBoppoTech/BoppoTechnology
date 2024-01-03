import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import {BearerToken, ORIGIN} from '../../global/config';

const OrderSummaryHooks = () => {
  const [orderData, setOrderData] = useState(null);
  const [checkoutInfo, setCheckoutInfo] = useState(null);
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
      const url = `https://stage-api.boppogo.com/order/api/v1/checkout/customer/${checkoutId}`;
      const response = await axios.get(url, {
        headers: {
          Authorization: BearerToken,
          origin: ORIGIN,
        },
      });
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

  useEffect(() => {
    // getOrderDetail();
    getCheckoutInfo();
  }, []);

  return {
    handleGoBack,
    onAddNewBillingAddress,
    onAddNewDeliveryAddress,
    navigateToPayment,
    checkoutInfo,
    onChangeDeliveryAddress,
  };
};

export default OrderSummaryHooks;
