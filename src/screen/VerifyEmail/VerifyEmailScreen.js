import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import CommonButton from '../../components/Button/CommonButton';
import Icon from 'react-native-vector-icons/AntDesign';
import OTPInput from '../../components/CustomOTPField/CustomOTPField';
import {styles} from './VerifyEmailStyle';
import {LOGIN_SCREEN} from '../../global/screeenName';

const EmailVerifyScreen = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.image}>
        <Image
          source={require('../../assets/images/email_verify.png')}
          style={styles.imageWrapper}
        />
      </View>
      <View style={styles.line}></View>

      <View style={styles.titleContainer}>
        <Icon name="arrowleft" size={25} color="#000" />
        <View>
          <Text style={{...styles.title, marginBottom: 5}}>
            Verify your Email ID
          </Text>
          <Text style={{...styles.title, marginBottom: 30}}>
            abcdefg@gmail.com
          </Text>
        </View>
      </View>

      <Text style={styles.title2}>Please enter the OTP</Text>
      <OTPInput />
      <Text style={styles.resendotp}>Resend OTP</Text>

      <CommonButton
        title={'Continue'}
        onPress={() => {
          navigation.navigate(LOGIN_SCREEN);
        }}
      />
    </View>
  );
};

export default EmailVerifyScreen;
