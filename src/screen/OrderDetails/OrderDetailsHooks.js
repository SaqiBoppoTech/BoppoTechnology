import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import {useDispatch, useSelector} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import {API_END_POINT, BASE_URL, ORIGIN, TOKEN} from '../../global/config';
import axios from 'axios';
import {useEffect, useState} from 'react';
import axiosInstance from '../../global/api-core';

const orderDetailHooks = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userData = useSelector(e => e.user?.logoutToken);
  const userDataOrderId = useSelector(e => e.user?.orderId);
  const navigateToCartPage = () => {
    navigation.navigate(ScreenNames.YOUR_CART_SCREEN);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const [orderbyIdData, setOrderbyIdData] = useState(null);
  console.warn(userDataOrderId);

  ///API OF Customer Order by ID
  const getOrderbyId = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      let url = `${API_END_POINT.ORDER_BY_ID}/${userDataOrderId}`;
      let response = await axiosInstance.get(url);
      if (response.data.success == true) {
        dispatch(UserAction.setGlobalLoader(false));
        setOrderbyIdData(response.data.data.order_details);
        console.log(response.data.data.order_details);
      }
    } catch (error) {
      console.log('error GetOrderbyId', error.message);
    }
  };

  ///API OF CANCEL ORDER BY ID
  const navigateToOrderScreen = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      let url = `${API_END_POINT.CANCEL_ORDER}/${userDataOrderId}`;
      let response = await axiosInstance.post(url);
      if (response.data.success == true) {
        navigation.navigate(ScreenNames.ORDER_SCREEN);
      }
    } catch (error) {
      console.log('error CancelOrderbyId', error.message);
    }
  };

  useEffect(() => {
    getOrderbyId();
  }, []);

  return {
    navigateToCartPage,
    handleGoBack,
    orderbyIdData,
    navigateToOrderScreen,
  };
};

export {orderDetailHooks};
