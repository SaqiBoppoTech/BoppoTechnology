import {useNavigation} from '@react-navigation/native';

const ShippingPolicyHooks = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  return {
    handleGoBack,
  };
};

export default ShippingPolicyHooks;
