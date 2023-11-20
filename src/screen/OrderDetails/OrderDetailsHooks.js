import { useNavigation } from "@react-navigation/native";
import { ScreenNames } from "../../global";

const orderDetailHooks=()=>{
    const navigation = useNavigation();
    const navigateToCartPage = () => {
        navigation.navigate(ScreenNames.YOUR_CART_SCREEN);
      };
      const handleGoBack = () => {
        navigation.goBack();
      };

      return{
        navigateToCartPage,
        handleGoBack
      }
}

export {orderDetailHooks}