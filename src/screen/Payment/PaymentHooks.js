import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {ScreenNames} from '../../global';
import {BearerToken, ORIGIN} from '../../global/config';
import {useDispatch, useSelector} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import axios from 'axios';

const PaymentHooks = () => {
  const [paymentData, setPaymentData] = useState(null);
  const [selectedRadioPayment, setSelectedRadioPayment] = useState(4);
  const [createOrderData, setCreateOrderData] = useState(null);

  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const dispatch = useDispatch();

  const checkoutId = useSelector(e => e.user.checkoutData);
  console.log('checkoutId', checkoutId);

  const orderReceivedSuccess = () => {
    navigation.navigate(ScreenNames.PAYMENT_SUCCESS);
  };

  const getPaymentInfo = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      const url = `https://stage-api.boppogo.com/payment/api/v1/providers/shop-payment-providers`;
      const response = await axios.get(url, {
        headers: {
          Authorization: BearerToken,
          origin: ORIGIN,
        },
      });
      console.log('url --------->', url);
      if (response.data.success == true) {
        console.log('inside payment loop ');
        dispatch(UserAction.setGlobalLoader(false));
        setPaymentData(response.data.data);
        console.log('paymentinfo =>>>>', response.data.data);
      }
    } catch (error) {
      dispatch(UserAction.setGlobalLoader(false));
      console.log('error paymnet Api', error.message);
    }
  };

  const changePaymentMethod = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      const url = `https://stage-api.boppogo.com/order/api/v1/checkout/customer/change-payment/${checkoutId}`;
      const response = await axios.put(
        url,
        {
          payment_id: 4,
        },
        {
          headers: {
            Authorization: BearerToken,
            origin: ORIGIN,
          },
        },
      );
      console.log('url --------->', url);
      if (response.data.success == true) {
        console.log('inside change payment Method loop ');
        dispatch(UserAction.setGlobalLoader(false));
        console.log('paymentmethod message =>>>>', response.data.message);
      }
    } catch (error) {
      dispatch(UserAction.setGlobalLoader(false));
      console.log('error change Payment Method Api', error.message);
    }
  };

  const createOrder = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      const url = `https://stage-api.boppogo.com/order/api/v1/customer/create-order`;
      const response = await axios.post(
        url,
        {
          checkout_id: checkoutId.toString(),
        },
        {
          headers: {
            Authorization: BearerToken,
            Origin: ORIGIN,
          },
        },
      );
      console.log('url --------->', url);
      if (response.data.success == true) {
        console.log('create order inside  ');
        dispatch(UserAction.setGlobalLoader(false));
        let data = response.data.data;
        setCreateOrderData(data);
        console.log('create order message =>>>>', data);
      }
    } catch (error) {
      dispatch(UserAction.setGlobalLoader(false));
      console.log('error crete eorder Method Api', error.message);
    }
  };

  console.log('crrate order data ', createOrderData);

  useEffect(() => {
    getPaymentInfo();
  }, []);

  return {
    handleGoBack,
    orderReceivedSuccess,
    selectedRadioPayment,
    setSelectedRadioPayment,
    paymentData,
    changePaymentMethod,
    createOrder,
    createOrderData,
  };
};

export {PaymentHooks};
