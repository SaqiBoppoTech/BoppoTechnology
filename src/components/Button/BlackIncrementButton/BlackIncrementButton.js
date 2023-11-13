import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import BlackIncrementButtonHooks from './BlackIncrementButtonHooks';
import Plus from '../../../assets/svgs/Plus.svg';
import Minus from '../../../assets/svgs/Minus.svg';
import {styles} from './BlackIncrementButtonStyle';

const BlackIncremnetButton = () => {
  const {count, increment, decrement} = BlackIncrementButtonHooks();
  return (
    <View style={[styles.container]}>
      <View style={styles.resultContainer}>
        <TouchableOpacity
          style={styles.blackContainer}
          onPress={decrement}
          activeOpacity={0.7}>
          <Minus />
        </TouchableOpacity>
      </View>

      <Text style={styles.resultText}>{count}</Text>

      <View style={styles.resultContainer}>
        <TouchableOpacity
          style={styles.blackContainer}
          onPress={increment}
          activeOpacity={0.7}>
          <Plus />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BlackIncremnetButton;
