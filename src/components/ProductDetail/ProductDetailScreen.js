import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './ProductDetailStyle';

const ProductDetailScreen = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.view}>
        <Text style={styles.name}> SKU:</Text>
        <Text style={styles.namevalues}> 76645</Text>
      </View>

      <View style={styles.view}>
        <Text style={styles.name}> Category:</Text>
        <Text style={styles.namevalues}> Beauty</Text>
      </View>

      <View style={styles.view}>
        <Text style={styles.name}> Stock:</Text>
        <Text style={styles.namevalues}> In Stock</Text>
      </View>

      <View style={styles.view}>
        <Text style={styles.name}> Buy by:</Text>
        <Text style={styles.namevalues}> pcs,kgs,box,pack</Text>
      </View>

      <View style={styles.view}>
        <Text style={styles.name}> Delivery:</Text>
        <Text style={styles.namevalues}> in 2 days</Text>
      </View>
    </View>
  );
};

export default ProductDetailScreen;
