import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CommonButton from '../../components/Button/CommonButton';
import {styles} from './LoginStyle';
import {LoginHooks} from './LoginHooks';
import CustomTextField from '../../components/CustomTextField/CustomTextFieldComponent';
import {BOTTOM_TAB, CREATE_NEW_ACCOUNT, FORGET_PASSWORD_SCREEN} from '../../global/screeenName';

const LoginScreen = ({navigation}) => {
  const {
    handleLogin,
    setEmail,
    setPassword,
    setErrors,
    errors,
    email,
    password,
  } = LoginHooks();
  return (
    <ScrollView>
      <View style={{backgroundColor: '#fff'}}>
        <Image
          source={require('../../assets/images/login_img.png')}
          style={{width: '100%', height: 400}}
        />
        <Text style={styles.title}>Login into your account</Text>
        <CustomTextField
          keyboardType={'default'}
          placeholder={'enter email id / mobile number'}
          title={'Email ID / Mobile Number'}
          value={email}
          onChangeText={text => setEmail(text)}
          error={errors.email}
        />
        <CustomTextField
          keyboardType={'default'}
          placeholder={'enter password'}
          title={'Password'}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
          error={errors.password}
        />

        <CommonButton
          title={'Login'}
          onPress={() => {
            navigation.navigate(BOTTOM_TAB);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(FORGET_PASSWORD_SCREEN);
          }}>
          <Text style={styles.forgetPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
          <Text style={styles.forgetPassword}>New Customer?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(CREATE_NEW_ACCOUNT);
            }}
            activeOpacity={1}>
            <Text style={styles.bottomText}> Create your new account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
