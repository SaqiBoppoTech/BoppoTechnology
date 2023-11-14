import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {Colors, Constant, Fonts} from '../../global';

const CustomBottomSheet = ({isVisible, onClose}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      animationIn="slideInUp"
      backdropColor="rgba(0,0,0,0.1)" // Set the background color here
      style={{ margin: 0 }}
      animationOut="slideOutDown">
        <View style={style.mainBottomsheetWrapper}>
          <View style={style.bottomSheetWrapper}>
            <TouchableOpacity>
              <View style={style.buttonsWrapper}>
                <Text style={style.buttonText}>Return or replace items</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={style.buttonsWrapper}>
                <Text style={style.buttonText}>Write a product review</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={style.buttonsWrapper}>
                <Text style={style.buttonText}>Delivery Details</Text>
              </View>
            </TouchableOpacity>
          </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  bottomSheetWrapper: {
    backgroundColor: Colors.WHITE,
    padding: 25,
    height: 265,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  mainBottomsheetWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonsWrapper: {
    height: 48,
    borderColor: Colors.BLACK,
    borderWidth: 2,
    width: 301,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.BLACK,
  },
});

export default CustomBottomSheet;
