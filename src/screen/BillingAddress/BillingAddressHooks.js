import React, {useState, useEffect} from 'react';
import {ScreenNames} from '../../global';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import axios from 'axios';

const BillingAddressHooks = () => {
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

  const editAddress = () => {
    navigation.navigate(ScreenNames.ADD_NEW_ADDRESS);
  };
  const queryParams = {
    page: page,
  };
  console.log('pagenumber', queryParams.page);
  const getAddressList = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      const url = `https://stage-api.boppogo.com/auth/api/v1/customer/get-address-list?page=${queryParams.page}&limit=100`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cmFqLnlhZGF2QGJvcHBvdGVjaG5vbG9naWVzLmNvbSIsImNvbnRhY3Rfbm8iOiI4Nzg3ODc4Nzg3IiwidG9rZW5fdHlwZSI6IkFDQ0VTU19UT0tFTiIsImlhdCI6MTcwMjg3MzQ4MCwiZXhwIjoxNzAyOTU5ODgwLCJhdWQiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIiwiaXNzIjoiQm9wcG8gR28iLCJzdWIiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIn0.CnBBZJHQTfXmgwR7JpMnBduIJIBARX_FkanFQHUUW2z62TtivaeZKo16ANvQAs5_L-SefZBqcalHXu35T95jpAsQiElZZZnCGwEceMXb_M8pWqJVjSo9S4Vw7EWR2mga_AYq996YMjBWt7qKbefQn4Yp1COzZ5AsEmLska-PRN82WhOkUbE_Zd9ze06rZeHlXzPmu4y7kDeMfVw8Mppt91CYA93b9IctvbQoex3cU8sa3ZO4y8Qs_cgCDlH0pQPWqSWOaioTVZ4TuAfHjYcpj4zgAFGCvySfVamRbKsS8-rjFNF9pmmWk9R6s6YtAsnHQ3mOGBw_oTvefKcIiN-18A`,
        },
      });
      if (response.data.success == true) {
        dispatch(UserAction.setGlobalLoader(false));
        const addressList = response.data.data.addressList;
        // console.log('count', response.data.data.count);
        // console.log('totalPage', response.data.data.totalPages);
        // console.log('length', addressList.length);
        // console.log('page', page);
        // setAllAddress(prevAddresses => [...prevAddresses, ...addressList]);
        setAllAddress(addressList);
        setHasMore(addressList.length === 10);
        // setPage(prevPage => prevPage + 1);
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
      const url = `https://stage-api.boppogo.com/auth/api/v1/customer/remove-address/${address_id}`;
      const response = await axios.delete(url, {
        headers: {
          Authorization: `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cmFqLnlhZGF2QGJvcHBvdGVjaG5vbG9naWVzLmNvbSIsImNvbnRhY3Rfbm8iOiI4Nzg3ODc4Nzg3IiwidG9rZW5fdHlwZSI6IkFDQ0VTU19UT0tFTiIsImlhdCI6MTcwMjg3MzQ4MCwiZXhwIjoxNzAyOTU5ODgwLCJhdWQiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIiwiaXNzIjoiQm9wcG8gR28iLCJzdWIiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIn0.CnBBZJHQTfXmgwR7JpMnBduIJIBARX_FkanFQHUUW2z62TtivaeZKo16ANvQAs5_L-SefZBqcalHXu35T95jpAsQiElZZZnCGwEceMXb_M8pWqJVjSo9S4Vw7EWR2mga_AYq996YMjBWt7qKbefQn4Yp1COzZ5AsEmLska-PRN82WhOkUbE_Zd9ze06rZeHlXzPmu4y7kDeMfVw8Mppt91CYA93b9IctvbQoex3cU8sa3ZO4y8Qs_cgCDlH0pQPWqSWOaioTVZ4TuAfHjYcpj4zgAFGCvySfVamRbKsS8-rjFNF9pmmWk9R6s6YtAsnHQ3mOGBw_oTvefKcIiN-18A`,
        },
      });
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

export default BillingAddressHooks;
