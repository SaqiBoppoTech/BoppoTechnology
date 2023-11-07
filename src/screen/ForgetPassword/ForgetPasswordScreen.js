import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './ForgetPasswordStyle';
import {FORGET_PASSWORD_OTP_SCREEN} from '../../global/screeenName';
import CustomTextField from '../../components/CustomTextField/CustomTextFieldComponent';
import CustomAppBar from '../../components/AppBar/CustomAppBar';
import CommonButton from '../../components/Button/CommonButton';

const ForgetPasswordScreen = ({navigation}) => {
  return (
    <View>
      <View>
        <CustomAppBar />
        <Text style={styles.text}>Make Selection</Text>
        <CustomTextField
          keyboardType={'default'}
          placeholder={'enter email id / mobile number'}
          title={'Please enter your phone number or Mail Id to reset password'}
        />
        <View style={styles.container}>
          <CommonButton
            title={'Continue'}
            onPress={() => {
              navigation.navigate(FORGET_PASSWORD_OTP_SCREEN);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ForgetPasswordScreen;
