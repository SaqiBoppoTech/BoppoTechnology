import {useNavigation} from '@react-navigation/native';

const WishListHooks = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const addToCartPress = () => {};
  const removeFromCart = () => {};
  const navigateToProductScreen = () => {};

  return {
    handleGoBack,
    addToCartPress,
    removeFromCart,
    navigateToProductScreen,
  };
};

export default WishListHooks;
