import React, { useContext } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { Colors, Fonts, ScreenNames } from '../global';
import { CommonActions, ThemeProvider, useNavigation } from '@react-navigation/native';
import { CHANGE_BY_MOBILE_DPI, getTheme } from '../global/constant';
import FocusAwareStatusBar from '../components/AppBar/FocusAwareStatusBar';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../global/api-core';
import { BASE_URL } from '../global/config';
import axios from 'axios';


const SplashScreen = () => {
  const navigation = useNavigation();
  const Opacity = React.useRef(new Animated.Value(1)).current;
  const appData = useSelector(e => e?.user?.globalAppData)
  const resetStackAndGoToBottom = CommonActions.reset({
    index: 0,
    routes: [{ name: ScreenNames.BOTTOM_TAB }],
  });
  const resetStackAndGoToLogin = CommonActions.reset({
    index: 0,
    routes: [{ name: ScreenNames.ONBOARDING_SCREEN }],
  });

  const checkUserExistOrNot = async () => {
    let getUserMobileNumberByAsyncStorge = await AsyncStorage.getItem('userData')
    let convertIntoParse = JSON.parse(getUserMobileNumberByAsyncStorge)
    let userPhoneNumber = convertIntoParse?.contatcNumber
    if (userPhoneNumber) {
      try {
        let refreshTokenData = { "refresh_token": convertIntoParse?.refreshToken }
        let userExistUrl = `/auth/api/v1/customer/refresh`
        const response = await axiosInstance.post(userExistUrl, refreshTokenData)
        if (response?.data?.success == true) {
          let mobileNumberDataWithToken = {
            accessToken: response?.data?.data?.accessToken,
            contatcNumber: userPhoneNumber,
            refreshToken: response?.data?.data?.refreshToken
          }
          console.warn("response.data.data.accessToken",response.data.data.accessToken);
          await AsyncStorage.setItem("userData", JSON.stringify(mobileNumberDataWithToken));
          axiosInstance.defaults.headers['Authorization'] =  response.data.data.accessToken;
          navigation.dispatch(resetStackAndGoToBottom);
        }
      } catch (error) {
        console.log('====SplashScreen===>>', error.message)
      }
    } else {
      navigation.dispatch(resetStackAndGoToLogin);
    }
  }
  const onLoad = async () => {
    Animated.timing(Opacity, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start(async ({ finished }) => {
      if (finished) {
        // navigation.dispatch(resetStackAndGoToBottom);
        checkUserExistOrNot()
      }
    });
  };
  React.useEffect(() => {
    onLoad();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FocusAwareStatusBar barColor={Colors.PRIMARY} />
      <View style={{ ...styles.container, backgroundColor: Colors.PRIMARY }}>
        {appData?.appLogo(CHANGE_BY_MOBILE_DPI(70), CHANGE_BY_MOBILE_DPI(70))}
        <Text style={{ ...styles.text, color: Colors.BLACK }}>BoppoGo</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: CHANGE_BY_MOBILE_DPI(36),
    fontFamily: Fonts.INTER_BOLD,
  }
});

//make this component available to the app
export default SplashScreen;