import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styles } from './ForgetPasswordStyle';
import { FORGET_PASSWORD_OTP_SCREEN } from '../../global/screeenName';
import CustomTextField from '../../components/CustomTextField/CustomTextFieldComponent';
import CustomAppBar from '../../components/AppBar/CustomAppBar';
import CommonButton from '../../components/Button/CommonButton';
import { Colors } from '../../global';
import { ForgetPasswordHooks } from './ForgetPasswordHooks';
const ForgetPasswordScreen = () => {
  const { navigationToForgotPasswordOtp, emailAndPhoneNumber, setEmailAndPhoneNumber, checkThisIsMobileNumber, checkLengthOfInput } = ForgetPasswordHooks()
  return (
    <View style={styles.mainContainer}>
      <CustomAppBar />
      <KeyboardAvoidingView style={styles.flexContainer}>
        <Text style={styles.selectioFontStyle}>Make Selection</Text>
        <CustomTextField
        titleExternalStyle={styles.titleExternalStyle}
          maxLenght={checkThisIsMobileNumber ? 10 : null}
          keyboardType={'default'}
          placeholderTextColor={Colors.GRAY_DARK}
          placeholder={'enter email id / mobile number'}
          title={'Please enter your phone number or Mail Id to reset password'}
          value={emailAndPhoneNumber}
          onChangeText={setEmailAndPhoneNumber}
        />
      </KeyboardAvoidingView>

      <CommonButton
        color={checkLengthOfInput ? Colors.BLACK : Colors.GRAY_MEDIUM}
        externalCustomButtonStyle={styles.externalCustomButtonStyle}
        externalContainer={styles.externalContainer}
        disable={!checkLengthOfInput}
        externalFontStyle={styles.externalFontStyle}
        title={'Continue'}
        onPress={navigationToForgotPasswordOtp}
      />
    </View>
  );
};

export default ForgetPasswordScreen;
