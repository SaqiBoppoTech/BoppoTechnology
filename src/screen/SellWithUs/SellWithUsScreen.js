import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import CommonButton from '../../components/Button/CommonButton';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import {styles} from './SellWithUsStyle';
import CustomTextField from '../../components/CustomTextField/CustomTextFieldComponent';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors} from '../../global';
import SellWithUsHooks from './SellWithUsHooks';

const SellWithUsScreen = () => {
  const {handleGoBack, onSubmit} = SellWithUsHooks();
  return (
    <View style={styles.mainView}>
      <FocusAwareStatusBar barColor={Colors.CONCRETE} />
      <SearchAppBar title={'Sell With Us'} onPress={handleGoBack} />
      <ScrollView style={styles.scroll}>
        <CustomTextField
          title={'Full Name'}
          showAsterisk={true}
          placeholder={'enter full name'}
          placeholderTextColor={Colors.GRAY_DARK}
          externalContainer={styles.space}
        />
        <CustomTextField
          title={'Business Email ID'}
          showAsterisk={true}
          placeholder={'ednasparro@gmail.com'}
          placeholderTextColor={Colors.GRAY_DARK}
          externalContainer={styles.space}
        />
        <CustomTextField
          title={'Mobile Number'}
          placeholder={'+ 00 8380000000'}
          placeholderTextColor={Colors.GRAY_DARK}
          externalContainer={styles.space}
        />
        <CustomTextField
          title={'Zip / Post Code'}
          placeholder={'enter zip code'}
          placeholderTextColor={Colors.GRAY_DARK}
          externalContainer={styles.space}
        />
        <CustomTextField
          title={'City'}
          placeholder={'enter city'}
          placeholderTextColor={Colors.GRAY_DARK}
          externalContainer={styles.space}
        />
        <CustomTextField
          title={'State'}
          placeholder={'enter state'}
          placeholderTextColor={Colors.GRAY_DARK}
          externalContainer={styles.space}
        />

        <Text style={styles.businessHeader}>YOUR BUSINESS DETAILS-</Text>
        <CustomTextField
          title={'Company Type'}
          placeholder={'enter type'}
          placeholderTextColor={Colors.GRAY_DARK}
          externalContainer={styles.space}
        />
        <CustomTextField
          title={'Company Name'}
          placeholder={'enter name'}
          placeholderTextColor={Colors.GRAY_DARK}
          externalContainer={styles.space}
        />
        <CustomTextField
          title={'Company Address'}
          placeholder={'enter company address'}
          placeholderTextColor={Colors.GRAY_DARK}
          externalContainer={styles.space}
        />
        <CustomTextField
          title={'Business Mobile No.'}
          placeholder={'enter business phone number'}
          placeholderTextColor={Colors.GRAY_DARK}
          externalContainer={styles.space}
        />
      </ScrollView>
      <View style={styles.btn}>
        <CommonButton onPress={onSubmit} title={'Submit'} />
      </View>
    </View>
  );
};

export default SellWithUsScreen;
