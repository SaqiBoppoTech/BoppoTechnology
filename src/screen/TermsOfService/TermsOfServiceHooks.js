import {useNavigation} from '@react-navigation/native';

const TermsOfServicesHooks = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  return {
    handleGoBack,
  };
};

export default TermsOfServicesHooks;
