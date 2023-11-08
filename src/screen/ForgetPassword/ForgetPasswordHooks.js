import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import * as UserAction from '../../redux/actions/userActions'
import { ScreenNames } from "../../global";
import React from "react";
import { regex } from "../../global/constant";
import { Alert } from "react-native";
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
    const navigationToForgotPasswordOtp = () => {
        let checkRegex = checkThisIsMobileNumber ? regex.mobileNumber.test(emailAndPhoneNumber) : regex.email.test(emailAndPhoneNumber)
        if (checkRegex) {
            navigation.navigate(ScreenNames.FORGET_PASSWORD_OTP_SCREEN,{sendTo:emailAndPhoneNumber});
            dispatch(UserAction.setToastedAlert({
                condition: true,
                toastedAlertText: `OTP has been send to\n${checkThisIsMobileNumber ? '+' :''}${emailAndPhoneNumber}`
            }))
        }else{
            Alert.alert('Alert','In Valid')
        }
    }
    return { navigationToForgotPasswordOtp, emailAndPhoneNumber, setEmailAndPhoneNumber, checkThisIsMobileNumber, checkLengthOfInput }
}
export { ForgetPasswordHooks }