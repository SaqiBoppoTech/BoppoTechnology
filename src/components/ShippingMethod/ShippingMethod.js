import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import FedEx from '../../assets/svgs/FedEx.svg';
import Dhl from '../../assets/svgs/DHL.svg';

import {styles} from './ShippingMethodStyle';
import ShippingMethodHooks from './ShippingMethodHooks';

const ShippingMethod = () => {
  const {selectedRadio, setSelectedRadio} = ShippingMethodHooks();
  return (
    <View style={styles.main}>
      <Text style={styles.headingText}>Shipping method</Text>
      <Text style={styles.lightText}>Please choose your payment method</Text>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setSelectedRadio(1)}>
        <View style={styles.radioNameWrapper}>
          <View style={styles.radio}>
            {selectedRadio === 1 ? <View style={styles.radioBg}></View> : null}
          </View>
          <Text style={styles.name}>FedEx</Text>
        </View>
        <View style={styles.additionalPriceWrapper}>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Text style={styles.additionalPrice}>Additional price</Text>
            <Text style={styles.usd}>+32 USD</Text>
          </View>
        </View>
        <View style={styles.imageWrapper}>
          <FedEx />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.container}
        onPress={() => setSelectedRadio(2)}>
        <View style={styles.radioNameWrapper}>
          <View style={styles.radio}>
            {selectedRadio === 2 ? <View style={styles.radioBg}></View> : null}
          </View>
          <Text style={styles.name}>DHL</Text>
        </View>
        <View style={styles.additionalPriceWrapper}>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Text style={styles.additionalPrice}>Additional price</Text>
            <Text style={styles.usd}>+15 USD</Text>
          </View>
        </View>
        <View style={styles.imageWrapper}>
          <Dhl />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ShippingMethod;
