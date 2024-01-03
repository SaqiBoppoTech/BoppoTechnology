import {CommonActions, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScreenNames} from '../../global';
import {regex} from '../../global/constant';
import {useDispatch, useSelector} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import {loginValidation, signUpValidation} from '../../global/validation';
import axios from 'axios';
import {BASE_URL, ORIGIN} from '../../global/config';

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
    navigation.navigate(ScreenNames.FORGET_PASSWORD_SCREEN);
  };
  const openGlobalModal = ({title}) => {
    dispatch(
      UserAction.setAlertData({
        alertVisibility: true,
        message: 'Alert',
        description: title,
        leftText: 'OK',
        rightEvent: () => {},
        leftEvent: () => {},
      }),
    );
    dispatch(UserAction.setGlobalLoader(false));
  };
  const resetStackAndGoToBottom = CommonActions.reset({
    index: 0,
    routes: [{name: ScreenNames.BOTTOM_TAB}],
  });

  ///API OF LOGIN
  const navigateToBottom = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('origin', ORIGIN);
      myHeaders.append('Content-Type', 'application/json');

      const body = JSON.stringify({
        country_code: '+91',
        contact_no: email,
        password: password,
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: body,
        redirect: 'follow',
      };
      if (loginValidation({email, password, openGlobalModal})) {
        dispatch(UserAction.setGlobalLoader(true));
        const response = await fetch(
          `${BASE_URL}/auth/api/v1/customer/login`,
          requestOptions
        );
        const result = await response.json();
        if (result.success) {
          dispatch(UserAction.setUserData(result.data));
          dispatch(UserAction.setGlobalLoader(false));
          dispatch(UserAction.setLogoutToken(result.data.accessToken));
          dispatch(
            UserAction.setLoginWithEmailOrMobileNumber({
              condition: checkLoginWithEmailOrMobileNumber ? true : false,
              text: email,
            }),
          );
          navigation.dispatch(resetStackAndGoToBottom);
        } else {
          dispatch(UserAction.setGlobalLoader(false));
          openGlobalModal({title: result.message});
        }
      }
    } catch (error) {
      dispatch(UserAction.setGlobalLoader(false));
      console.log('error', error.message);
    }
  };
  const navigateToCreateAccount = () => {
    navigation.navigate(ScreenNames.CREATE_NEW_ACCOUNT);
  };
  const handleLogin = () => {
    const validationErrors = {};
    if (!email.match(regex.email)) {
      validationErrors.email = 'Enter valid email address';
    }
    // if (!password.match(regex.password)) {
    //   validationErrors.password =
    //     'Password must be at least 8 characters long and contain letters and numbers.';
    // }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(
        UserAction.setLoginWithEmailOrMobileNumber({
          condition: checkLoginWithEmailOrMobileNumber ? true : false,
          text: email,
        }),
      );
      navigation.navigate(ScreenNames.MOBILE_OTP_SCREEN);
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
