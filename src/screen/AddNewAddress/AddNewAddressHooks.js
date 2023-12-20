import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import {useRoute} from '@react-navigation/native';
import {BearerToken} from '../../global/config';

const AddNewAddressHooks = () => {
  const [countryCode, setcountryCode] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [countryId, setCountryId] = useState(0);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [typeOfAddress, setTypeOfAddress] = useState('');
  const [recepientName, setRecepientName] = useState('');
  const [recepientContact, setrecepientContact] = useState('');
  const [defaultAddress, setDefaultAddress] = useState(false);

  const dispatch = useDispatch();

  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  console.log(typeOfAddress, 'typeOfAddress');
  const navigateToDeliveryAddress = () => {
    navigation.navigate(ScreenNames.MY_ADDRESSES);
  };

  let route = useRoute();
  console.warn(route?.params?.item);
  let {item} = route?.params;
  let addressId = item?.id;

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
          recepient_name: name,
          recepient_contact: contact,
          set_as_default: false, //defaultAddress,
        },

        {
          headers: {
            Authorization: BearerToken,
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

  const editAddress = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      const url = `https://stage-api.boppogo.com/auth/api/v1/customer/edit-address`;
      const response = await axios.patch(
        url,
        {
          address_id: addressId,
          address_line1: addressLine1,
          address_line2: 'road line way',
          city: city,
          province: province,
          zipcode: zipCode,
          country_id: '1',
          latitude: '',
          longitude: '',
          type: typeOfAddress,
          recepient_name: name,
          recepient_contact: contact,
          set_as_default: false, //defaultAddress,
          country_code: '+91',
        },

        {
          headers: {
            Authorization: `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cmFqLnlhZGF2QGJvcHBvdGVjaG5vbG9naWVzLmNvbSIsImNvbnRhY3Rfbm8iOiI4Nzg3ODc4Nzg3IiwidG9rZW5fdHlwZSI6IkFDQ0VTU19UT0tFTiIsImlhdCI6MTcwMjg3MzQ4MCwiZXhwIjoxNzAyOTU5ODgwLCJhdWQiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIiwiaXNzIjoiQm9wcG8gR28iLCJzdWIiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIn0.CnBBZJHQTfXmgwR7JpMnBduIJIBARX_FkanFQHUUW2z62TtivaeZKo16ANvQAs5_L-SefZBqcalHXu35T95jpAsQiElZZZnCGwEceMXb_M8pWqJVjSo9S4Vw7EWR2mga_AYq996YMjBWt7qKbefQn4Yp1COzZ5AsEmLska-PRN82WhOkUbE_Zd9ze06rZeHlXzPmu4y7kDeMfVw8Mppt91CYA93b9IctvbQoex3cU8sa3ZO4y8Qs_cgCDlH0pQPWqSWOaioTVZ4TuAfHjYcpj4zgAFGCvySfVamRbKsS8-rjFNF9pmmWk9R6s6YtAsnHQ3mOGBw_oTvefKcIiN-18A`,
          },
        },
      );
      if (response.data.success == true) {
        dispatch(UserAction.setGlobalLoader(false));
        navigateToDeliveryAddress();
      }
      console.log('edit address', response.data);
    } catch (error) {
      dispatch(UserAction.setGlobalLoader(false));
      console.log('error edit address Api', error.message);
    }
  };

  useEffect(() => {
    setAddressLine1(item?.address_line1);
    setCity(item?.city);
    setProvince(item?.province);
    setZipCode(item?.zipcode);
    setTypeOfAddress(item?.type);
    setContact(item?.recepient_contact);
    setName(item?.recepient_name);
    setDefaultAddress(item?.is_default == 1 ? true : false);
  }, []);

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
    defaultAddress,
    setDefaultAddress,
    addressId,
    editAddress,
    contact,
    setContact,
    name,
    setName,
  };
};

export default AddNewAddressHooks;
