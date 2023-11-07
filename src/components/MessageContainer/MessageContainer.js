import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './MessageStyle';

const Square = ({title, color, textColor}) => {
  return (
    <View
      style={{...styles.container, backgroundColor: color ? color : '#fff'}}>
      <Text style={{...styles.text, color: textColor ? textColor : '#000'}}>
        {title}
      </Text>
    </View>
  );
};

export default Square;
