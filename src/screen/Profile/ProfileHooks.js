import {CommonActions, useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {BASE_URL, ORIGIN, TOKEN} from '../../global/config';
import {useDispatch, useSelector} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';

const ProfileHooks = () => {
  // VARIABLE
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userData = useSelector(e => e.user?.logoutToken);
  console.log(`Access Token For LogOut Is : ${userData}`);
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
      let url = `${BASE_URL}/auth/api/v1/customer/profile`;
      const response = await axios.get(url, {
        headers: {
          Authorization: TOKEN,
          origin: ORIGIN,
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
      myHeaders.append('authorization', userData);
      myHeaders.append('origin', ORIGIN);
      myHeaders.append('Content-Type', 'application/json');

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
      };

      const response = await fetch(
        `${BASE_URL}/auth/api/v1/customer/logout`,
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
