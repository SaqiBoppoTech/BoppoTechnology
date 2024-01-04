import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import {useDispatch, useSelector} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import {BASE_URL, ORIGIN, TOKEN} from '../../global/config';
import axios from 'axios';
import {useEffect, useState} from 'react';

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

  ///API OF Customer Order by ID
  const getOrderbyId = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      let url = `${BASE_URL}/order/api/v1/customer/order/${userDataOrderId}`;
      const response = await axios.get(url, {
        headers: {
          authorization: userData,
          origin: ORIGIN,
        },
      });
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
  const cancelOrderbyId = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      let url = `${BASE_URL}/order/api/v1/customer/cancel-order/BGS-1`;
      const response = await axios.post(url, {
        headers: {
          authorization: userData,
          origin: ORIGIN,
        },
      });
      if (response.data.success == true) {
        
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
  };
};

export {orderDetailHooks};
