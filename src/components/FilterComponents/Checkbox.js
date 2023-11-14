import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Fonts} from '../../global';
import CheckSvg from '../../assets/svgs/CheckSvg.svg';

const CategotyCheckBox = ({label, checked, onChange}) => {
  return (
    <TouchableWithoutFeedback onPress={onChange}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginStart: 25,
          marginBottom: CHANGE_BY_MOBILE_DPI(30),
        }}>
        <View
          style={{
            width: CHANGE_BY_MOBILE_DPI(16),
            height: CHANGE_BY_MOBILE_DPI(16),
            borderRadius: CHANGE_BY_MOBILE_DPI(2),
            backgroundColor: checked ? Colors.WHITE : 'transparent',
            marginRight: CHANGE_BY_MOBILE_DPI(10),
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: CHANGE_BY_MOBILE_DPI(1),
            borderColor: Colors.BLACK,
          }}>
          {checked && <CheckSvg />}
        </View>
        <Text
          style={{
            fontSize: CHANGE_BY_MOBILE_DPI(16),
            fontFamily: Fonts.LATO_REGULAR,
            color: Colors.BLACK,
          }}>
          {label}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategotyCheckBox;
