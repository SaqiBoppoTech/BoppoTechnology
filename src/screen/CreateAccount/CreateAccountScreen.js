import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import CommonButton from '../../components/Button/CommonButton';
import { styles } from './CreateAccountStyle';
import CustomTextField from '../../components/CustomTextField/CustomTextFieldComponent';
import CustomAppBar from '../../components/AppBar/CustomAppBar';
import { STATIC_DATA } from '../../global/staticdata';
import { CreateAccountHooks } from './CreateAccountHooks';
import { Colors } from '../../global';

const CreateAccountScreen = () => {
  const { renderCreateAccount, navigateToOtp ,navigateToLogin ,
    firstName, setfirstName,
    lastName, setLastName,
    email, setEmail,
    mobileNumber,setMobileNumber,
    password, setPassword,
    confirmPassword, setConfirmPassword} = CreateAccountHooks()
  return (
    <View style={styles.mainContainer}>
      <CustomAppBar />
      <ScrollView>
        <View style={styles.subContainer}>
          <Text style={styles.title}>Create New Account</Text>
          <View style={styles.box}>
            <FlatList horizontal scrollEnabled={false} data={STATIC_DATA.createAccountData} renderItem={renderCreateAccount} />
          </View>
          <CustomTextField
            keyboardType={'default'}
            placeholder={'Enter first name'}
            placeholderTextColor={Colors.GRAY_DARK}
            title={'First Name'}
            onChangeText={setfirstName}
            value={firstName}
            showAsterisk={true}
            externalContainer={styles.marginTopStyle}
          />
          <CustomTextField
            keyboardType={'default'}
            placeholder={'Enter last name'}
            title={'Last Name'}
            onChangeText={setLastName}
            value={lastName}
            showAsterisk={true}
            placeholderTextColor={Colors.GRAY_DARK}
            externalContainer={styles.marginTopStyle}
          />
          <CustomTextField
            keyboardType={'default'}
            placeholder={'Enter email id '}
            title={'Email ID'}
            onChangeText={setEmail}
            value={email}
            showAsterisk={true}
            placeholderTextColor={Colors.GRAY_DARK}
            externalContainer={styles.marginTopStyle}
          />
          <CustomTextField
            keyboardType={'phone-pad'}
            placeholder={'Enter mobile number'}
            title={'Mobile Number'}
            onChangeText={setMobileNumber}
            value={mobileNumber}
            maxLenght={10}
            showAsterisk={true}
            placeholderTextColor={Colors.GRAY_DARK}
            externalContainer={styles.marginTopStyle}
          />
          <CustomTextField
            keyboardType={'default'}
            placeholder={'Enter password'}
            title={'Password'}
            onChangeText={setPassword}
            value={password}
            showAsterisk={true}
            placeholderTextColor={Colors.GRAY_DARK}
            externalContainer={styles.marginTopStyle}
          />
          <CustomTextField
            keyboardType={'default'}
            placeholder={'Re - enter password'}
            title={'Confirm Password'}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            showAsterisk={true}
            placeholderTextColor={Colors.GRAY_DARK}
            externalContainer={styles.marginTopStyle}
          />
          <CommonButton
            externalCustomButtonStyle={styles.externalCustomButtonStyle}
            externalContainer={styles.externalContainer}
            externalFontStyle={styles.externalFontStyle}
            title={'Create my account'}
            onPress={navigateToOtp}
          />
            <View style={styles.bottomContainer}>
          <Text style={styles.newCustomerFontStyle}>Already have an account?</Text>
          <TouchableOpacity
            onPress={navigateToLogin}
            activeOpacity={1}>
            <Text style={[styles.newCustomerFontStyle,{color:Colors.PRIMARY}]}> Login here</Text>
          </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateAccountScreen;
