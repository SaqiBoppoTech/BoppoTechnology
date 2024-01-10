import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import * as UserAction from '../../redux/actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {API_END_POINT, BASE_URL, ORIGIN, TOKEN} from '../../global/config';
import {useEffect, useState} from 'react';
import GlobalAlert from '../../components/GlobalAlert/GlobalAlert';
import GlobalLoader from '../../components/GlobalLoader/GlobalLoader';
import {Alert} from 'react-native';
import axiosInstance from '../../global/api-core';

const ChangePasswordHooks = () => {
  const userData = useSelector(e => e.user?.changePasswordData);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  //Hooks
  const [otpValue, setOtpValue] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isToastAlertVisible, setToastAlertVisible] = useState(false);
  const [toastAlertText, setToastAlertText] = useState('');

  const showToastAlert = text => {
    setToastAlertText(text);
    setToastAlertVisible(true);
  };

  const onPressCancel = () => {
    navigation.navigate(ScreenNames.EDIT_PROFILE_SCREEN);
  };
  console.log('Your OTP is:', userData);

  const otpToast = () => {
    showToastAlert(`Your OTP is: ${userData}`);
  };

  const onPressSave = async () => {
    try {
      if (otpValue?.join('') == '') {
        showToastAlert('Enter OTP');
      } else if (currentPassword == '') {
        showToastAlert('Enter Current Password');
      } else if (newPassword == '') {
        showToastAlert('Enter New Password');
      } else if (confirmPassword == '') {
        showToastAlert('Enter Confirm Password');
      } else {
        let url = `${API_END_POINT.VERIFY_OTP_CHANGE_PASSWORD}`;
        let response = await axiosInstance.post(url, {
          otp: otpValue?.join(''),
          oldPassword: currentPassword,
          newPassword: confirmPassword,
        });
        if (response.data.success == true) {
          navigation.navigate(ScreenNames.SUCCESS_SCREEN, {
            message: 'Password updated successfully',
          });
        }
      }
    } catch (error) {
      console.log('error verify Otp Change Password', error.message);
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
    newPassword,
    setNewPassword,
    isToastAlertVisible,
    showToastAlert,
    toastAlertText,
    setToastAlertVisible,
  };
};

export default ChangePasswordHooks;
