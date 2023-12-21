import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import * as UserAction from '../../redux/actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {BASE_URL, ORIGIN, TOKEN} from '../../global/config';
import {useState} from 'react';

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
  const [confirmPassword, setConfirmPassword] = useState('');

  const onPressCancel = () => {
    navigation.navigate(ScreenNames.EDIT_PROFILE_SCREEN);
  };

  // const onPressSave = () => {
  //   // dispatch(UserAction.setAppBar(true));
  //   navigation.navigate(ScreenNames.SUCCESS_SCREEN, {
  //     message: `Password updated\nsuccessfully`,
  //   });
  // };

  //API OF verify-otp-change-password
  console.warn('Your OTP is:', userData);

  const onPressSave = async () => {
    try {
      let url = `${BASE_URL}/auth/api/v1/customer/verify-otp-change-password`;
      const response = await axios.post(
        url,
        {
          otp: otpValue?.join(''),
          oldPassword: currentPassword,
          newPassword: confirmPassword,
        },
        {
          headers: {
            Authorization: TOKEN,
            origin: ORIGIN,
          },
        },
      );
      console.log(response.data);
      if (response.data.success == true) {
        navigation.navigate(ScreenNames.SUCCESS_SCREEN, {
          message: `Password updated\nsuccessfully`,
        });
      }
    } catch (error) {
      console.log('error verify Otp Change Password', error.message);
    }
  };

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

export default ChangePasswordHooks;
