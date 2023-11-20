import React from 'react-native';
import {View, Text, ScrollView} from 'react-native';
import {style} from './PaymentSuccessStyle';

import SuccessTick from '../../assets/svgs/SuccessTick.svg';
import CommonButton from '../../components/Button/CommonButton';
import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { PaymentSuccessHooks } from './PaymentSuccessHooks';
const PaymentSuccess = () => {
  const {navigateToHome} = PaymentSuccessHooks();
  return (
    <View style={style.container}>
      <View style={style.orderReceived}>
        <Text style={style.orderReceivedText}>Order Received</Text>
      </View>
      <View style={style.textContainer}>
        <Text
          style={style.textStyle}>
          This order will be delivered within 5 working days
        </Text>
        <TouchableOpacity onPress={navigateToHome}>
          <CommonButton title={'Continue Shopping'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default PaymentSuccess;
