import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScreenNames} from '../../global';
import {regex} from '../../global/constant';
import {useDispatch} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';

const LoginHooks = () => {
  // VARIABLE
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // HOOKS
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  let checkLoginWithEmailOrMobileNumber =
    regex.analyisStartingFirst.test(email);

  // FUNCTION
  const navigateToForgotPassword = () => {
    // navigation.navigate(ScreenNames.FORGET_PASSWORD_SCREEN);
    navigation.navigate(ScreenNames.PAYMENT_SCREEN);
  };
  const navigateToBottom = () => {
    if (email) {
      dispatch(
        UserAction.setLoginWithEmailOrMobileNumber({
          condition: checkLoginWithEmailOrMobileNumber ? true : false,
          text: email,
        }),
      );
      navigation.navigate(ScreenNames.MOBILE_OTP_SCREEN);
    }
  };
  const navigateToCreateAccount = () => {
    navigation.navigate(ScreenNames.CREATE_NEW_ACCOUNT);
  };
  const handleLogin = () => {
    const validationErrors = {};
    if (!email.match(regex.email)) {
      validationErrors.email = 'Invalid email address';
    }
    if (!password.match(regex.password)) {
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
    checkLoginWithEmailOrMobileNumber,
  };
};

export {LoginHooks};
