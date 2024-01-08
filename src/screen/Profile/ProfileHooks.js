import {CommonActions, useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {API_END_POINT, BASE_URL, ORIGIN, TOKEN} from '../../global/config';
import {useDispatch, useSelector} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import axiosInstance from '../../global/api-core';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileHooks = () => {
  // VARIABLE
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userData = useSelector(e => e.user?.logoutToken);
  // HOOKS

  // FUNCTION
  const navigateToMyAddress = () => {
    navigation.navigate(ScreenNames.MY_ADDRESSES);
  };
  const navigateToCurrency = () => {
    navigation.navigate(ScreenNames.CURRENCY_SCREEN);
  };
  const navigateToNotificationSetting = () => {
    navigation.navigate(ScreenNames.NOTIFICATION_SCREEN);
  };
  const navigateToSellWithUs = () => {
    navigation.navigate(ScreenNames.SELL_WITH_US_SCREEN);
  };
  const navigateToMyQuestionAnswer = () => {
    navigation.navigate(ScreenNames.MY_QUESTION_ANSWER_SCREEN);
  };
  const navigateToMyReview = () => {
    navigation.navigate(ScreenNames.MY_REVIEW_SCREEN);
  };
  const navigateToPrivacyPolicy = () => {
    navigation.navigate(ScreenNames.PRIVACY_POLICY_SCREEN);
  };
  const navigateToTermsAndCondition = () => {
    navigation.navigate(ScreenNames.TERMS_AND_CONDITION_SCREEN);
  };
  const navigateToContactUs = () => {
    navigation.navigate(ScreenNames.CONTACT_US_SCREEN);
  };
  const navigateToRefundPolicy = () => {
    navigation.navigate(ScreenNames.REFUND_POLICY_SCREEN);
  };
  const navigateToShippingPolicy = () => {
    navigation.navigate(ScreenNames.SHIPPING_POLICY_SCREEN);
  };

  const gotoLogin = CommonActions.reset({
    routes: [{name: ScreenNames.LOGIN_SCREEN}],
  });

  const navigateToLogin = () => {
    getUserLogout();
  };

  ///API CODE GETPROFILE
  const [profile, setProfile] = useState(null);

  const openGlobalModal = ({title, leftEvent}) => {
    dispatch(
      UserAction.setAlertData({
        alertVisibility: true,
        message: 'LogOut',
        description: title,
        leftText: 'OK',
        rightText: 'Cancel',
        rightEvent: () => {},
        leftEvent: () => {},
      }),
    );
    dispatch(UserAction.setGlobalLoader(false));
  };

  ///API OF GET PROFILE
  const getProfileData = async () => {
    try {
      let url = `${API_END_POINT.PROFILE}`;
      let response = await axiosInstance.get(url);
      if (response.data.success == true) {
        setProfile(response.data.data.customerDetails);
      }
    } catch (error) {
      console.log('error getProfile', error.message);
    }
  };

  ///API OF LOGOUT
  const getUserLogout = async () => {
    try {
      let url = `${API_END_POINT.LOGOUT}`;
      let response = await axiosInstance.post(url)
      console.log(response.data);
      if (response.data.success == true) {
        await AsyncStorage.clear()
        navigation.dispatch(gotoLogin);
      }
    } catch (error) {
      console.log('error getUserLogOut', error.response.data);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return {
    navigateToMyAddress,
    navigateToCurrency,
    navigateToNotificationSetting,
    navigateToSellWithUs,
    navigateToMyReview,
    navigateToMyQuestionAnswer,
    navigateToPrivacyPolicy,
    navigateToTermsAndCondition,
    navigateToContactUs,
    navigateToRefundPolicy,
    navigateToShippingPolicy,
    profile,
    navigateToLogin,
  };
};

export {ProfileHooks};
