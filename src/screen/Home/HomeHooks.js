import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';

const HomeHooks = () => {
  const navigation = useNavigation();
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
    navigation.navigate(ScreenNames.YOUR_CART_SCREEN);
  };

  return {
    isPopupVisible,
    setPopupVisible,
    togglePopup,
    navigateToLocation,
  };
};
export {HomeHooks};
