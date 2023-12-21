import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './CustomCheckBoxStyle';
import {CustomCheckBoxHooks} from './CustomCheckBoxHooks';
import Check from '../../assets/svgs/Check.svg';

const CustomCheckbox = ({title, type, onToggle, isCheckBox}) => {
  const {isChecked, setChecked} = CustomCheckBoxHooks(isCheckBox);
  const handleToggle = () => {
    setChecked(!isChecked);
    onToggle(type, !isChecked);
  };
  return (
    <View style={styles.mainView}>
      <TouchableOpacity
        style={[styles.checkbox, isChecked ? styles.checked : null]}
        onPress={handleToggle}>
        <View style={styles.checkWrapper}>
          {isChecked && <Check width="14" height="14" />}
        </View>
      </TouchableOpacity>

      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default CustomCheckbox;
