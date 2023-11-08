import Square from "../../components/MessageContainer/MessageContainer"
import { TouchableOpacity } from "react-native-gesture-handler"
import React from 'react';
import { Colors, ScreenNames } from "../../global";
import { CHANGE_BY_MOBILE_DPI } from "../../global/constant";
import { useNavigation } from "@react-navigation/native";
const CreateAccountHooks = () => {
    const navigation = useNavigation()
    // HOOK 
    const [selectOption, setSelectOption] = React.useState(0)

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
    // NAVIGATION FUNCTION
    const navigateToOtp = () => {
        navigation.navigate(ScreenNames.MOBILE_OTP_SCREEN);
    }
    const navigateToLogin = () => {
        navigation.navigate(ScreenNames.LOGIN_SCREEN);
    }


    return {
        renderCreateAccount,
        navigateToOtp,
        navigateToLogin
    }
}
export { CreateAccountHooks }