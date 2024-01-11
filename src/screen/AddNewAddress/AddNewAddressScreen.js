import {ScrollView, TouchableOpacity, View, Text} from 'react-native';
import React, {useEffect} from 'react';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import CommonButton from '../../components/Button/CommonButton';
import {styles} from './AddNewAddressStyle';
import CustomTextField from '../../components/CustomTextField/CustomTextFieldComponent';
import AddNewAddressHooks from './AddNewAddressHooks';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors} from '../../global';
import CountryDropdownComponent from '../../components/CountryDropDown/CountryDropDownComponent';
import CustomCheckbox from '../../components/CustomCheckBox/CustomCheckBox';
import Check from '../../assets/svgs/Check.svg';

const AddNewAddress = () => {
  const {
    saveAddress,
    handleGoBack,
    addressLine1,
    setAddressLine1,
    city,
    setCity,
    province,
    setProvince,
    zipCode,
    setZipCode,
    typeOfAddress,
    setTypeOfAddress,
    defaultAddress,
    setDefaultAddress,
    addressId,
    editAddress,
    name,
    setName,
    contact,
    setContact,
  } = AddNewAddressHooks();

  console.log('..................', typeOfAddress);

  const handleToggle = () => {
    setDefaultAddress(!defaultAddress);
    console.log('yess default is', defaultAddress);
  };

  return (
    <View style={styles.mainView}>
      <FocusAwareStatusBar barColor={Colors.CONCRETE} />
      <SearchAppBar title={'Add Address'} onPress={handleGoBack} />
      <ScrollView style={styles.margin}>
        <CustomTextField
          value={name}
          onChangeText={setName}
          keyboardType={'default'}
          placeholder={'Name'}
          title={'Name'}
          placeholderTextColor={Colors.GRAY_DARK}
          externalContainer={styles.space}
        />
        <CustomTextField
          value={contact}
          onChangeText={setContact}
          keyboardType={'phone-pad'}
          placeholder={'9876543212'}
          title={'Contact Number'}
          maxLenght={10}
          placeholderTextColor={Colors.GRAY_DARK}
          externalContainer={styles.space}
        />
        <CustomTextField
          value={addressLine1}
          onChangeText={setAddressLine1}
          keyboardType={'default'}
          placeholder={'Street	1221 W Boise Ave, Boise,	Illinois'}
          title={'Street Address'}
          placeholderTextColor={Colors.GRAY_DARK}
          externalContainer={styles.space}
        />
        <CustomTextField
          value={city}
          onChangeText={setCity}
          keyboardType={'default'}
          placeholder={'Boise'}
          title={'City'}
          placeholderTextColor={Colors.GRAY_DARK}
          externalContainer={styles.space}
        />
        <CustomTextField
          value={province}
          onChangeText={setProvince}
          keyboardType={'default'}
          placeholder={'Illinois'}
          title={'State'}
          placeholderTextColor={Colors.GRAY_DARK}
          externalContainer={styles.space}
        />
        {/* <CountryDropdownComponent /> */}

        <CustomTextField
          value={zipCode}
          onChangeText={setZipCode}
          keyboardType={'phone-pad'}
          placeholder={'enter zip code'}
          title={'Zip / Post Code'}
          maxLenght={6}
          placeholderTextColor={Colors.GRAY_DARK}
          externalContainer={styles.space}
        />

        <View style={styles.titleWrapper}>
          <CustomCheckbox
            title={'Apply as Billing Address'}
            isCheckBox={typeOfAddress == 'Billing' ? true : false}
            type={'Billing'}
            onToggle={(type, isChecked) => {
              if (isChecked) {
                setTypeOfAddress(type);
              } else {
                setTypeOfAddress(null);
              }
            }}
          />
          <CustomCheckbox
            title={'Apply as Delivery Address'}
            isCheckBox={typeOfAddress == 'Shipping' ? true : false}
            type={'Shipping'}
            onToggle={(type, isChecked) => {
              console.log(
                'aaaaaaaaaaaapppppppppp',
                type,
                'aaaaaaaaaaaa',
                isChecked,
              );

              if (isChecked) {
                setTypeOfAddress(type);
              } else {
                setTypeOfAddress(null);
              }
            }}
          />

          <View style={styles.checkMainView}>
            <TouchableOpacity
              style={[styles.checkbox, defaultAddress ? styles.checked : null]}
              onPress={handleToggle}>
              <View style={styles.checkWrapper}>
                {defaultAddress && <Check width="14" height="14" />}
              </View>
            </TouchableOpacity>
            <Text style={styles.Checktext}>Apply as Default Address</Text>
          </View>

          {/* <CustomCheckbox
            title={'Apply as Default Address'}
            isCheckBox={defaultAddress}
            onToggle={(type, isChecked) => {
              console.log('isChecked', isChecked, 'type', type);
              if (isChecked) {
                setDefaultAddress(false);
                console.log('selected ', defaultAddress);
              } else {
                setDefaultAddress(true);
                console.log('not selected ', defaultAddress);
              }
            }}
          /> */}
        </View>
        <View style={styles.btn}>
          <CommonButton
            title={'Save'}
            onPress={addressId ? editAddress : saveAddress}
            externalFontStyle={styles.externalFontStyle}
            externalContainer={styles.loginContainer}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default AddNewAddress;
