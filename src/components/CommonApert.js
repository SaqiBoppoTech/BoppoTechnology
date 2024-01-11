import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Constant } from '../global';
import { CHANGE_BY_MOBILE_DPI } from '../global/constant';

const CustomAlert = ({ visible, message, onClose }) => {
  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.alertContainer}>
          <Text style={styles.alertText}>{message}</Text>
          <TouchableOpacity onPress={onClose} style={styles.okButton}>
            <Text style={styles.okButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertContainer: {
    backgroundColor: Colors.WHITE,
    padding: CHANGE_BY_MOBILE_DPI(20),
    borderRadius: CHANGE_BY_MOBILE_DPI(10),
    alignItems: 'center',
  },
  alertText: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
    color:Colors.BLACK
  },
  okButton: {
    width:Constant.SCREEN_WIDTH - CHANGE_BY_MOBILE_DPI(150),
    backgroundColor: Colors.PRIMARY, // Customize button color
    padding: CHANGE_BY_MOBILE_DPI(10),
    borderRadius: CHANGE_BY_MOBILE_DPI(5),
  },
  okButtonText: {
    color: Colors.WHITE, // Customize button text color
    fontWeight: 'bold',
    alignSelf:'center'
  },
});

export default CustomAlert;
