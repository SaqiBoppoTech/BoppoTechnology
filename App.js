import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainStack from './src/navigation/MainStack';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './src/redux/store/store'
import axios from 'axios';
import { AppProvider } from './Context';
import { TRANSPARENT } from './src/global/colors';
import DataSetInRedux from './DataSetInRedux';

const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
          <DataSetInRedux>
            <MainStack />
          </DataSetInRedux>
      </Provider>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: TRANSPARENT
  },

});
export default App;
