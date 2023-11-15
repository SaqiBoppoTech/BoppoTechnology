import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';

const AddToCartBottomButton = ({onAddToCartPress, onBuyNowPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
       on 
       style={styles.addToCart} onPress={onAddToCartPress}>
        <Icons name="cart-outline" size={35} color="#000" />
        <Text style={styles.textcart}>Add to cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buyNow} onPress={onBuyNowPress}>
        <Text style={styles.textbuy}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddToCartBottomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 50,
  },
  addToCart: {
    backgroundColor: '#fff',
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  buyNow: {
    backgroundColor: 'black',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textcart: {
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
  },
  textbuy: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
});
