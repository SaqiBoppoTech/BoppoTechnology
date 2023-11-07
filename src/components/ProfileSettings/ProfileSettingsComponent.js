import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './ProfileSettingsStyle';

const SettingComponent = ({onPress, title}) => {
  return (
    <TouchableOpacity style={styles.mainView} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      <Icon name="angle-right" size={30} color="#000" />
    </TouchableOpacity>
  );
};

export default SettingComponent;
