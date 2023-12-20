import Square from "../../components/MessageContainer/MessageContainer"
import { TouchableOpacity } from "react-native-gesture-handler"
import React from 'react';
import { Colors, Constant, ScreenNames } from "../../global";
import { CHANGE_BY_MOBILE_DPI } from "../../global/constant";
import { useNavigation } from "@react-navigation/native";
import axiosInstance from "../../global/api-core";
import { API_END_POINT, BASE_URL } from "../../global/config";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import * as UserAction from '../../redux/actions/userActions'
import axios from "axios";
import { signUpValidation } from "../../global/validation";

const CreateAccountHooks = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    // HOOK 
    const [selectOption, setSelectOption] = React.useState(0)
    const [firstName, setfirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [mobileNumber, setMobileNumber] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')

    //  FUNCTIONs
    const renderCreateAccount = ({ item, index }) => {
        const selected = selectOption == index ? {} : { borderWidth: 1, borderColor: Colors.BLACK }
        const marginRightStyle = index == 0 && { marginRight: CHANGE_BY_MOBILE_DPI(20) }
        const selectIndex = () => {
            setSelectOption(index)
        }
        return (
            <TouchableOpacity onPress={selectIndex}>
                <Square title={item}
                    marginRightStyle={marginRightStyle}
                    borderWidthStyle={selected}
                    textColor={selectOption == index ? Colors.WHITE : Colors.BLACK} color={selectOption == index ? Colors.GRAY_DARK : Colors.WHITE} />
            </TouchableOpacity>
        )
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

    // NAVIGATION FUNCTION
    const navigateToOtp = async () => {
        try {
            let regestarationData = {
                "firstname": firstName,
                "lastname": lastName,
                "email": email,
                "password": password,
                "country_code": "+91",
                "contact_no": mobileNumber
            }
            if (signUpValidation({ ...regestarationData, confirmPassword, openGlobalModal })) {
                dispatch(UserAction.setGlobalLoader(true))
                const response = await axios.post(`${BASE_URL}/auth/api/v1/customer/register`, regestarationData)
                if (response?.data?.success) {
                    let a = {
                        country_code: '+91',
                        mobileNumber: mobileNumber,
                        email: email,
                        registerSessionToken: response?.data?.data?.registerSessionToken,
                        otp: response?.data?.data?.otp,
                        firstname: firstName,
                        lastname: lastName,
                        password: password,
                    }
                    dispatch(UserAction.setMobileNumberData(a))
                    dispatch(UserAction.setGlobalLoader(false))
                    navigation.navigate(ScreenNames.MOBILE_OTP_SCREEN);
                } else {
                    dispatch(UserAction.setGlobalLoader(false))
                    openGlobalModal({ title: response?.data?.message })
                }
            }
        } catch (error) {
            dispatch(UserAction.setGlobalLoader(false))
            console.log('error', error.message)
        }
    }
    const navigateToLogin = () => {
        navigation.navigate(ScreenNames.LOGIN_SCREEN);
    }
    return {
        renderCreateAccount,
        navigateToOtp,
        navigateToLogin,
        firstName, setfirstName,
        lastName, setLastName,
        email, setEmail,
        mobileNumber, setMobileNumber,
        password, setPassword,
        confirmPassword, setConfirmPassword,

    }
}
export { CreateAccountHooks }