import React, {useState, useEffect} from 'react';
import {ScreenNames} from '../../global';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import axios from 'axios';

const DeliveryAddressHooks = () => {
  const [allAddress, setAllAddress] = useState(null);

  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const dispatch = useDispatch();

  const removeAddress = () => {};
  const editAddress = () => {
    navigation.navigate(ScreenNames.ADD_NEW_ADDRESS);
  };

  const getAddressList = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      const url = `https://stage-api.boppogo.com/auth/api/v1/customer/get-address-list`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVqd2FsLnlhZGF2QGJvcHBvdGVjaG5vbG9naWVzLmNvbSIsImNvbnRhY3Rfbm8iOiI5OTg3Nzc5NDA3IiwidG9rZW5fdHlwZSI6IkFDQ0VTU19UT0tFTiIsImlhdCI6MTcwMjYxNDYzMiwiZXhwIjoxNzAyNzAxMDMyLCJhdWQiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIiwiaXNzIjoiQm9wcG8gR28iLCJzdWIiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIn0.c_n31qVq_pDaZj-41sl1m9O6HePpHKTVsEx1ZGdeV8w5lZ9vTiOLaA3wvrllsyHdfNPSIcvNx6dicoi4gXOVHAXVxXMolF2RxeghLLMqodo9ArSaZ0VQsMDyICWrxWuj6ZcHHHj3u_OaZE4DMfIWdW6wuwKfQVNQWpi3RuZBjqs-ZruaISJII0SxwCo9Y3h1SBoSpbKAmoZ1cnNRpjChlGI377qcLVZ7AOF3XuZeH2souMwQlvl4hNzlO-wWTFQeNZ9MT8GVlEEUVgUyF8XckzA-sOrOTgupKwoSRQGFOyBfffxGyben8OtDmWW_QSQH4H3dsPQxynpMfiX7WApyiQ`,
        },
      });
      if (response.data.success == true) {
        dispatch(UserAction.setGlobalLoader(false));
        setAllAddress(response.data.data.addressList);
      }
      console.log('count', response.data.data.count);
      console.log('totalpages', response.data.data.totalPages);
    } catch (error) {
      dispatch(UserAction.setGlobalLoader(false));
      console.log('error Save address Api', error.message);
    }
  };

  useEffect(() => {
    getAddressList();
  }, []);

  return {
    editAddress,
    removeAddress,
    handleGoBack,
    allAddress,
  };
};

export default DeliveryAddressHooks;
