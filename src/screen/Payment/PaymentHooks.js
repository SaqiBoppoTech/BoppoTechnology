import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {ScreenNames} from '../../global';
import {BearerToken, ORIGIN} from '../../global/config';
import {useDispatch} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import axios from 'axios';

const PaymentHooks = () => {
  const [paymentData, setPaymentData] = useState(null);
  const [selectedRadioPayment, setSelectedRadioPayment] = useState(1);

  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const dispatch = useDispatch();

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
  useEffect(() => {
    getPaymentInfo();
  }, []);

  return {
    handleGoBack,
    orderReceivedSuccess,
    selectedRadioPayment,
    setSelectedRadioPayment,
    paymentData,
  };
};

export {PaymentHooks};
