import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import * as UserAction from '../../redux/actions/userActions';
import {useDispatch} from 'react-redux';

const ChangePasswordHooks = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const onPressCancel = () => {
    navigation.navigate(ScreenNames.EDIT_PROFILE_SCREEN);
  };

  const onPressSave = () => {
    dispatch(UserAction.setAppBar(true));
    navigation.navigate(ScreenNames.SUCCESS_SCREEN, {
      message: `Password updated\nsuccessfully`,
    });
  };

  return {
    handleGoBack,
    onPressCancel,
    onPressSave,
  };
};

export default ChangePasswordHooks;
