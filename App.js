import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainStack from './src/navigation/MainStack';
import BoxSvg from './src/assets/svgs/BoxSvg.svg'
import { Constant } from './src/global';
const App = () => {
  return (
    <View style={styles.container}>
       <MainStack/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
