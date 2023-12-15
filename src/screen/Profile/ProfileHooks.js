import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProfileHooks = () => {
  // VARIABLE
  const navigation = useNavigation();

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

    ///API CODE GETPROFILE
    const [profile, setProfile] = useState(null);

    const getProfileData = async () => {
      try {
        let url = `https://stage-api.boppogo.com/auth/api/v1/customer/profile`;
        const response = await axios.get(url, {
          headers: {
            Authorization: `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVqd2FsLnlhZGF2QGJvcHBvdGVjaG5vbG9naWVzLmNvbSIsImNvbnRhY3Rfbm8iOiI5OTg3Nzc5NDA3IiwidG9rZW5fdHlwZSI6IkFDQ0VTU19UT0tFTiIsImlhdCI6MTcwMjYxNDYzMiwiZXhwIjoxNzAyNzAxMDMyLCJhdWQiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIiwiaXNzIjoiQm9wcG8gR28iLCJzdWIiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIn0.c_n31qVq_pDaZj-41sl1m9O6HePpHKTVsEx1ZGdeV8w5lZ9vTiOLaA3wvrllsyHdfNPSIcvNx6dicoi4gXOVHAXVxXMolF2RxeghLLMqodo9ArSaZ0VQsMDyICWrxWuj6ZcHHHj3u_OaZE4DMfIWdW6wuwKfQVNQWpi3RuZBjqs-ZruaISJII0SxwCo9Y3h1SBoSpbKAmoZ1cnNRpjChlGI377qcLVZ7AOF3XuZeH2souMwQlvl4hNzlO-wWTFQeNZ9MT8GVlEEUVgUyF8XckzA-sOrOTgupKwoSRQGFOyBfffxGyben8OtDmWW_QSQH4H3dsPQxynpMfiX7WApyiQ`,
          },
        });
        setProfile(response.data.data.customerDetails);
      } catch (error) {
        console.log('error getProfile', error.message);
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
    profile
  };
};

export {ProfileHooks};
