import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './ProductDetailStyle';

const ProductDetail = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.view}>
        <View style={styles.lessFlexContainer}>
        <Text style={styles.name}>SKU:</Text>
        </View>
        <View style={styles.largeFlexContainer}>
        <Text style={styles.namevalues}>76645</Text>
        </View>
      </View>
      <View style={styles.view}>
        <View style={styles.lessFlexContainer}>
        <Text style={styles.name}>Category:</Text>
        </View>
        <View style={styles.largeFlexContainer}>
        <Text style={{...styles.namevalues,textDecorationLine:'underline'}}>Beauty</Text>
        </View>
      </View>
      <View style={styles.view}>
        <View style={styles.lessFlexContainer}>
        <Text style={styles.name}>Stock:</Text>
        </View>
        <View style={styles.largeFlexContainer}>
        <Text style={{...styles.namevalues,textDecorationLine:'underline'}}>In Stock</Text>
        </View>
      </View>
      <View style={styles.view}>
        <View style={styles.lessFlexContainer}>
        <Text style={styles.name}>Buy by:</Text>
        </View>
        <View style={styles.largeFlexContainer}>
        <Text style={styles.namevalues}>pcs, kgs, box, pack</Text>
        </View>
      </View>
      <View style={styles.view}>
        <View style={styles.lessFlexContainer}>
        <Text style={styles.name}>Delivery:</Text>
        </View>
        <View style={styles.largeFlexContainer}>
        <Text style={styles.namevalues}>in 2 days</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;
