import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import CommonButton from '../../components/Button/CommonButton';
import {useNavigation} from '@react-navigation/native';
import SearchAppBar from '../../components/AppBar/SearchAppBar';
import {styles} from './SellWithUsStyle';
import CustomTextField from '../../components/CustomTextField/CustomTextFieldComponent';

const SellWithUsScreen = ({navigation}) => {
  const redirect = useNavigation();
  const handleGoBack = () => {
    redirect.goBack();
  };
  return (
    <View style={{flex: 1}}>
      <SearchAppBar
        title={'Sell With Us'}
        onPress={() => {
          handleGoBack();
        }}
      />
      <ScrollView>
        <View style={styles.mainView}>
          <CustomTextField
            title={'Full Name'}
            showAsterisk={true}
            placeholder={'enter full name'}
          />
          <CustomTextField
            title={'Business Email ID'}
            showAsterisk={true}
            placeholder={'ednasparro@gmail.com'}
          />
          <CustomTextField
            title={'Mobile Number'}
            placeholder={'+ 00 8380000000'}
          />
          <CustomTextField
            title={'Zip / Post Code'}
            placeholder={'enter zip code'}
          />
          <CustomTextField title={'City'} placeholder={'enter city'} />
          <CustomTextField title={'State'} placeholder={'enter state'} />

          <Text style={styles.businessHeader}>YOUR BUSINESS DETAILS-</Text>
          <CustomTextField title={'Company Type'} placeholder={'enter type'} />
          <CustomTextField title={'Company Name'} placeholder={'enter name'} />
          <CustomTextField
            title={'Company Address'}
            placeholder={'enter company address'}
          />
          <CustomTextField
            title={'Business Mobile No.'}
            placeholder={'enter business phone number'}
          />
        </View>
      </ScrollView>
      <View style={styles.btn}>
        <CommonButton onPress={() => {}} title={'Submit'} />
      </View>
    </View>
  );
};

export default SellWithUsScreen;
