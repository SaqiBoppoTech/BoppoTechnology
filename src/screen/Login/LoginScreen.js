import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CommonButton from '../../components/Button/CommonButton';
import {styles} from './LoginStyle';
import {LoginHooks} from './LoginHooks';
import CustomTextField from '../../components/CustomTextField/CustomTextFieldComponent';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors} from '../../global';
import {GlobalImage} from '../../global/staticImage';
const LoginScreen = () => {
  const {
    setEmail,
    setPassword,
    errors,
    email,
    password,
    navigateToForgotPassword,
    navigateToBottom,
    navigateToCreateAccount,
    checkLoginWithEmailOrMobileNumber,
    handleLogin,
  } = LoginHooks();
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar barColor={Colors.CONCRETE} />
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={GlobalImage.loginImage}
            style={styles.loginImageStyle}
          />
        </View>
        <Text style={styles.title}>Login into your account</Text>
        <CustomTextField
          keyboardType={'default'}
          placeholder={'enter email id / mobile number'}
          placeholderTextColor={Colors.GRAY_DARK}
          title={'Email ID / Mobile Number'}
          maxLenght={checkLoginWithEmailOrMobileNumber ? 10 : null}
          value={email}
          onChangeText={setEmail}
          // error={errors.email}
          externalContainer={styles.marginTopStyle}
        />
        <CustomTextField
          keyboardType={'default'}
          placeholder={'enter password'}
          showSecure={true}
          placeholderTextColor={Colors.GRAY_DARK}
          title={'Password'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          error={errors.password}
        />
        <TouchableOpacity onPress={navigateToForgotPassword}>
          <Text style={styles.forgetPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <CommonButton
          externalFontStyle={styles.externalFontStyle}
          externalContainer={styles.loginContainer}
          title={'Login'}
          onPress={navigateToBottom}
        />
        <View style={styles.bottomContainer}>
          <Text style={styles.newCustomerFontStyle}>New Customer?</Text>
          <TouchableOpacity onPress={navigateToCreateAccount} activeOpacity={1}>
            <Text
              style={[styles.newCustomerFontStyle, {color: Colors.PRIMARY}]}>
              {' '}
              Create your new account
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
