import { useNavigation, useRoute } from "@react-navigation/native"
import React from "react"
import { ScreenNames } from "../../global"

const ForgetPasswordHooks = () => {
    // VARIABLR
    let route = useRoute()
    const navigation = useNavigation()
    let sendToData = route?.params?.sendTo
    // HOOKS
    const [password, setPassword] = React.useState('')
    const [retryPassword, setRetryPassword] = React.useState('')

    // FUNCTION
    const navigateToSuccess = () => {
        navigation.navigate(ScreenNames.SUCCESS_SCREEN, { message: `Password updated ${'\n'}successfully`});
    }
    return {
        sendToData,
        password, setPassword,
        retryPassword, setRetryPassword,
        navigateToSuccess
    }
}
export { ForgetPasswordHooks }