import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScreenNames} from '../../global';

const LoginHooks = () => {
  // VARIABLE
  const navigation = useNavigation();
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  // HOOKS
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // FUNCTION
  const navigateToForgotPassword = () => {
    navigation.navigate(ScreenNames.FORGET_PASSWORD_SCREEN);
  };
  const navigateToBottom = () => {
    navigation.navigate(ScreenNames.BOTTOM_TAB);
  };
  const navigateToCreateAccount = () => {
    navigation.navigate(ScreenNames.CREATE_NEW_ACCOUNT);
  };
  const handleLogin = () => {
    const validationErrors = {};
    if (!email.match(emailRegex)) {
      validationErrors.email = 'Invalid email address';
    }
    if (!password.match(passwordRegex)) {
      validationErrors.password =
        'Password must be at least 8 characters long and contain letters and numbers.';
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      navigation.navigate('Tabs');
    }
  };
  return {
    handleLogin,
    setEmail,
    setPassword,
    setErrors,
    errors,
    email,
    password,
    navigation,
    navigateToForgotPassword,
    navigateToBottom,
    navigateToCreateAccount,
  };
};

export {LoginHooks};
