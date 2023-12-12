import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { Colors, Fonts, ScreenNames } from '../global';
import { CommonActions, ThemeProvider, useNavigation } from '@react-navigation/native';
import { CHANGE_BY_MOBILE_DPI, getTheme } from '../global/constant';
import LogoSvg from '../assets/svgs/LogoSvg.svg';
import FocusAwareStatusBar from '../components/AppBar/FocusAwareStatusBar';
import { useSelector } from 'react-redux';

const SplashScreen = () => {

  const navigation = useNavigation();
  const Opacity = React.useRef(new Animated.Value(1)).current;
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
    onLoad();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <FocusAwareStatusBar barColor={appData?.primaryColor} />
      <View style={{...styles.container,backgroundColor:appData?.primaryColor}}>
        <LogoSvg />
        <Text style={styles.text}>BoppoGo</Text>
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
