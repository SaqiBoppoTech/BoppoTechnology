import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import CommonButton from '../../components/Button/CommonButton';
import Square from '../../components/MessageContainer/MessageContainer';
import {styles} from './CreateAccountStyle';
import CustomTextField from '../../components/CustomTextField/CustomTextFieldComponent';
import { LOGIN_SCREEN } from '../../global/screeenName';

const CreateAccountScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>Create New Account</Text>
        <View style={styles.box}>
          <Square title={'Business'} textColor={'#000'} color={'#fff'} />
          <Square title={'Retailer'} textColor={'#fff'} color={'#585858'} />
        </View>

        <CustomTextField
          keyboardType={'default'}
          placeholder={'Enter first name'}
          title={'First Name'}
          showAsterisk={true}
        />
        <CustomTextField
          keyboardType={'default'}
          placeholder={'Enter last name'}
          title={'Last Name'}
          showAsterisk={true}
        />
        <CustomTextField
          keyboardType={'default'}
          placeholder={'Enter email id '}
          title={'Email ID'}
          showAsterisk={true}
        />
        <CustomTextField
          keyboardType={'default'}
          placeholder={'Enter mobile number'}
          title={'Mobile Number'}
          showAsterisk={true}
        />
        <CustomTextField
          keyboardType={'default'}
          placeholder={'Enter password'}
          title={'Password'}
          showAsterisk={true}
        />
        <CustomTextField
          keyboardType={'default'}
          placeholder={'Re - enter password'}
          title={'Confirm Password'}
          showAsterisk={true}
        />

        <CustomTextField
          title={'Create my account'}
          onPress={() => {
            navigation.navigate('MobileOtpScreen');
          }}
        />

        <View style={styles.bottomContainer}>
          <Text style={styles.text}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(LOGIN_SCREEN);
            }}
            activeOpacity={1}>
            <Text style={styles.bottomText}> Login here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateAccountScreen;
