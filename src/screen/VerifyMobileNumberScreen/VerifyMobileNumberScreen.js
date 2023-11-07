import {Text, View, Image} from 'react-native';
import React from 'react';
import CommonButton from '../../components/Button/CommonButton';
import Icon from 'react-native-vector-icons/AntDesign';
import OTPInput from '../../components/CustomOTPField/CustomOTPField';
import {styles} from './VerifyMobileNumberStyle';
import {LOGIN_SCREEN} from '../../global/screeenName';

const VerifyMobileNumberScreen = ({navigation}) => {
  return (
    <View>
      <Image
        source={require('../../assets/images/mobile_otp.png')}
        style={styles.img}
      />
      <View style={styles.line}></View>

      <View style={styles.titleContainer}>
        <Icon name="arrowleft" size={25} color="#000" />
        <View>
          <Text style={{...styles.title, marginBottom: 5}}>
            Verify your Mobile Number
          </Text>
          <Text style={{...styles.title, marginBottom: 30}}>
            +91 - 9876543210
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

export default VerifyMobileNumberScreen;
