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

const PaymentDetails = ({
  productCost,
  discount,
  tax,
  shippingCost,
  totalAmount,
  subTotal,
}) => {
  return (
    <View style={style.mainView}>
      <Text style={style.txt}>Payment Detail</Text>
      <PaymentComponent type={'Product Cost'} price={`₹${productCost}`} />
      <PaymentComponent type={'Discount'} price={`₹${discount}`} />
      <PaymentComponent type={'Sub total'} price={`₹${subTotal}`} />
      <PaymentComponent type={'Tax'} price={`₹${tax}`} />
      <PaymentComponent type={'Shipping Cost'} price={`₹${shippingCost}`} />
      <View style={style.totalContainer}>
        <Text style={style.type}>Total Amount</Text>
        <Text style={style.total}>{`₹${totalAmount}`}</Text>
      </View>
    </View>
  );
};

export default PaymentDetails;
