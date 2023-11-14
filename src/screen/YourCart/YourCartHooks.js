import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';

const YourCartHook = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const wishListClick = () => {};
  const removeFromCart = () => {};
  const navigateToProductScreen = () => {
    navigation.navigate(ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN);
  };
  const navigateToOrderSummary = () => {
    navigation.navigate(ScreenNames.ORDER_SUMMARY_SCREEN);
  };

  return {
    handleGoBack,
    wishListClick,
    removeFromCart,
    navigateToProductScreen,
    navigateToOrderSummary,
  };
};

export default YourCartHook;
