import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';

const WishListHooks = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const addToCartPress = () => {};
  const removeFromCart = () => {};
  const navigateToProductScreen = () => {
    navigation.navigate(ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN);
  };

  return {
    handleGoBack,
    addToCartPress,
    removeFromCart,
    navigateToProductScreen,
  };
};

export default WishListHooks;
