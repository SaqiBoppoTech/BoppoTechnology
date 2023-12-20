import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScreenNames } from '../../global';
import { regex } from '../../global/constant';
import { useDispatch, useSelector } from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import { loginValidation, signUpValidation } from '../../global/validation';
import axios from 'axios';
import { BASE_URL } from '../../global/config';
import axiosInstance from '../../global/api-core';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const openGlobalModal = ({ title }) => {
    dispatch(UserAction.setAlertData(
      {
        alertVisibility: true,
        message: 'Alert',
        description: title,
        leftText: 'OK',
        rightEvent: () => { },
        leftEvent: () => { }
      }
    ))
    dispatch(UserAction.setGlobalLoader(false))
  }
  const resetStackAndGoToBottom = CommonActions.reset({
    index: 0,
    routes: [{ name: ScreenNames.BOTTOM_TAB }],
  });
  const navigateToBottom = async () => {
    try {
      let loginData = {
        "country_code": "+91",
        "contact_no": email,
        "password": password
      }
      if (loginValidation({ email, password, openGlobalModal })) {
        dispatch(UserAction.setGlobalLoader(true))
        const response = await axios.post(`${BASE_URL}/auth/api/v1/customer/login`, loginData)
        if (response?.data?.success) {
          dispatch(UserAction.setUserData(response?.data?.data))
          dispatch(UserAction.setGlobalLoader(false))
          dispatch(UserAction.setLoginWithEmailOrMobileNumber({
            condition: checkLoginWithEmailOrMobileNumber ? true : false,
            text: email,
          }),
          );
          let mobileNumberDataWithToken = {
            accessToken: response?.data?.data?.accessToken,
            contatcNumber: email,
            refreshToken: response?.data?.data?.refreshToken
          }
          await AsyncStorage.setItem("userData", JSON.stringify(mobileNumberDataWithToken))
          axiosInstance.defaults.headers['Authorization'] = response?.data?.data?.accessToken;
          navigation.dispatch(resetStackAndGoToBottom);
        } else {
          dispatch(UserAction.setGlobalLoader(false))
          openGlobalModal({ title: response?.data?.message })
        }
      }
    } catch (error) {
      dispatch(UserAction.setGlobalLoader(false))
      console.log('error', error.message)
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

export { LoginHooks };
