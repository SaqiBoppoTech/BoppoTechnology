import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import {BearerToken, ORIGIN} from '../../global/config';

const OrderSummaryHooks = () => {
  const [orderData, setOrderData] = useState(null);
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const onEditClick = () => {};
  const onRemoveClick = () => {};
  const onAddNewDeliveryAddress = () => {};
  const onAddNewBillingAddress = () => {};
  const dispatch = useDispatch();

  const navigateToPayment = () => {
    navigation.navigate(ScreenNames.PAYMENT_SCREEN);
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
  console.log('orderData', orderData);
  useEffect(() => {
    getOrderDetail();
  }, []);

  return {
    handleGoBack,
    onAddNewBillingAddress,
    onAddNewDeliveryAddress,
    onEditClick,
    onRemoveClick,
    navigateToPayment,
  };
};

export default OrderSummaryHooks;
