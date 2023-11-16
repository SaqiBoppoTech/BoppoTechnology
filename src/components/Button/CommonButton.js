import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors} from '../../global';

const CommonButton = ({
  title,
  onPress,
  color,
  externalContainer,
  externalFontStyle,
  externalCustomButtonStyle,
  disable,
}) => {
  return (
    <TouchableOpacity disabled={disable} onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.containerWrapper, externalCustomButtonStyle]}>
        <View
          style={{
            ...styles.container,
            backgroundColor: color ? color : '#000000',
            ...externalContainer,
          }}>
          <Text style={[styles.btnText, externalFontStyle]}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  containerWrapper: {
    paddingHorizontal: 15,
    width: '100%',
    alignItems: 'center',
  },
  container: {
    borderRadius: CHANGE_BY_MOBILE_DPI(10),
    height: CHANGE_BY_MOBILE_DPI(56),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: '500',
  },
});
