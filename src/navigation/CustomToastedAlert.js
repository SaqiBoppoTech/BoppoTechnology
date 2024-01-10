//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as UserAction from '../../src/redux/actions/userActions';
import {CHANGE_BY_MOBILE_DPI} from '../global/constant';
import {Colors, Constant, Fonts} from '../global';
// create a component
const CustomToastedAlert = () => {
  const fadeAnim = new Animated.Value(0);
  const alertVisibility = useSelector(e => e.user?.toastedAlert);
  const dispatch = useDispatch();
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(res => {
      if (res) {
        dispatch(
          UserAction.setToastedAlert({
            condition: false,
            toastedAlertText: '',
          }),
        );
      }
    });
  };
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(res => {
      if (res) {
        fadeOut();
      }
    });
  };

  const ToastedAlert = () => {
    return (
      <Animated.View style={styles.positionContainer}>
        <Animated.View
          style={[
            styles.toastedContainer,
            {
              opacity: fadeAnim,
            },
          ]}>
          <Text style={styles.toastedFontStyle}>
            {alertVisibility && alertVisibility.toastedAlertText}
          </Text>
        </Animated.View>
      </Animated.View>
    );
  };

  React.useEffect(() => {
    if (alertVisibility.condition) {
      fadeIn();
    }
  }, [alertVisibility.condition]);

  return <>{alertVisibility.condition && <ToastedAlert />}</>;
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  toastedContainer: {
    height: CHANGE_BY_MOBILE_DPI(81),
    width: Constant.SCREEN_WIDTH - 40,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
    borderRadius: CHANGE_BY_MOBILE_DPI(10),
    backgroundColor: Colors.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toastedFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.LATO_BOLD,
    color: Colors.WHITE,
    includeFontPadding: false,
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(20),
    lineHeight: CHANGE_BY_MOBILE_DPI(20),
    textAlign: 'center',
  },
  positionContainer: {
    position: 'absolute',
    bottom: CHANGE_BY_MOBILE_DPI(20),
    zIndex: 0,
  },
});

//make this component available to the app
export default CustomToastedAlert;
