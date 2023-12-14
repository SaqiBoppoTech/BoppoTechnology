import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainStack from './src/navigation/MainStack';
import { Provider, useDispatch } from 'react-redux';
import { store } from './src/redux/store/store'
import axios from 'axios';
import { AppProvider } from './Context';

const App = () => {
  const [globalData, setGlobalData] = React.useState(null)
  const getTheme = async () => {
    let themeUrl = `http://stage-api.boppogo.com/auth/api/v1/customer/shop-customer-theme`
    const response = await axios.get(themeUrl)
    setGlobalData(response?.data?.data?.getShopTheme)
  }
  // console.warn("asdasdasd",globalData);
  React.useEffect(() => {
    getTheme()
  }, [])
  return (
    <View style={styles.container}>
      <AppProvider value={globalData} >
        <Provider store={store}>
          <MainStack />
        </Provider>
      </AppProvider >
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
export default App;
