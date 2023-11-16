import React from 'react';
import {View, ScrollView} from 'react-native';
import CommonButton from '../../components/Button/CommonButton';
import {styles} from './EditProfileStyle';
import CustomTextField from '../../components/CustomTextField/CustomTextFieldComponent';
import EditProfileHooks from './EditProfileHooks';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import {Colors} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

const EditProfileScreen = () => {
  const {handleGoBack, onSubmit} = EditProfileHooks();
  return (
    <View style={styles.mainView}>
      <FocusAwareStatusBar barColor={Colors.CONCRETE} />
      <SearchAppBar title={'Edit Profile'} onPress={handleGoBack} />
      <ScrollView style={styles.bg}>
        <CustomTextField
          keyboardType={'default'}
          placeholder={'enter first name'}
          placeholderTextColor={Colors.GRAY_DARK}
          title={'First Name'}
          showAsterisk={true}
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
          externalContainer={styles.space}
        />

        <CustomTextField
          keyboardType={'default'}
          placeholder={'enter email id'}
          placeholderTextColor={Colors.GRAY_DARK}
          title={'Email ID'}
          showAsterisk={true}
          externalContainer={styles.space}
        />
        <CustomTextField
          keyboardType={'default'}
          placeholder={'enter mobile number'}
          placeholderTextColor={Colors.GRAY_DARK}
          title={'Mobile Number'}
          externalContainer={styles.space}
        />

        <CustomTextField
          keyboardType={'default'}
          placeholder={'enter password'}
          placeholderTextColor={Colors.GRAY_DARK}
          title={'Password'}
          showSecure={true}
        />
      </ScrollView>
      <View style={styles.btn}>
        <CommonButton
          title={'Submit'}
          onPress={onSubmit}
          externalFontStyle={styles.externalFontStyle}
          externalContainer={styles.loginContainer}
        />
      </View>
    </View>
  );
};

export default EditProfileScreen;
