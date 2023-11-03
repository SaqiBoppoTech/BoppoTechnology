import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CircularButton = () => {
  return (
    <View style={styles.circle}>
      <Text style={styles.plusText}>+</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'orange', // Background color of the circle
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    fontSize: 20,
    color: 'white', // Text color
  },
});

export default CircularButton;
