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
  return {
    handleGoBack,
    onSubmit,
  };
};

export default EditProfileHooks;
