import {ScrollView, View} from 'react-native';
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
          <CustomCheckbox
            title={'Apply as Default Address'}
            isCheckBox={defaultAddress}
            onToggle={(type, isChecked) => {
              console.log('pppppppppppppppp', isChecked, 'dss', type);
              if (isChecked) {
                setDefaultAddress(true);
                console.log('issisiisisisis', defaultAddress);
              } else {
                setDefaultAddress(false);
                console.log('000000000000000', defaultAddress);
              }
            }}
          />
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
