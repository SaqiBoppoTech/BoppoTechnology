import {ScreenNames} from '../../global';
import {useNavigation} from '@react-navigation/native';

const DeliveryAddressHooks = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const removeAddress = () => {};
  const editAddress = () => {
    navigation.navigate(ScreenNames.ADD_NEW_ADDRESS);
  };

  return {
    editAddress,
    removeAddress,
    handleGoBack,
  };
};

export default DeliveryAddressHooks;
