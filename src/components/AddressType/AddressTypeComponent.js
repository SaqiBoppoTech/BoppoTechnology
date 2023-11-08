import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './AddressTypeStyle';
import RightArrow from '../../assets/svgs/BackArrow.svg';

const AddressTypeComponent = ({title, onPress, showDefault}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.wrapper}>
        {showDefault && (
          <View style={styles.defaultTitle}>
            <Text style={styles.default}>Default</Text>
          </View>
        )}

        <View style={styles.rotate}>
          <RightArrow />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AddressTypeComponent;
