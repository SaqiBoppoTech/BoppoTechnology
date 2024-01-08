import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {Colors, Constant, Fonts} from '../../global';
import {style} from './CustomBottomsheetorderDetailsStyles';

const CustomBottomSheet = ({
  isVisible,
  onClose,
  returnOrReplaceItem,
  writeAProductreview,
  deliveryDetails,
  addProductReview,
  cancelThisReturn,
  productDetails,
  navigateToOrderScreen
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      animationIn="slideInUp"
      backdropColor="rgba(0,0,0,0.1)" // Set the background color here
      style={{margin: 0}}
      animationOut="slideOutDown">
      <View style={style.mainBottomsheetWrapper}>
        <View style={style.bottomSheetWrapper}>
          {returnOrReplaceItem && (
            <TouchableOpacity onPress={navigateToOrderScreen}>
              <View style={style.buttonsWrapper}>
                <Text style={style.buttonText}>Return or replace items</Text>
              </View>
            </TouchableOpacity>
          )}
          {writeAProductreview && (
            <TouchableOpacity>
              <View style={style.buttonsWrapper}>
                <Text style={style.buttonText}>Write a product review</Text>
              </View>
            </TouchableOpacity>
          )}
          {deliveryDetails && (
            <TouchableOpacity>
              <View style={style.buttonsWrapper}>
                <Text style={style.buttonText}>Delivery Details</Text>
              </View>
            </TouchableOpacity>
          )}
          {addProductReview && (
            <TouchableOpacity>
              <View style={style.buttonsWrapper}>
                <Text style={style.buttonText}>Add product review</Text>
              </View>
            </TouchableOpacity>
          )}
          {cancelThisReturn && (
            <TouchableOpacity>
              <View style={style.buttonsWrapper}>
                <Text style={style.buttonText}>Cancel this return</Text>
              </View>
            </TouchableOpacity>
          )}
          {productDetails && (
            <TouchableOpacity>
              <View style={style.buttonsWrapper}>
                <Text style={style.buttonText}>Product Details</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default CustomBottomSheet;
