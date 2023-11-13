import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';

const AddNewAddressHooks = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const navigateToDeliveryAddress = () => {
    navigation.navigate(ScreenNames.DELIEVERY_ADDRESS);
  };

  return {
    handleGoBack,
    navigateToDeliveryAddress,
  };
};

export default AddNewAddressHooks;
