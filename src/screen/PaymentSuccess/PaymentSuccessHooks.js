import { useNavigation } from "@react-navigation/native";
import { ScreenNames } from "../../global";

const PaymentSuccessHooks =()=>{
    const navigation = useNavigation();

    const navigateToHome = () => {
      navigation.navigate(ScreenNames.BOTTOM_TAB);
    };

    return{
        navigateToHome
    }
};

export {PaymentSuccessHooks}