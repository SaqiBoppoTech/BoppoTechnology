import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { Colors, Fonts, ScreenNames } from '../global';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { CHANGE_BY_MOBILE_DPI } from '../global/constant';
import LogoSvg from '../assets/svgs/LogoSvg.svg';
import FocusAwareStatusBar from '../components/AppBar/FocusAwareStatusBar';
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
      <FocusAwareStatusBar barColor={Colors.GRAY_LIGHT} />
      <View style={styles.container}>
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
    backgroundColor: Colors.PRIMARY,
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
