import {useNavigation} from '@react-navigation/native';

const RefundPolicyHooks = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  return {
    handleGoBack,
  };
};

export default RefundPolicyHooks;
