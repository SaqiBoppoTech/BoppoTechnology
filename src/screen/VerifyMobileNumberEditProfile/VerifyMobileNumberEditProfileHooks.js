import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import * as UserAction from '../../redux/actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {BASE_URL, ORIGIN, TOKEN} from '../../global/config';
import {useState} from 'react';

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

  const onPressCancel = () => {
    navigation.navigate(ScreenNames.EDIT_PROFILE_SCREEN);
  };

  //API OF verify-otp-change-password
  console.warn('Your OTP is:', userData);
  console.warn('Your Token is:', userDataToken);

  //API OF VERIFY OTP CHANGE CONTACT NUMBER
  const onPressSave = async () => {
    try {
      let url = `${BASE_URL}/auth/api/v1/customer/verify-otp-change-contact-no`;
      const response = await axios.post(
        url,
        {
          otp: userData,
          changeContactNoToken: userDataToken,
        },
        {
          headers: {
            Authorization: TOKEN,
            origin: ORIGIN,
          },
        },
      );
      if (response.data.success == true) {
        navigation.navigate(ScreenNames.SUCCESS_SCREEN_VERIFY_NUMBER, {
          message: `Number updated\nsuccessfully`,
        });
      }
    } catch (error) {
      console.log('error verify Otp Change Contact Number', error.message);
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

export default VerifyNumberEditProfileHooks;