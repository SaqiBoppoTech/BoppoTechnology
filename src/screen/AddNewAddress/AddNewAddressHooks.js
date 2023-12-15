import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';

const AddNewAddressHooks = () => {
  const [countryCode, setcountryCode] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [countryId, setCountryId] = useState(0);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [typeOfAddress, setTypeOfAddress] = useState('');
  const [recepientName, setRecepientName] = useState('');
  const [recepientContact, setrecepientContact] = useState('');
  const [setAsDefault, setsetAsDefault] = useState(false);

  const dispatch = useDispatch();

  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const navigateToDeliveryAddress = () => {
    navigation.navigate(ScreenNames.MY_ADDRESSES);
  };

  const saveAddress = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      const url = `https://stage-api.boppogo.com/auth/api/v1/customer/save-address`;
      const response = await axios.post(
        url,
        {
          country_code: '+91',
          address_line1: addressLine1,
          address_line2: 'address line 2',
          city: city,
          province: province,
          zipcode: zipCode,
          country_id: 1,
          latitude: '1234',
          longitude: '2345',
          type: typeOfAddress,
          recepient_name: 'Leo',
          recepient_contact: '1234567890',
          set_as_default: false,
        },

        {
          headers: {
            Authorization: `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVqd2FsLnlhZGF2QGJvcHBvdGVjaG5vbG9naWVzLmNvbSIsImNvbnRhY3Rfbm8iOiI5OTg3Nzc5NDA3IiwidG9rZW5fdHlwZSI6IkFDQ0VTU19UT0tFTiIsImlhdCI6MTcwMjYxNDYzMiwiZXhwIjoxNzAyNzAxMDMyLCJhdWQiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIiwiaXNzIjoiQm9wcG8gR28iLCJzdWIiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIn0.c_n31qVq_pDaZj-41sl1m9O6HePpHKTVsEx1ZGdeV8w5lZ9vTiOLaA3wvrllsyHdfNPSIcvNx6dicoi4gXOVHAXVxXMolF2RxeghLLMqodo9ArSaZ0VQsMDyICWrxWuj6ZcHHHj3u_OaZE4DMfIWdW6wuwKfQVNQWpi3RuZBjqs-ZruaISJII0SxwCo9Y3h1SBoSpbKAmoZ1cnNRpjChlGI377qcLVZ7AOF3XuZeH2souMwQlvl4hNzlO-wWTFQeNZ9MT8GVlEEUVgUyF8XckzA-sOrOTgupKwoSRQGFOyBfffxGyben8OtDmWW_QSQH4H3dsPQxynpMfiX7WApyiQ`,
          },
        },
      );
      if (response.data.success == true) {
        dispatch(UserAction.setGlobalLoader(false));
        navigateToDeliveryAddress();
      }
      console.log('save address', response.data);
    } catch (error) {
      dispatch(UserAction.setGlobalLoader(false));
      console.log('error Save address Api', error.message);
    }
  };

  return {
    saveAddress,
    handleGoBack,
    navigateToDeliveryAddress,
    countryCode,
    setcountryCode,
    addressLine1,
    setAddressLine1,
    addressLine2,
    setAddressLine2,
    city,
    setCity,
    province,
    setProvince,
    zipCode,
    setZipCode,
    countryId,
    setCountryId,
    latitude,
    setLatitude,
    longitude,
    setLongitude,
    typeOfAddress,
    setTypeOfAddress,
    recepientName,
    setRecepientName,
    recepientContact,
    setrecepientContact,
    setAsDefault,
    setsetAsDefault,
  };
};

export default AddNewAddressHooks;
