import React from 'react';
import { View, StyleSheet,ActivityIndicator } from 'react-native';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import { Colors } from '../../global';
// import LottieView from 'lottie-react-native';

const GlobalLoader = () => {
  return (
    <View style={styles.loaderOverlay}>
        <ActivityIndicator color={Colors.WHITE} size={50}  />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor:Colors.BLACK + 99,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  loader: {
    width: CHANGE_BY_MOBILE_DPI(80),
    height: CHANGE_BY_MOBILE_DPI(80),
  },
});

export default GlobalLoader;