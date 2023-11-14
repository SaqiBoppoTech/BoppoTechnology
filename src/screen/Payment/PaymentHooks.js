// import { useNavigation } from "@react-navigation/native"
import { useNavigation, useRoute } from "@react-navigation/native"
import React from "react"
import { ScreenNames } from "../../global"

const PaymentHooks = () =>{
    const navigation = useNavigation();
    const handleGoBack =()=>{
        navigation.goBack();
    };

    const orderReceivedSuccess = () => {
        navigation.navigate(ScreenNames.PAYMENT_SUCCESS,);
    }
    return{
        handleGoBack,
        orderReceivedSuccess
    };

};

export {PaymentHooks};