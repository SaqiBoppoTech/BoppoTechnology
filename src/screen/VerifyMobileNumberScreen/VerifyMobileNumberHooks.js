import { CommonActions, useNavigation } from '@react-navigation/native';
import { Text, View, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import { ScreenNames } from '../../global';
import axios from 'axios';
import { API_END_POINT, BASE_URL } from '../../global/config';
import OTPInput from '../../components/CustomOTPField/CustomOTPField';
import React from 'react';
const VerifyMobileNumberHooks = () => {
    let loginData = useSelector(e => e?.user?.mobileNumberData)
    const [otpValue, setOtpValue] = React.useState('')
    // console.warn("====>>",otpValue.join(''));
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const checkLoginWithEmailOrMobileNumber = useSelector(e => e.user?.loginWith)
    const resetStackAndGoToBottom = CommonActions.reset({
        index: 0,
        routes: [{ name: ScreenNames.LOGIN_SCREEN }],
    });
    const goBackToLogin = (quantity, showAlert) => {
        showAlert && invokeToastAlert()
        navigation.navigate(ScreenNames.LOGIN_SCREEN)
    }
    const invokeToastAlert = () => {
        dispatch(UserAction.setToastedAlert({
            condition: true,
            toastedAlertText: `You are successfully registered.${'\n'}PLease Login here to contibue`
        }))
    }
    const openGlobalModal = ({ title }) => {
        dispatch(UserAction.setAlertData(
            {
                alertVisibility: true,
                message: 'Alert',
                description: title,
                leftText: 'OK',
                rightEvent: () => { },
                leftEvent: () => { }
            }
        ))
        dispatch(UserAction.setGlobalLoader(false))
    }
    const getVerifyOtp = async () => {
        try {
            const otpData = { otp: otpValue?.join('') };
            const response = await fetch(`${BASE_URL}${API_END_POINT.VERIFY_OTP}`, {
              method: 'POST',
              body: JSON.stringify(otpData),
              headers: {
                'Content-Type': 'application/json',
              },
            });
            const data = await response.json();
            console.warn("asdasdsad",data);
          } catch (error) {
            console.error('Error:', error);
          }
        // try {
        //     if (loginData?.otp == otpValue?.join('')) {
        //         dispatch(UserAction.setGlobalLoader(true))
        //         let otpData = { "otp": otpValue?.join('') }
        //         const response = await axios.post(`${BASE_URL}${API_END_POINT.VERIFY_OTP}`, otpData, {
        //             headers: {
        //                 Authorization: `Bearer ${loginData?.registerSessionToken}`
        //             }
        //         })
        //         if (response?.data?.success == true) {
        //             dispatch(UserAction.setGlobalLoader(false))
        //             navigation.dispatch(resetStackAndGoToBottom);
        //         }
        //     } else {
        //         dispatch(UserAction.setGlobalLoader(false))
        //         openGlobalModal('Invalid Otp')
        //     }
        // } catch (error) {
        //     console.log('getVerifyOtp', error.message)
        //     dispatch(UserAction.setGlobalLoader(false))
        // }
    }
    const navigateToHomePage = () => {
        navigation.navigate(ScreenNames.BOTTOM_TAB)
    }
    React.useEffect(() => {
        if (loginData?.otp) {
            openGlobalModal({ title: `Your Otp for registeration is \n${loginData?.otp}` })
        }
    }, [])
    return {
        goBackToLogin,
        invokeToastAlert,
        checkLoginWithEmailOrMobileNumber,
        navigateToHomePage,
        getVerifyOtp,
        setOtpValue
    }
}
export { VerifyMobileNumberHooks }
