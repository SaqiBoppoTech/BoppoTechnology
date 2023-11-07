import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
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
    borderRadius: 20,
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 2,
  },
});
