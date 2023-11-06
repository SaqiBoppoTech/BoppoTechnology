import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './AddressTypeStyle';

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
            <Text style={{fontSize: 15, textAlign: 'center', color: '#000'}}>
              Default
            </Text>
          </View>
        )}

        <View>
          <Icon name="arrow-forward" size={25} color="#000" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AddressTypeComponent;
