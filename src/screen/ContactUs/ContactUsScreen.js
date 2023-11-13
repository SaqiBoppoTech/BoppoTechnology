import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import CommonButton from '../../components/Button/CommonButton';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import {styles} from './ContactUsStyle';
import CustomTextField from '../../components/CustomTextField/CustomTextFieldComponent';
import ConatctUsHooks from './ContactUsHooks';
import {Colors} from '../../global';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';

const ContactUsScreen = () => {
  const {handleGoBack, navigateToProfile} = ConatctUsHooks();
  return (
    <View style={styles.mainView}>
      <FocusAwareStatusBar barColor={Colors.WHITE} />
      <SearchAppBar title={'Contact Us'} onPress={handleGoBack} />
      <View style={styles.containerWrapper}>
        <CustomTextField
          placeholder={'enter your name'}
          title={'Your Name'}
          placeholderTextColor={Colors.GRAY_DARK}
        />

        <CustomTextField
          placeholder={'enter your email id'}
          title={'Your Email ID'}
          placeholderTextColor={Colors.GRAY_DARK}
        />
        {/* <View style={styles.titleview}>
          <Text style={styles.title}>Your Message</Text>
        </View> */}
        <CustomTextField
          placeholder={'enter message'}
          title={'Your Message'}
          placeholderTextColor={Colors.GRAY_DARK}
        />
        {/* <TextInput
          style={styles.input}
          placeholder={'Enter message'}
          placeholderTextColor={Colors.GRAY_DARK}
        /> */}
      </View>
      <View style={styles.btn}>
        <CommonButton title={'Send Message'} onPress={navigateToProfile} />
      </View>
    </View>
  );
};

export default ContactUsScreen;
