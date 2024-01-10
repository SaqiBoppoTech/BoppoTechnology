import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import {useDispatch} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import {useRoute} from '@react-navigation/native';
import {BASE_URL, API_END_POINT} from '../../global/config';
import axiosInstance from '../../global/api-core';

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
  let {item} = route?.params;
  let addressId = item?.id;
  const saveAddress = async () => {
    console.log(
      'defaultAddresssssssssssssssssssssssssssssssssssssssss',
      defaultAddress,
    );

    try {
      dispatch(UserAction.setGlobalLoader(true));
      let url = `${BASE_URL}${API_END_POINT.SAVEADDRESS}`;
      const response = await axiosInstance.post(url, {
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
        set_as_default: defaultAddress, //defaultAddress,
      });
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

      let url = `${BASE_URL}${API_END_POINT.EDITADDRESS}`;
      const response = await axiosInstance.patch(url, {
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
      });
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
    console.log('type of address', item?.type);
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
