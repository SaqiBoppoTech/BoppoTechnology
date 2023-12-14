import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import {styles} from './GlobalAlertStyle';

const GlobalAlert = () => {
  let removeAlertData = {
    alertVisibility: false,
    message: '',
    description: '',
    leftText: '',
    rightText: '',
    rightEvent: () => {},
    leftEvent: () => {},
  };
  let alertVisibilityAndInfoObject = useSelector(e => e?.user?.alertData);
  const dispatch = useDispatch();
  const onCloseLeft = () => {
    // if (alertVisibilityAndInfoObject?.leftText !== '') {
    //     alertVisibilityAndInfoObject?.leftEvent()
    // }
    // else{
    dispatch(UserAction.setAlertData(removeAlertData));
    // }
  };
  const onCloseRight = () => {
    // if (alertVisibilityAndInfoObject?.rightText !== '') {
    //     alertVisibilityAndInfoObject?.rightEvent()
    // }
    // else{
    dispatch(UserAction.setAlertData(removeAlertData));
    // }
  };
  const closeModal = () => {
    dispatch(UserAction.setAlertData(removeAlertData));
  };
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={alertVisibilityAndInfoObject?.alertVisibility}
      onRequestClose={closeModal}>
      <View style={styles.alertBackgroundColor}>
        <View style={styles.alertContainer}>
          <View style={styles.marginVerticalStyle}>
            <Text style={styles.messageFontStyle}>
              {alertVisibilityAndInfoObject?.message}
            </Text>
            <Text style={styles.descriptionFontStyle}>
              {alertVisibilityAndInfoObject?.description}
            </Text>
          </View>
          <View style={styles.alertMainContainer}>
            <View style={styles.horizontalLine}></View>
            <View style={styles.buttonDivider}>
              {alertVisibilityAndInfoObject?.leftText && (
                <TouchableOpacity
                  onPress={onCloseLeft}
                  style={styles.flexContainer}>
                  <Text style={styles.leftFontStyle} numberOfLines={1}>
                    {alertVisibilityAndInfoObject?.leftText}
                  </Text>
                </TouchableOpacity>
              )}
              {(alertVisibilityAndInfoObject?.leftText != '' ||
                alertVisibilityAndInfoObject?.rightText != '') && (
                <View style={styles.verticalLine}></View>
              )}
              {alertVisibilityAndInfoObject?.rightText && (
                <TouchableOpacity
                  onPress={onCloseRight}
                  style={styles.flexContainer}>
                  <Text style={styles.rightFontStyle} numberOfLines={1}>
                    {alertVisibilityAndInfoObject?.rightText}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default GlobalAlert;
