import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './ProfileOptionStyles';

const ProfileOptionComponent = ({title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.mainView}>
      <Text style={{fontSize: 18, textAlign: 'center', color: '#000'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ProfileOptionComponent;
