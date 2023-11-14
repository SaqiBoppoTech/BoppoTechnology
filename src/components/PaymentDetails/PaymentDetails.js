import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {style} from './PaymentDetailsStyle';
import {Colors, Fonts} from '../../global';

const PaymentComponent = ({type, price}) => {
  return (
    <View style={style.typeWrapper}>
      <Text style={style.type}>{type}</Text>
      <Text style={style.price}>{price}</Text>
    </View>
  );
};

const PaymentDetails = () => {
  return (
    <View style={style.mainView}>
      <Text style={style.txt}>Payment Detail</Text>
      <PaymentComponent type={'Product Cost'} price={'36.99 USD'} />
      <PaymentComponent type={'Discount'} price={'-20.00 USD'} />
      <PaymentComponent type={'Tax'} price={'3.11 USD'} />
      <PaymentComponent type={'Shipping Cost'} price={'10.21 USD'} />
      <View style={style.totalContainer}>
        <Text style={style.type}>Total Amount</Text>
        <Text style={style.total}>30.31 USD</Text>
      </View>
    </View>
  );
};

export default PaymentDetails;
