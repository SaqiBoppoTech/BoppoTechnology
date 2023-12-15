import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import * as UserAction from '../../redux/actions/userActions'
import { ScreenNames } from "../../global";
import React from "react";
import { regex } from "../../global/constant";
import { Alert } from "react-native";
import { emailAndMobileNumberValidation, loginValidation } from "../../global/validation";
import axios from "axios";
import { BASE_URL } from "../../global/config";
const ForgetPasswordHooks = () => {
    // VARIBLE
    const dispatch = useDispatch()
    const userData = useSelector(e => e.user?.toastedAlert)
    const navigation = useNavigation()
    // HOOKS
    const [emailAndPhoneNumber, setEmailAndPhoneNumber] = React.useState('')
    let checkThisIsMobileNumber = regex.analyisStartingFirst.test(emailAndPhoneNumber)
    let checkLengthOfInput = emailAndPhoneNumber.length > 0

    // FUNTION
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
    const navigationToForgotPasswordOtp = async () => {
        try {
            let forgotPasswordData = {
                "country_code": "+91",
                "contact_no": emailAndPhoneNumber,
            }
            let checkRegex = checkThisIsMobileNumber ? regex.mobileNumber.test(emailAndPhoneNumber) : regex.email.test(emailAndPhoneNumber)
            if (checkRegex) {
                const response = await axios.post(`${BASE_URL}/auth/api/v1/customer/forget-password`, forgotPasswordData)
               console.warn("Asdsad",response.data);
                if (response?.data?.success) {
                    let a = {
                        country_code: '+91',
                        mobileNumber: emailAndPhoneNumber,
                        email: emailAndPhoneNumber,
                        registerSessionToken: response?.data?.data?.registerSessionToken,
                        otp: response?.data?.data?.otp,
                        firstname: '',
                        lastname: '',
                        password: '',
                    }
                    dispatch(UserAction.setMobileNumberData(a))
                    dispatch(UserAction.setToastedAlert({
                        condition: true,
                        toastedAlertText: `OTP has been send to\n${checkThisIsMobileNumber ? '+' : ''}${emailAndPhoneNumber}`
                    }))
                    navigation.navigate(ScreenNames.FORGET_PASSWORD_OTP_SCREEN, { sendTo: emailAndPhoneNumber });
                } else {
                    dispatch(UserAction.setGlobalLoader(false))
                    openGlobalModal({ title: response?.data?.message })
                }
            } else {
                dispatch(UserAction.setGlobalLoader(false))
                openGlobalModal({ title: 'InValid Format' })
            }
        } catch (error) {
            dispatch(UserAction.setGlobalLoader(false))
            console.log('error', error.response.data)
        }
    };
    // const navigationToForgotPasswordOtp = () => {
    //     let checkRegex = checkThisIsMobileNumber ? regex.mobileNumber.test(emailAndPhoneNumber) : regex.email.test(emailAndPhoneNumber)
    //     if (checkRegex) {
    //         navigation.navigate(ScreenNames.FORGET_PASSWORD_OTP_SCREEN, { sendTo: emailAndPhoneNumber });
    //         dispatch(UserAction.setToastedAlert({
    //             condition: true,
    //             toastedAlertText: `OTP has been send to\n${checkThisIsMobileNumber ? '+' : ''}${emailAndPhoneNumber}`
    //         }))
    //     } else {
    //         Alert.alert('Alert', 'In Valid')
    //     }
    // }


    return { navigationToForgotPasswordOtp, emailAndPhoneNumber, setEmailAndPhoneNumber, checkThisIsMobileNumber, checkLengthOfInput }
}
export { ForgetPasswordHooks }