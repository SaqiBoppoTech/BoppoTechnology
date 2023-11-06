import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import SearchAppBar from '../../components/AppBar/SearchAppBar';
import CommonButton from '../../components/Button/CommonButton';
import {styles} from './AddNewAddressStyle';
import CustomTextField from '../../components/CustomTextField/CustomTextFieldComponent';
import {DELIEVERY_ADDRESS} from '../../global/screeenName';

const AddNewAddress = ({navigation}) => {
  const redirect = useNavigation();
  const handleGoBack = () => {
    redirect.goBack();
  };
  return (
    <View style={styles.mainView}>
      <SearchAppBar
        title={'Add Addresses'}
        onPress={() => {
          handleGoBack();
        }}
      />
      <CustomTextField
        keyboardType={'default'}
        placeholder={'Street	1221 W Boise Ave, Boise,	Illinois'}
        title={'Street Address'}
      />
      <CustomTextField
        keyboardType={'default'}
        placeholder={'Boise'}
        title={'City'}
      />
      <CustomTextField
        keyboardType={'default'}
        placeholder={'Illinois'}
        title={'State'}
      />
      {/* <CountryDropdownComponent /> */}

      <CustomTextField
        keyboardType={'default'}
        placeholder={'enter zip code'}
        title={'Zip / Post Code'}
      />

      <View style={styles.btn}>
        <CommonButton
          title={'Save'}
          onPress={() => {
            navigation.navigate(DELIEVERY_ADDRESS);
          }}
        />
      </View>
      {/* <View style={styles.titleWrapper}>
        <CustomCheckbox title={'Apply as Billing Address'} />
        <CustomCheckbox title={'Apply as Delivery Address'} />
      </View> */}
    </View>
  );
};

export default AddNewAddress;
