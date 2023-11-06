import React, {Component} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {ScreenNames} from '../global';
import {CommonActions, useNavigation} from '@react-navigation/native';
const SplashScreen = () => {
  const navigation = useNavigation();
  const DareNowOpacity = React.useRef(new Animated.Value(1)).current;
  const resetStackAndGoToBottom = CommonActions.reset({
    index: 0,
    routes: [{name: ScreenNames.ONBOARDING_SCREEN}],
  });
  const onLoad = async () => {
    Animated.timing(DareNowOpacity, {
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
    <View style={styles.container}>
      <Text>SplashScreen</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default SplashScreen;
