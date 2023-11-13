import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';

const ProfileSectionHooks = () => {
  // VARIABLE
  const navigation = useNavigation();

  // FUNCTION
  const navigateToWishList = () => {
    navigation.navigate(ScreenNames.WISHLIST_SCREEN);
  };
  const navigateToOrders = () => {
    navigation.navigate(ScreenNames.ORDER_SCREEN);
  };
  const navigateToEditProfile = () => {
    navigation.navigate(ScreenNames.EDIT_PROFILE_SCREEN);
  };
  const navigateToChatWithUs = () => {
    // navigation.navigate(ScreenNames.CREATE_NEW_ACCOUNT);
  };

  return {
    navigateToWishList,
    navigateToOrders,
    navigateToEditProfile,
    navigateToChatWithUs,
  };
};

export {ProfileSectionHooks};
