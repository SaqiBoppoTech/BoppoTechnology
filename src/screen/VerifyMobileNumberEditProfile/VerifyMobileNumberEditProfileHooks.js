import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import * as UserAction from '../../redux/actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {BASE_URL, TOKEN} from '../../global/config';
import {useState} from 'react';
import { styles } from './VerifyMobileNumberEditProfileStyles';

const VerifyNumberEditProfileHooks = () => {
  const userData = useSelector(e => e.user?.changePasswordData);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  //Hooks
  const [otpValue, setOtpValue] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onPressCancel = () => {
    navigation.navigate(ScreenNames.EDIT_PROFILE_SCREEN);
  };

  const onPressSave = () => {
    // dispatch(UserAction.setAppBar(true));
    navigation.navigate(ScreenNames.SUCCESS_SCREEN_VERIFY_NUMBER, {
      message: `Number updated\nsuccessfully`,
    });
  };

  //API OF verify-otp-change-password
  console.warn('Your OTP is:', userData);

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
  };
};

export default VerifyNumberEditProfileHooks;
