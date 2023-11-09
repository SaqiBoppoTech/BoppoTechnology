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
  const { renderCreateAccount, navigateToOtp ,navigateToLogin } = CreateAccountHooks()
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
            showAsterisk={true}
            externalContainer={styles.marginTopStyle}
          />
          <CustomTextField
            keyboardType={'default'}
            placeholder={'Enter last name'}
            title={'Last Name'}
            showAsterisk={true}
            placeholderTextColor={Colors.GRAY_DARK}
            externalContainer={styles.marginTopStyle}
          />
          <CustomTextField
            keyboardType={'default'}
            placeholder={'Enter email id '}
            title={'Email ID'}
            showAsterisk={true}
            placeholderTextColor={Colors.GRAY_DARK}
            externalContainer={styles.marginTopStyle}
          />
          <CustomTextField
            keyboardType={'default'}
            placeholder={'Enter mobile number'}
            title={'Mobile Number'}
            showAsterisk={true}
            placeholderTextColor={Colors.GRAY_DARK}
            externalContainer={styles.marginTopStyle}
          />
          <CustomTextField
            keyboardType={'default'}
            placeholder={'Enter password'}
            title={'Password'}
            showAsterisk={true}
            placeholderTextColor={Colors.GRAY_DARK}
            externalContainer={styles.marginTopStyle}
          />
          <CustomTextField
            keyboardType={'default'}
            placeholder={'Re - enter password'}
            title={'Confirm Password'}
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
