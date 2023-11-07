import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './ForgetPasswordOtpStyle';
import CustomTextField from '../../components/CustomTextField/CustomTextFieldComponent';
import {SUCCESS_SCREEN} from '../../global/screeenName';
import CustomAppBar from '../../components/AppBar/CustomAppBar';
import CommonButton from '../../components/Button/CommonButton';
import OTPInput from '../../components/CustomOTPField/CustomOTPField';

const ForgetPasswordOtpScreen = ({navigation}) => {
  return (
    <View>
      <View>
        <CustomAppBar />
        <Text style={styles.text}>The OTP has been sent to</Text>
        <Text style={styles.number}>+00 0000005610</Text>
        <Text style={styles.title2}>Please enter the OTP</Text>
        <OTPInput />
        <Text style={styles.resendotp}>Resend OTP</Text>
        <CustomTextField
          keyboardType={'default'}
          placeholder={'enter new password'}
          title={'New Password'}
        />
        <CustomTextField
          keyboardType={'default'}
          placeholder={'re - enter new passoword'}
          title={'Confirm Password'}
        />
        <View style={styles.container}>
          <CommonButton
            title={'Update'}
            onPress={() => {
              navigation.navigate(SUCCESS_SCREEN, {
                message: 'Password updated successfully',
              });
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ForgetPasswordOtpScreen;
