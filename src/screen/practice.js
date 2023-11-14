import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Modal from 'react-native-modal';

const CustomBottomSheet1 = ({ isVisible, onClose }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropColor="rgba(0, 0, 0, 0.5)"
      style={{ margin: 0 }}
    >
      <View style={{ flex: 1, justifyContent: 'flex-end', margin: 0 }}>
        <View style={{ backgroundColor: 'white', padding: 16, width: '100%', margin: 0 }}>
          {/* Your custom bottom sheet content goes here */}
          <Text>This is a custom bottom sheet</Text>
          <TouchableOpacity onPress={onClose}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const DATA = () => {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const openBottomSheet = () => {
    setIsBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setIsBottomSheetVisible(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={openBottomSheet}>
        <Text>Show Bottom Sheet</Text>
      </TouchableOpacity>

      <CustomBottomSheet1 isVisible={isBottomSheetVisible} onClose={closeBottomSheet} />
    </View>
  );
};

export default DATA;
