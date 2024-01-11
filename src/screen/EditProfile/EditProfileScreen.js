import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import CommonButton from '../../components/Button/CommonButton';
import {styles} from './EditProfileStyle';
import CustomTextField from '../../components/CustomTextField/CustomTextFieldComponent';
import EditProfileHooks from './EditProfileHooks';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import {Colors} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomAlert from '../../components/CommonApert';

const EditProfileScreen = () => {
  const {
    handleGoBack,
    onSubmit,
    navigateToChangePassword,
    firstName,
    setfirstName,
    lastname,
    setLastname,
    contactNo,
    setContactNo,
    email,
    setEmail,
    navigateToSuccessScreen,
    navigateToVerifyMobileNumberScreen,
    dateOfBirth,
    setDateOfBirth,
    gender,
    setGender,
    toastAlertText,
    isToastAlertVisible,
    setToastAlertVisible
  } = EditProfileHooks();

  return (
    <View style={styles.mainView}>
      <FocusAwareStatusBar barColor={Colors.WHITE} />
      <SearchAppBar title={'Edit Profile'} onPress={handleGoBack} />
      <ScrollView style={styles.bg}>
        <CustomTextField
          keyboardType={'default'}
          placeholder={'enter first name'}
          placeholderTextColor={Colors.GRAY_DARK}
          title={'First Name'}
          showAsterisk={true}
          value={firstName}
          onChangeText={setfirstName}
          externalContainer={{
            ...styles.space,
            marginTop: CHANGE_BY_MOBILE_DPI(5),
          }}
        />

        <CustomTextField
          keyboardType={'default'}
          placeholder={'enter last name'}
          placeholderTextColor={Colors.GRAY_DARK}
          title={'Last Name'}
          showAsterisk={true}
          value={lastname}
          onChangeText={setLastname}
          externalContainer={styles.space}
        />

        <CustomTextField
          keyboardType={'default'}
          placeholder={'enter email id'}
          placeholderTextColor={Colors.GRAY_DARK}
          title={'Email ID'}
          showAsterisk={true}
          externalContainer={styles.space}
          value={email}
          onChangeText={setEmail}
        />
        <CustomTextField
          keyboardType={'default'}
          placeholder={'enter mobile number'}
          placeholderTextColor={Colors.GRAY_DARK}
          title={'Mobile Number'}
          externalContainer={styles.space}
          value={contactNo}
          onChangeText={setContactNo}
          showSuffixText={true}
          suffixText={'Verify Number'}
          onPressSuffixText={navigateToVerifyMobileNumberScreen}
        />

        <CustomTextField
          keyboardType={'default'}
          placeholder={'enter date of birth as yyyy-mm-dd'}
          placeholderTextColor={Colors.GRAY_DARK}
          title={'Date of Birth'}
          showAsterisk={true}
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
          externalContainer={styles.space}
        />

        <CustomTextField
          keyboardType={'default'}
          placeholder={'enter your gender'}
          placeholderTextColor={Colors.GRAY_DARK}
          title={'Gender'}
          showAsterisk={true}
          value={gender}
          onChangeText={setGender}
          externalContainer={styles.space}
        />

        <CustomTextField
          keyboardType={'default'}
          placeholder={'......'}
          placeholderTextColor={Colors.GRAY_DARK}
          title={'Password'}
          editable={false}
          showSecure={true}
          showSuffixText={true}
          suffixText={'Change Password'}
          onPressSuffixText={navigateToChangePassword}
          externalContainer={{
            ...styles.space,
            marginTop: CHANGE_BY_MOBILE_DPI(5),
          }}
        />
      </ScrollView>
      <View style={styles.btn}>
        <CommonButton
          title={'Submit'}
          onPress={navigateToSuccessScreen}
          externalFontStyle={styles.externalFontStyle}
          externalContainer={styles.loginContainer}
        />
      </View>
      <CustomAlert
        visible={isToastAlertVisible}
        message={toastAlertText}
        onClose={() => setToastAlertVisible(false)}
      />
    </View>
  );
};

export default EditProfileScreen;
