import React from 'react-native';
import PaymentMethod from '../../components/PaymentMethod/PaymentMethod';
import PaymentDetails from '../../components/PaymentDetails/PaymentDetails';
import CommonButton from '../../components/Button/CommonButton';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {Colors} from '../../global';
import {PaymentHooks} from './PaymentHooks';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import CheckoutNavigationBar from '../../components/CheckoutNavigationBar/CheckoutNavigationBar';
import { styles } from './PaymentScreenStyle';

const PaymentScreen = () => {
  const {handleGoBack, orderReceivedSuccess} = PaymentHooks();

  return (
    <View style={styles.mainView}>
      <SearchAppBar title={'Checkout'} onPress={handleGoBack} />
      <CheckoutNavigationBar />
      <PaymentDetails />
      <PaymentMethod />
      <CommonButton title={'Pay'} onPress={orderReceivedSuccess} />
    </View>
  );
};




export default PaymentScreen;
