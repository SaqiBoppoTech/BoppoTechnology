import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { CHANGE_BY_MOBILE_DPI } from '../global/constant';
// import {IconButton} from 'react-native-paper';

const Logo = ({height, width, iconSize}) => {
  return (
    <View
      style={{
        ...styles.container,
        height: height || styles.container.height,
        width: width || styles.container.width,
      }}>
      {/* <IconButton icon="shopping" iconColor="#fff" size={iconSize || 45} /> */}
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3876BF',
    borderRadius: CHANGE_BY_MOBILE_DPI(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 2,
  },
});
