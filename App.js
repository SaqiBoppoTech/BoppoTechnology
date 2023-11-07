import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainStack from './src/navigation/MainStack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store'
import DummyTest from './src/DummyTest';
import CustomTopTabs from './src/navigation/CustomTopTabs/CustomTopTab';

const App = () => {
  return (
    <View style={styles.container}>
         <Provider store={store}>
           <MainStack/>
           {/* <CustomTopTabs/> */}
         </Provider>
        
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});
export default App;
