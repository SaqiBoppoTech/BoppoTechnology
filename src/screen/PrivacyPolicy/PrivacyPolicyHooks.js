import {useNavigation} from '@react-navigation/native';

const PrivacyPolicyHooks = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  return {
    handleGoBack,
  };
};

export default PrivacyPolicyHooks;
