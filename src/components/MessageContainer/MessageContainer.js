import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './MessageStyle';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';

const Square = ({title, color, textColor,borderWidthStyle,marginRightStyle}) => {

  return (
    <View style={styles.flexContainer}>
    <View
      style={{...styles.container, backgroundColor: color ? color : '#fff',...borderWidthStyle,...marginRightStyle}}>
      <Text style={{...styles.text, color: textColor ? textColor : '#000'}}>
        {title}
      </Text>
        </View>
    </View>
  );
};

export default Square;
