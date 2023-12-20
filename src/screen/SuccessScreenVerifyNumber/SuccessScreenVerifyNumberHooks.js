import React from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {ScreenNames} from '../../global';
import {CommonActions, useNavigation, useRoute} from '@react-navigation/native';
import * as UserAction from '../../redux/actions/userActions';
import {useDispatch, useSelector} from 'react-redux';

const SuccessVerifyNumberHooks = () => {
  const route = useRoute();
  const {message} = route.params;
  const dispatch = useDispatch();
  const userData = useSelector(e => e.user?.toastedAlert);
  const userAppBar = useSelector(e => e.user?.appBar);
  // console.warn(userAppBar);
  const navigation = useNavigation();
  const Opacity = React.useRef(new Animated.Value(1)).current;
  const resetStackAndGoToLogin = CommonActions.reset({
    index: 0,
    routes: [{name: ScreenNames.LOGIN_SCREEN}],
  });
  const handleGoBack = () => {
    navigation.goBack();
  };
  const navigateToEditProfile = () => {
    navigation.navigate(ScreenNames.PROFILE_SCREEN);
  };
  const onTimeOutNaviagteToLogin = async () => {
    Animated.timing(Opacity, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start(async ({finished}) => {
      if (finished) {
        navigation.dispatch(resetStackAndGoToLogin);
        dispatch(
          UserAction.setToastedAlert({
            condition: true,
            toastedAlertText: `Your password is successfully \nupdated. Please Login here to\n continue`,
          }),
        );
      }
    });
  };
  React.useEffect(() => {
    // onTimeOutNaviagteToLogin();
  }, []);
  return {
    message,
    userAppBar,
    handleGoBack,
    navigateToEditProfile,
  };
};
export {SuccessVerifyNumberHooks};
