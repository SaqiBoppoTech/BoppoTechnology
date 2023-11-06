import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import CommonButton from '../../components/Button/CommonButton';
import SearchAppBar from '../../components/AppBar/SearchAppBar';
import {useNavigation} from '@react-navigation/native';
import {styles} from './ContactUsStyle';
import CustomTextField from '../../components/CustomTextField/CustomTextFieldComponent';

const ContactUsScreen = () => {
  const redirect = useNavigation();
  const handleGoBack = () => {
    redirect.goBack();
  };
  return (
    <View style={styles.mainView}>
      <SearchAppBar
        title={'Contact us'}
        onPress={() => {
          handleGoBack();
        }}
      />
      <View style={styles.containerWrapper}>
        <CustomTextField placeholder={'enter your name'} title={'Your Name'} />

        <CustomTextField
          placeholder={'enter your email id'}
          title={'Your Email ID'}
        />
        <View style={styles.titleview}>
          <Text style={styles.title}>Your Message</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder={'Enter message'}
          placeholderTextColor="#808080"
        />
      </View>
      <View style={styles.btn}>
        <CommonButton title={'Send Message'} />
      </View>
    </View>
  );
};

export default ContactUsScreen;
