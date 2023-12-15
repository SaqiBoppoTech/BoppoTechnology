import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {styles} from './CheckoutNavigationBarStyle';
import {Colors} from '../../global';

const Step = ({number, title, isActive}) => {
  const backgroundColor = isActive ? '#3876BF' : Colors.GAINSBORO;
  return (
    <View style={styles.stepContainer}>
      <View style={{...styles.stepCircle, backgroundColor}}>
        <Text style={styles.stepNumber}>{number}</Text>
      </View>

      {/* <Text style={styles.stepText}>{title}</Text> */}
    </View>
  );
};

const CheckoutNavigationBar = () => {
  const route = useRoute();
  const [state, setState] = useState('YourCart');

  useEffect(() => {
    setState(route?.name);
  }, [route]);

  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Step
          number={1}
          title="Your Cart"
          isActive={
            state === 'YOUR_CART_SCREEN' ||
            state === 'ORDER_SUMMARY_SCREEN' ||
            state === 'PAYMENT_SCREEN'
          }
        />
        <View style={styles.dottedLine}></View>
        <Step
          number={2}
          title="Order Summary"
          isActive={
            state === 'ORDER_SUMMARY_SCREEN' || state === 'PAYMENT_SCREEN'
          }
        />
        <View style={styles.dottedLine}></View>
        <Step
          number={3}
          title="Payment"
          isActive={state === 'PAYMENT_SCREEN'}
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>YourCart</Text>
        <Text style={styles.text}>Order Summary</Text>
        <Text style={styles.text}>Payment</Text>
      </View>
    </View>
  );
};

export default CheckoutNavigationBar;
