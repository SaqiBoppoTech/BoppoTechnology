import React, { useContext } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { Colors, Fonts, ScreenNames } from '../global';
import { CommonActions, ThemeProvider, useNavigation } from '@react-navigation/native';
import { CHANGE_BY_MOBILE_DPI, getTheme } from '../global/constant';
import LogoSvg from '../assets/svgs/LogoSvg.svg';
import FocusAwareStatusBar from '../components/AppBar/FocusAwareStatusBar';
import { useSelector } from 'react-redux';
import { AppProvider, getGobalData } from '../../Context';

const SplashScreen = () => {
  const navigation = useNavigation();
  const Opacity = React.useRef(new Animated.Value(1)).current;
  let globalData = getGobalData()
  let globalGrayBgColor = globalData?.colors.secondaryColor ? `rgb(${globalData?.colors.secondaryColor})` : Colors.GRAY_LIGHT
  let globalBgColor = globalData?.colors.primaryColor ? `rgb(${globalData?.colors.primaryColor})` : Colors.PRIMARY
  console.warn("asdsad", globalData);
  const resetStackAndGoToBottom = CommonActions.reset({
    index: 0,
    routes: [{ name: ScreenNames.ONBOARDING_SCREEN }],
  });
  const onLoad = async () => {
    Animated.timing(Opacity, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start(async ({ finished }) => {
      if (finished) {
        navigation.dispatch(resetStackAndGoToBottom);
      }
    });
  };
  React.useEffect(() => {
    if (globalData != null) {
      onLoad();
    }
  }, [globalData]);
  return (
    <View style={{ flex: 1 }}>
      {
        globalData != null &&
        <View style={{ flex: 1 }}>
          <FocusAwareStatusBar barColor={globalBgColor} />
          <View style={{ ...styles.container, backgroundColor: globalBgColor }}>
            <LogoSvg />
            <Text style={styles.text}>BoppoGo</Text>
          </View>
        </View>
      }
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Colors.PRIMARY,
    // backgroundColor:'#FF7427'
  },
  text: {
    fontSize: CHANGE_BY_MOBILE_DPI(36),
    fontFamily: Fonts.INTER_BOLD,
    color: Colors.WHITE
  }
});

//make this component available to the app
export default SplashScreen;
