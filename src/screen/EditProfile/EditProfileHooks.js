import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
const EditProfileHooks = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const onSubmit = () => {
    navigation.navigate(ScreenNames.SUCCESS_SCREEN, {
      message: 'Added successfully',
    });
  };
  const navigateToChangePassword = () => {
    navigation.navigate(ScreenNames.CHANGE_PASSWORD);
  };
  return {
    handleGoBack,
    onSubmit,
    navigateToChangePassword,
  };
};

export default EditProfileHooks;
