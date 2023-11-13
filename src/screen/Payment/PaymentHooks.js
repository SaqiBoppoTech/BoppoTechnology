import { useNavigation } from "@react-navigation/native"


const PaymentHooks = () =>{
    const navigation = useNavigation();
    const handleGoBack =()=>{
        navigation.goBack();
    };
    return{
        handleGoBack,
    };

};

export default PaymentHooks;