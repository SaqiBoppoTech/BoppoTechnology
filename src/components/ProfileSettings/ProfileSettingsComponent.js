import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './ProfileSettingsStyle';
import RightArrow from '../../assets/svgs/RightSvg.svg';

const SettingComponent = ({onPress, title}) => {
  return (
    <TouchableOpacity style={styles.mainView} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      <RightArrow stroke="black" width="8" height="16" />
    </TouchableOpacity>
  );
};

export default SettingComponent;
