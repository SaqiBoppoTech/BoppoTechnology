import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {ScreenNames} from '../../global';
import {useDispatch, useSelector} from 'react-redux';
import {BASE_URL, ORIGIN} from '../../global/config';
import * as UserAction from '../../redux/actions/userActions';
import {passwordValidation} from '../../global/validation';

const ForgetPasswordHooks = () => {
  // VARIABLR
  let route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  let sendToData = route?.params?.sendTo;
  let loginData = useSelector(e => e?.user?.mobileNumberData);
  // HOOKS
  const [otpValue, setOtpValue] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [retryPassword, setRetryPassword] = React.useState('');

  // FUNCTION
  const openGlobalModal = ({title}) => {
    dispatch(
      UserAction.setAlertData({
        alertVisibility: true,
        message: 'Alert',
        description: title,
        leftText: 'OK',
        rightEvent: () => {},
        leftEvent: () => {},
      }),
    );
    dispatch(UserAction.setGlobalLoader(false));
  };
  const navigateToSuccess = async () => {
    if (loginData?.otp == otpValue?.join('')) {
      var myHeaders = new Headers();
      myHeaders.append('registersessiontoken', loginData?.registerSessionToken);
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append(
        'Authorization',
        `Bearer ${loginData?.registerSessionToken}`,
      );
      var raw = JSON.stringify({
        registersessiontoken: loginData?.registerSessionToken,
        otp: otpValue?.join(''),
        newPassword: password,
      });
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };
      try {
        if (passwordValidation({password, retryPassword, openGlobalModal})) {
          const response = await fetch(
            `${BASE_URL}/auth/api/v1/customer/forget-password-verify-otp`,
            requestOptions,
            {headers: {origin: ORIGIN}},
          );
          const result = await response.json();
          if (result?.success === true) {
            dispatch(UserAction.setGlobalLoader(false));
            navigation.navigate(ScreenNames.SUCCESS_SCREEN, {
              message: `Password updated ${'\n'}successfully`,
            });
          } else {
            dispatch(UserAction.setGlobalLoader(false));
            openGlobalModal(result?.message);
          }
        }
      } catch (error) {
        dispatch(UserAction.setGlobalLoader(false));
        console.log('sadsad', error.message);
      }
    } else {
      dispatch(UserAction.setGlobalLoader(false));
      openGlobalModal('Invalid Otp');
    }
  };
  // const navigateToSuccess = () => {
  //     navigation.navigate(ScreenNames.SUCCESS_SCREEN, { message: `Password updated ${'\n'}successfully`});
  // }
  return {
    sendToData,
    password,
    setPassword,
    retryPassword,
    setRetryPassword,
    navigateToSuccess,
    setOtpValue,
    loginData,
  };
};
export {ForgetPasswordHooks};
