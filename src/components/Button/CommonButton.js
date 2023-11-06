import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const CommonButton = ({title, onPress, color}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.containerWrapper}>
        <View
          style={{
            ...styles.container,
            backgroundColor: color ? color : '#000000',
          }}>
          <Text style={styles.btnText}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  containerWrapper: {
    paddingHorizontal: 15,
    width: '100%',
    alignItems: 'center',
  },
  container: {
    borderRadius: 20,
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 2,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});
