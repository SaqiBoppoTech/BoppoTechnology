import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';

const ConatctUsHooks = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const navigateToProfile = () => {
    navigation.navigate(ScreenNames.PROFILE_SCREEN);
  };

  return {
    handleGoBack,
    navigateToProfile,
  };
};

export default ConatctUsHooks;
