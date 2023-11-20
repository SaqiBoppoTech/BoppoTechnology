import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import * as UserAction from '../../redux/actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
const EditProfileHooks = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(UserAction.setAppBar(true));
    navigation.navigate(ScreenNames.SUCCESS_SCREEN, {
      message: `Profile Edited \nSuccessfully`,
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
