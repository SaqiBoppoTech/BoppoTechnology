import React, {useContext} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {Colors, Fonts, ScreenNames} from '../global';
import {
  CommonActions,
  ThemeProvider,
  useNavigation,
} from '@react-navigation/native';
import {CHANGE_BY_MOBILE_DPI, getTheme} from '../global/constant';
import FocusAwareStatusBar from '../components/AppBar/FocusAwareStatusBar';
import {useSelector} from 'react-redux';

const SplashScreen = () => {
  const navigation = useNavigation();
  const Opacity = React.useRef(new Animated.Value(1)).current;
  const appData = useSelector(e => e?.user?.globalAppData);
  const resetStackAndGoToBottom = CommonActions.reset({
    index: 0,
    routes: [{name: ScreenNames.ONBOARDING_SCREEN}],
  });
  const onLoad = async () => {
    Animated.timing(Opacity, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start(async ({finished}) => {
      if (finished) {
        navigation.dispatch(resetStackAndGoToBottom);
      }
    });
  };
  React.useEffect(() => {
    onLoad();
  }, []);

  return (
    <View style={{flex: 1}}>
      <FocusAwareStatusBar barColor={Colors.PRIMARY} />
      <View style={{...styles.container, backgroundColor: Colors.PRIMARY}}>
        {appData?.appLogo(CHANGE_BY_MOBILE_DPI(70), CHANGE_BY_MOBILE_DPI(70))}
        <Text style={{...styles.text, color: Colors.BLACK}}>BoppoGo</Text>
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
  },
});

//make this component available to the app
export default SplashScreen;
