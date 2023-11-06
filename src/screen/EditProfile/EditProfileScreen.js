import React from 'react';
import {View, ScrollView} from 'react-native';
import CommonButton from '../../components/Button/CommonButton';
import {styles} from './EditProfileStyle';
import CustomTextField from '../../components/CustomTextField/CustomTextFieldComponent';

const EditProfileScreen = ({navigation}) => {
  return (
    <View style={styles.mainView}>
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
          onPress={() => {
            navigation.navigate();
          }}
        />
      </View>
    </View>
  );
};

export default EditProfileScreen;
