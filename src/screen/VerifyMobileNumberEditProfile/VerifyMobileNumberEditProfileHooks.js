import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import * as UserAction from '../../redux/actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {API_END_POINT, BASE_URL, ORIGIN, TOKEN} from '../../global/config';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import axiosInstance from '../../global/api-core';

const VerifyNumberEditProfileHooks = () => {
  const userData = useSelector(e => e.user?.changeMobileOtpData);
  const userDataToken = useSelector(e => e.user?.changeMobileOtpTokenData);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  //Hooks
  const [otpValue, setOtpValue] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isToastAlertVisible, setToastAlertVisible] = useState(false);
  const [toastAlertText, setToastAlertText] = useState('');

  const onPressCancel = () => {
    navigation.navigate(ScreenNames.EDIT_PROFILE_SCREEN);
  };

  const showToastAlert = text => {
    setToastAlertText(text);
    setToastAlertVisible(true);
  };

  //API OF verify-otp-change-password
  console.log('Your Token is:', userDataToken);
  console.log('Your OTP is:', userData);

  const otpToast = () => {
    showToastAlert(`Your OTP is: ${userData}`);
  };

  //API OF VERIFY OTP CHANGE CONTACT NUMBER
  const onPressSave = async () => {
    try {
      if (otpValue.length < 6) {
        showToastAlert('Enter OTP');
      } else {
        let url = `${API_END_POINT.VERIFY_OTP_CHANGE_CONTACT_NUMBER}`;
        let response = await axiosInstance.post(url, {
          otp: otpValue?.join(''),
          changeContactNoToken: userDataToken,
        });
        if (response.data.success == true) {
          navigation.navigate(ScreenNames.SUCCESS_SCREEN_VERIFY_NUMBER, {
            message: `Number updated\nsuccessfully`,
          });
        }
      }
    } catch (error) {
      console.log('error verify Otp Change Contact Number', error.message);
    }
  };

  useEffect(() => {
    if (userData != null) {
      otpToast();
    } else {
      console.log('OTP IS UNAVAILABLE');
    }
  }, [userData]);

  return {
    handleGoBack,
    onPressCancel,
    onPressSave,
    setOtpValue,
    otpValue,
    currentPassword,
    setCurrentPassword,
    confirmPassword,
    setConfirmPassword,
    toastAlertText,
    isToastAlertVisible,
    setToastAlertVisible,
  };
};

export default VerifyNumberEditProfileHooks;
