import React from 'react';
import {View, ScrollView} from 'react-native';
import CommonButton from '../../components/Button/CommonButton';
import {styles} from './EditProfileStyle';
import CustomTextField from '../../components/CustomTextField/CustomTextFieldComponent';
import EditProfileHooks from './EditProfileHooks';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const EditProfileScreen = () => {
  const {handleGoBack, onSubmit} = EditProfileHooks();
  return (
    <View style={styles.mainView}>
      <FocusAwareStatusBar barColor={Colors.WHITE} />
      <SearchAppBar title={'Edit Profile'} onPress={handleGoBack} />
      <ScrollView style={styles.bg}>
        <View>
          <CustomTextField
            keyboardType={'default'}
            placeholder={''}
            title={'First Name'}
            showAsterisk={true}
          />

          <CustomTextField
            keyboardType={'default'}
            placeholder={''}
            title={'Last Name'}
            showAsterisk={true}
          />

          <CustomTextField
            keyboardType={'default'}
            placeholder={''}
            title={'Email ID'}
            showAsterisk={true}
          />
          <CustomTextField
            keyboardType={'default'}
            placeholder={'+00 1234567890'}
            title={'Mobile Number'}
          />

          <CustomTextField
            keyboardType={'default'}
            placeholder={''}
            title={'Password'}
            showSecure={true}
          />
        </View>
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
