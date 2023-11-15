import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './ShippingTypeStyle';
import Package from '../../assets/svgs/Package.svg';
import Truck from '../../assets/svgs/Truck.svg';
import Shoppingbag from '../../assets/svgs/ShoppingBag.svg';
import {Constant, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import ShippingTypeHooks from './ShippingHooks';

const ShippingType = () => {
  const {selectedShippingMethod, setSelectedShippingMethod} =
    ShippingTypeHooks();
  return (
    <View style={styles.shippingMethodButtonBgStyles}>
      <TouchableOpacity
        onPress={() => setSelectedShippingMethod(1)}
        style={{width: Constant.SCREEN_WIDTH}}>
        <View
          style={{
            ...styles.shippingMethodButtonStyles,
            backgroundColor: selectedShippingMethod === 1 ? 'black' : null,
          }}>
          <View style={styles.titleView}>
            <Package height={CHANGE_BY_MOBILE_DPI(20)} width={CHANGE_BY_MOBILE_DPI(20)} />
            <Text
              style={{
                ...styles.title,
                color: selectedShippingMethod === 1 ? 'white' : 'black',
              }}>
              Shipping
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSelectedShippingMethod(2)}
        style={{alignItems:'center'}}
       >
        <View
          style={{
            ...styles.shippingMethodButtonStyles,
            backgroundColor: selectedShippingMethod === 2 ? 'black' : null,
          }}>
          <View style={styles.icon}>
            <Truck />
          </View>
          <View style={styles.titleView}>
            <Text
              style={{
                ...styles.title,
                color: selectedShippingMethod === 2 ? 'white' : 'black',
              }}>
              Local Delivery
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSelectedShippingMethod(3)}
     >
        <View
          style={{
            ...styles.shippingMethodButtonStyles,
            backgroundColor: selectedShippingMethod === 3 ? 'black' : null,
          }}>
            <Shoppingbag height={CHANGE_BY_MOBILE_DPI(20)} width={CHANGE_BY_MOBILE_DPI(20)} />
          <View style={styles.titleView}>
            <Text
              style={{
                ...styles.title,
                color: selectedShippingMethod === 3 ? 'white' : 'black',
              }}>
              Store Pickup
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ShippingType;
