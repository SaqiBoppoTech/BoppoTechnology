import React, {useState, useEffect} from 'react';
import {ScreenNames} from '../../global';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import axios from 'axios';
import {BearerToken, ORIGIN} from '../../global/config';

const ChangeAddressHooks = () => {
  let route = useRoute();

  const [allAddress, setAllAddress] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const navigateToCategoryScreen = () => {
    route.params.getCheckoutInfo();
    navigation.navigate(ScreenNames.ORDER_SUMMARY_SCREEN);
  };

  const dispatch = useDispatch();

  const queryParams = {
    page: page,
  };

  const checkoutId = useSelector(e => e.user.checkoutData);
  console.log('checkoutIdfromChangeAddress', checkoutId);

  //getaddress api
  const getAddressList = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      const url = `https://stage-api.boppogo.com/auth/api/v1/customer/get-address-list?page=${queryParams.page}&limit=100`;
      const response = await axios.get(url, {
        headers: {
          Authorization: BearerToken,
          origin: ORIGIN,
        },
      });
      if (response.data.success == true) {
        dispatch(UserAction.setGlobalLoader(false));
        const addressList = response.data.data.addressList;
        setAllAddress(addressList);
        setHasMore(addressList.length === 10);
        console.log('this is delivery address', addressList);
      }
    } catch (error) {
      dispatch(UserAction.setGlobalLoader(false));
      console.log('error Save address Api', error.message);
    }
  };

  //CHANGE ADDRESS API

  const onChangeAddress = async id => {
    setSelectedItem(id);
    try {
      dispatch(UserAction.setGlobalLoader(true));
      const url = `https://stage-api.boppogo.com/order/api/v1/checkout/customer/change-address/${checkoutId}`;
      const response = await axios.put(
        url,
        {
          shop_customer_shipping_address_id: id,
          shop_customer_billing_address_id: id,
        },
        {
          headers: {
            Authorization: BearerToken,
            origin: ORIGIN,
          },
        },
      );
      if (response.data.success == true) {
        dispatch(UserAction.setGlobalLoader(false));
        const message = response.data.message;
        console.log('this is change address api response message', message, id);
        navigateToCategoryScreen();
      }
    } catch (error) {
      dispatch(UserAction.setGlobalLoader(false));
      console.log('error Save address Api', error.message);
    }
  };

  useEffect(() => {
    getAddressList();
  }, []);

  const loadMoreAddresses = () => {
    if (!loading && hasMore) {
      getAddressList();
    }
  };

  return {
    handleGoBack,
    allAddress,
    loadMoreAddresses,
    loading,
    selectedItem,
    setSelectedItem,
    onChangeAddress,
  };
};

export default ChangeAddressHooks;
