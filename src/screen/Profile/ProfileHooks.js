import {CommonActions, useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {TOKEN} from '../../global/config';
import {useDispatch} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';

const ProfileHooks = () => {
  // VARIABLE
  const navigation = useNavigation();
  const dispatch = useDispatch();
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
    index: 0,
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
      let url = `https://stage-api.boppogo.com/auth/api/v1/customer/profile`;
      const response = await axios.get(url, {
        headers: {
          Authorization: TOKEN,
        },
      });
      setProfile(response.data.data.customerDetails);
    } catch (error) {
      console.log('error getProfile', error.message);
    }
  };

  ///API OF LOGOUT
  const getUserLogout = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append(
        'authorization',
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVqd2FsLnlhZGF2QGJvcHBvdGVjaG5vbG9naWVzLmNvbSIsImNvbnRhY3Rfbm8iOiI5OTg3Nzc5NDA3IiwidG9rZW5fdHlwZSI6IkFDQ0VTU19UT0tFTiIsImlhdCI6MTcwMjg4MTE0NCwiZXhwIjoxNzAyOTY3NTQ0LCJhdWQiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIiwiaXNzIjoiQm9wcG8gR28iLCJzdWIiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIn0.Wa8rFkjP91r1cvI8HPHv7R9Pi4LdsOuV1KHUO2WbGYCCYkNDtx_DXfB-Ig6bSYY3mIaR9FU5V9wPtsRAyPT6H-qYNSJyN-abwIgUzGlgSLxGdV2Ng5fUB-tHkNFKsemEc3dAMzdg6FbKiWzrqvUZutlCertouefFS60OOuVQH22WWXExUr6ZJV-wkL4rwpyad1YF5Ge2uA8hlV-W6Mz2Zp-ZAHKkVqzlTaNsAt0xIHrvn_MgYqt8J9HKcnC6QHtd5JXwrUIdnwjPSajE5Jz4ydEdj7qBVnCzlrK26PWW5gVSFklEh-YVvKDjhIk6nX3fdX1tuB8W4xqFnRijhz3FRQ',
      );
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
      };

      const response = await fetch(
        `https://stage-api.boppogo.com/auth/api/v1/customer/logout`,
        requestOptions,
      );
      const result = await response.json();
      console.log(result);
      if (result.success == true) {
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
