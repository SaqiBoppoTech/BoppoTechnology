import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './ProfileOptionStyles';

const ProfileOptionComponent = ({title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.mainView}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ProfileOptionComponent;
