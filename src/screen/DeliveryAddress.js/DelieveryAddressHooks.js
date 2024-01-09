import React, {useState, useEffect} from 'react';
import {ScreenNames} from '../../global';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import {BASE_URL, API_END_POINT} from '../../global/config';
import axiosInstance from '../../global/api-core';

const DeliveryAddressHooks = () => {
  const [allAddress, setAllAddress] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [removeAddress, setRemoveAddress] = useState(null);

  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const dispatch = useDispatch();

  const editAddress = ({item}) => {
    navigation.navigate(ScreenNames.ADD_NEW_ADDRESS, {item: item});
  };
  const queryParams = {
    page: page,
  };
  console.log('pagenumber', queryParams.page);
  //getaddress api
  const getAddressList = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      const url = `${BASE_URL}${API_END_POINT.GETADDRESSLIST}?page=${queryParams.page}&limit=100`;
      const response = await axiosInstance.get(url);
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

  //delete address api
  const removeAddressFromList = async address_id => {
    console.log('address id', address_id);
    try {
      dispatch(UserAction.setGlobalLoader(true));
      const url = `${BASE_URL}${API_END_POINT.REMOVEADDRESS}${address_id}`;
      const response = await axiosInstance.delete(url);
      console.log('rmeovesssss', response.data);
      if (response.data.success == true) {
        dispatch(UserAction.setGlobalLoader(false));
        const removeAddressData = response.data;
        setRemoveAddress(removeAddressData);
        console.log('remove', removeAddressData);
        getAddressList();
      }
    } catch (error) {
      dispatch(UserAction.setGlobalLoader(false));
      console.log('error remove address Api', error.message);
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
    editAddress,
    removeAddress,
    handleGoBack,
    allAddress,
    loadMoreAddresses,
    loading,
    removeAddressFromList,
  };
};

export default DeliveryAddressHooks;
