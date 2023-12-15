import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';

const CancelReturnDetailHooks = () => {
  const navigation = useNavigation();

  const navigateToCartPage = () => {
    navigation.navigate(ScreenNames.YOUR_CART_SCREEN);
  };
  const handleGoBack = () => {
    navigation.goBack();
  };

  return {
    navigateToCartPage,
    handleGoBack
  };
};

export {CancelReturnDetailHooks};
