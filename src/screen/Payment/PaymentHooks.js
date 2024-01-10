import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {ScreenNames} from '../../global';
import {BASE_URL, API_END_POINT} from '../../global/config';
import {useDispatch, useSelector} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import axiosInstance from '../../global/api-core';

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
      const url = `${BASE_URL}${API_END_POINT.PAYMENT_PROVIDER}`;
      const response = await axiosInstance.get(url);
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

  const changePaymentMethod = async payment_provider_id => {
    console.log('payment_provider_id', payment_provider_id);
    try {
      dispatch(UserAction.setGlobalLoader(true));
      const url = `${BASE_URL}${API_END_POINT.CHANGE_PAYMENT}/${checkoutId}`;
      const response = await axiosInstance.put(url, {
        payment_id: payment_provider_id,
      });
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
    console.log('create order ');
    try {
      dispatch(UserAction.setGlobalLoader(true));
      const url = `${BASE_URL}${API_END_POINT.CREATE_ORDER}`;
      const response = await axiosInstance.post(url, {
        checkout_id: checkoutId.toString(),
      });
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
