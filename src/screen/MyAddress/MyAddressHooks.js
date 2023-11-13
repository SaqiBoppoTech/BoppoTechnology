import {ScreenNames} from '../../global';
import {useNavigation} from '@react-navigation/native';

const MyAddressHooks = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const navigateToDeliveryScreen = () => {
    navigation.navigate(ScreenNames.DELIEVERY_ADDRESS);
  };
  const navigateToBillingScreen = () => {
    navigation.navigate(ScreenNames.BILLING_ADDRESS);
  };
  const navigateToAddToNewAddress = () => {
    navigation.navigate(ScreenNames.ADD_NEW_ADDRESS);
  };

  return {
    navigateToDeliveryScreen,
    navigateToBillingScreen,
    navigateToAddToNewAddress,
    handleGoBack,
  };
};

export default MyAddressHooks;
