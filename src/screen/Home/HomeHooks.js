import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Colors, ScreenNames} from '../../global';
import { useSelector } from 'react-redux';
import axiosInstance from '../../global/api-core';

const HomeHooks = () => {
  console.warn("sdsadsadsa",axiosInstance.defaults.headers);
  const navigation = useNavigation();
  const appData = useSelector(e => e?.user?.globalAppData)
  const handleGoBack = () => {
    navigation.goBack();
  };

  //  VARIABLE
  const [isPopupVisible, setPopupVisible] = React.useState(false);

  // FUNCTION
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const navigateToLocation = () => {
    // navigation.navigate(ScreenNames.YOUR_CART_SCREEN);
  };

  return {
    isPopupVisible,
    setPopupVisible,
    togglePopup,
    navigateToLocation,
    appData
  };
};
export {HomeHooks};
