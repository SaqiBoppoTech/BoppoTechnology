import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import CommonButton from '../../components/Button/CommonButton';
import LeftArrowSvg from '../../assets/svgs/LeftRightSvg.svg';
import OTPInput from '../../components/CustomOTPField/CustomOTPField';
import {styles} from './VerifyMobileNumberStyle';
import {GlobalImage} from '../../global/staticImage';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {VerifyMobileNumberHooks} from './VerifyMobileNumberHooks';

const VerifyMobileNumberScreen = () => {
  const {goBackToLogin, checkLoginWithEmailOrMobileNumber,navigateToHomePage,setOtpValue,getVerifyOtp} =
    VerifyMobileNumberHooks();
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar barColor={Colors.WHITE} />
      <ScrollView>
        <View style={styles.imageContainer}>
          <View
            style={
              checkLoginWithEmailOrMobileNumber?.condition
                ? styles.imageSubContainer
                : styles.loginImageEmailStyle
            }>
            <Image
              resizeMode={'contain'}
              source={
                checkLoginWithEmailOrMobileNumber?.condition
                  ? GlobalImage.otpMobileNumberImage
                  : GlobalImage.otpEmailImage
              }
              style={styles.loginImageStyle}
            />
          </View>
        </View>
        <View style={styles.titleContainer}>
          <TouchableOpacity
            onPress={() => goBackToLogin(0)}
            style={styles.arrowContainer}>
            <LeftArrowSvg
              heigth={CHANGE_BY_MOBILE_DPI(20)}
              width={CHANGE_BY_MOBILE_DPI(20)}
            />
          </TouchableOpacity>
          <Text style={{...styles.title}}>
            Verify your Mobile Number {'\n'}{' '}
            {checkLoginWithEmailOrMobileNumber?.text}
          </Text>
        </View>
        <Text style={styles.enterOtpStyle}>Please enter the OTP</Text>
        <OTPInput setData={setOtpValue} arrayCount={6}/>
        <Text style={styles.resendotp}>Resend OTP</Text>
        <CommonButton
          externalCustomButtonStyle={styles.externalCustomButtonStyle}
          externalContainer={styles.externalContainer}
          externalFontStyle={styles.externalFontStyle}
          title={'Continue'}
          onPress={getVerifyOtp}
          // onPress={() => goBackToLogin(2,true)}
        />
      </ScrollView>
    </View>
  );
};

export default VerifyMobileNumberScreen;
