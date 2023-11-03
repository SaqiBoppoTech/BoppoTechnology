import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

const BlackIncremnetButton = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.resultContainer}>
        <TouchableOpacity
          onPress={() => {
            decrement();
          }}
          activeOpacity={0.7}>
          <View style={styles.circle}>
            <Icon name="minus" size={12} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={{width: 50}}>
        <Text style={styles.resultText}>{count}</Text>
      </View>

      <View style={styles.resultContainer}>
        <TouchableOpacity
          onPress={() => {
            increment();
          }}
          activeOpacity={0.7}>
          <View style={styles.circle}>
            <Icon name="plus" size={12} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BlackIncremnetButton;

const styles = StyleSheet.create({
  circle: {
    backgroundColor: '#000',
    height: 40,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  resultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 30,
    justifyContent: 'center',
  },
  resultText: {
    color: '#000',
    fontSize: 20,
    marginHorizontal: 5,
    textAlign: 'center',
    fontWeight: '500',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
