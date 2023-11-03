import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

const CircleIncrementButton = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setShowButtons(true);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(0);
      setShowButtons(false);
    }
  };
  const containerWidth = showButtons ? 120 : 38;
  // console.log(showButtons);
  return (
    <View style={[styles.container, {width: containerWidth}]}>
      {showButtons && (
        <View style={styles.resultContainer}>
          <TouchableOpacity
            onPress={() => {
              decrement();
            }}
            activeOpacity={1}>
            <View style={styles.circle}>
              <Icon name="minus" size={18} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      )}

      {count > 0 && <Text style={styles.resultText}>{count}</Text>}
      <TouchableOpacity
        onPress={() => {
          increment();
        }}
        activeOpacity={1}>
        <View style={styles.circle}>
          <Icon name="plus" size={18} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CircleIncrementButton;

const styles = StyleSheet.create({
  circle: {
    backgroundColor: '#3876BF',
    height: 28,
    width: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  resultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resultText: {
    color: '#000',
    fontSize: 20,
    marginHorizontal: 5,
    textAlign: 'center',
    fontWeight: '500',
    // marginLeft: 16,
  },
  container: {
    flexDirection: 'row',
    width: 115,
    backgroundColor: '#F1F1F1',
    height: 35,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
  },
});
