import { CommonActions, useNavigation } from '@react-navigation/native';
import { Text, View, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import { ScreenNames } from '../../global';
import axios from 'axios';
import { API_END_POINT, BASE_URL } from '../../global/config';
import OTPInput from '../../components/CustomOTPField/CustomOTPField';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../../global/api-core';
const VerifyMobileNumberHooks = () => {
    let loginData = useSelector(e => e?.user?.mobileNumberData)
    console.warn("sadsadsad", loginData?.otp);
    const [otpValue, setOtpValue] = React.useState('')
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
        if (loginData?.otp == otpValue?.join('')) {
            var myHeaders = new Headers();
            myHeaders.append("registersessiontoken", loginData?.registerSessionToken);
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", `Bearer ${loginData?.registerSessionToken}`);
            var raw = JSON.stringify({
                "registersessiontoken": loginData?.registerSessionToken,
                "otp": otpValue?.join('')
            });
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            try {
                const response = await fetch(`${BASE_URL}${API_END_POINT.VERIFY_OTP}`, requestOptions);
                const result = await response.json();
                if (result?.success === true) {
                    dispatch(UserAction.setGlobalLoader(false))
                    dispatch(UserAction.setToastedAlert({
                        condition: true,
                        toastedAlertText: `User register successfully`
                    }))
                    console.warn("==========1111======",result);
                    let mobileNumberDataWithToken = {
                        accessToken: result?.accessToken,
                        contatcNumber: loginData?.mobileNumber,
                        refreshToken: result?.refreshToken
                    }
                    console.warn("=======22222======",mobileNumberDataWithToken);
                    await AsyncStorage.setItem("userData", JSON.stringify(mobileNumberDataWithToken))
                    axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + result?.accessToken;
                    navigation.dispatch(resetStackAndGoToBottom);
                } else {
                    dispatch(UserAction.setGlobalLoader(false))
                    openGlobalModal(result?.message)
                }
            } catch (error) {
                dispatch(UserAction.setGlobalLoader(false))
                console.log('sadsad', error.message)
            }
        } else {
            dispatch(UserAction.setGlobalLoader(false))
            openGlobalModal('Invalid Otp')
        }
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
