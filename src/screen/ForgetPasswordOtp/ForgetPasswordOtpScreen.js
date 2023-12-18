import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styles } from './ForgetPasswordOtpStyle';
import CustomTextField from '../../components/CustomTextField/CustomTextFieldComponent';
import { SUCCESS_SCREEN } from '../../global/screeenName';
import CustomAppBar from '../../components/AppBar/CustomAppBar';
import CommonButton from '../../components/Button/CommonButton';
import OTPInput from '../../components/CustomOTPField/CustomOTPField';
import { ForgetPasswordHooks } from './ForgetPasswordOtpHooks';
import { Colors } from '../../global';

const ForgetPasswordOtpScreen = () => {
  const { sendToData, password, setPassword,
    retryPassword, setRetryPassword,navigateToSuccess ,setOtpValue,loginData} = ForgetPasswordHooks()
  return (
      <View style={styles.mainContainer}>
        <CustomAppBar />
        <View style={styles.marginContainer}>
          <Text style={styles.otpFontStyle}>The OTP has been sent to</Text>
          <Text style={styles.sendToFontStyle}>{loginData?.contact_us}</Text>
        </View>
        <Text style={styles.enterOtpFontStyle}>Please enter the OTP</Text>
        <OTPInput arrayCount={6} setData={setOtpValue}/>
        <Text style={styles.resendotp}>Resend OTP</Text>
        <CustomTextField
          keyboardType={'default'}
          placeholder={'enter new password'}
          placeholderTextColor={Colors.GRAY_DARK}
          title={'New Password'}
          value={password}
          onChangeText={setPassword}
        // error={errors.email}
        />
        <CustomTextField
          keyboardType={'default'}
          placeholder={'re - enter new passoword'}
          placeholderTextColor={Colors.GRAY_DARK}
          title={'Confirm Password'}
          value={retryPassword}
          onChangeText={setRetryPassword}
          // error={errors.email}
          externalContainer={styles.marginTopStyle}
        />

        <View style={styles.container}>
        <CommonButton
        externalCustomButtonStyle={styles.externalCustomButtonStyle}
        externalContainer={styles.externalContainer}
        externalFontStyle={styles.externalFontStyle}
        title={'Update'}
        onPress={navigateToSuccess}
      />

        </View>
      </View>
  );
};

export default ForgetPasswordOtpScreen;
