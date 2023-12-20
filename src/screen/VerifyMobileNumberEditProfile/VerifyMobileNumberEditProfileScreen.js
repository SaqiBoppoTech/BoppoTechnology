import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../../global';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import CustomTextField from '../../components/CustomTextField/CustomTextFieldComponent';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import OTPInput from '../../components/CustomOTPField/CustomOTPField';
import VerifyNumberEditProfileHooks from './VerifyMobileNumberEditProfileHooks';
import { styles } from './VerifyMobileNumberEditProfileStyles';

const VerifyNumberEditProfile = () => {
  const {
    handleGoBack,
    onPressCancel,
    onPressSave,
    setOtpValue,
    otpValue,
    currentPassword,
    setCurrentPassword,
    confirmPassword,
    setConfirmPassword,
  } = VerifyNumberEditProfileHooks();
  return (
    <View style={styles.mainView}>
      <FocusAwareStatusBar barColor={Colors.CONCRETE} />
      <SearchAppBar title={'Verify MobileNiumber'} onPress={handleGoBack} />
      <ScrollView style={styles.bg}>
        <Text style={styles.enterOtpFontStyle}>Please enter the OTP</Text>
        <OTPInput arrayCount={6} setData={setOtpValue} />
        <Text style={styles.resendotp}>Resend OTP</Text>
        <CustomTextField
          keyboardType={'default'}
          placeholder={'enter current number'}
          placeholderTextColor={Colors.GRAY_DARK}
          title={'Current Number'}
          showAsterisk={true}
          externalContainer={{
            ...styles.space,
            marginTop: CHANGE_BY_MOBILE_DPI(15),
          }}
          value={currentPassword}
          onChangeText={setCurrentPassword}
        />

        <CustomTextField
          keyboardType={'default'}
          placeholder={'enter new number'}
          placeholderTextColor={Colors.GRAY_DARK}
          title={'New Number'}
          showAsterisk={true}
          externalContainer={styles.space}
        />

        <CustomTextField
          keyboardType={'default'}
          placeholder={'re-enter new number'}
          placeholderTextColor={Colors.GRAY_DARK}
          title={'Confirm New number'}
          showAsterisk={true}
          externalContainer={styles.space}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </ScrollView>
      <View style={styles.btn}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            gap: CHANGE_BY_MOBILE_DPI(5),
          }}>
          <TouchableOpacity
            onPress={onPressCancel}
            style={{
              backgroundColor: Colors.WHITE,
              height: CHANGE_BY_MOBILE_DPI(49),
              borderRadius: CHANGE_BY_MOBILE_DPI(8),
              borderColor: Colors.BLACK,
              flex: 1,
              borderWidth: CHANGE_BY_MOBILE_DPI(1.5),
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: CHANGE_BY_MOBILE_DPI(12),
            }}>
            <Text
              style={{
                color: Colors.BLACK,
                fontFamily: Fonts.LATO_BOLD,
                fontSize: CHANGE_BY_MOBILE_DPI(16),
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressSave}
            style={{
              backgroundColor: Colors.BLACK,
              height: CHANGE_BY_MOBILE_DPI(49),
              borderRadius: CHANGE_BY_MOBILE_DPI(8),
              borderColor: Colors.BLACK,
              flex: 1,
              borderWidth: CHANGE_BY_MOBILE_DPI(1.5),
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: CHANGE_BY_MOBILE_DPI(12),
            }}>
            <Text
              style={{
                color: Colors.WHITE,
                fontFamily: Fonts.LATO_BOLD,
                fontSize: CHANGE_BY_MOBILE_DPI(16),
              }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default VerifyNumberEditProfile;
