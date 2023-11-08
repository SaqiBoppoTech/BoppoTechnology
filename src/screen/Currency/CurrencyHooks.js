import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScreenNames} from '../../global';

const CurrencyHooks = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const navigateToProfile = () => {
    navigation.navigate(ScreenNames.PROFILE_SCREEN);
  };
  const [selectedRadio, setSelectedRadio] = useState(1);

  return {
    handleGoBack,
    selectedRadio,
    setSelectedRadio,
    navigateToProfile,
  };
};

export default CurrencyHooks;
