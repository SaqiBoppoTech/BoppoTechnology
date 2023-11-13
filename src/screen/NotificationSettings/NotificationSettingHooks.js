import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import React, {useState} from 'react';

const NotificationSettingHooks = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return {
    handleGoBack,
    isOn,
    setIsOn,
    toggleSwitch,
  };
};

export default NotificationSettingHooks;
