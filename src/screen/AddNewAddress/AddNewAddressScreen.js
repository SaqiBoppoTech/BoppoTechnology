import {ScrollView, View} from 'react-native';
import React from 'react';
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
    navigateToDeliveryAddress,
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
    setAsDefault,
    setsetAsDefault,
  } = AddNewAddressHooks();

  return (
    <View style={styles.mainView}>
      <FocusAwareStatusBar barColor={Colors.CONCRETE} />
      <SearchAppBar title={'Add Address'} onPress={handleGoBack} />
      <ScrollView style={styles.margin}>
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
        <CountryDropdownComponent />

        <CustomTextField
          value={zipCode}
          onChangeText={setZipCode}
          keyboardType={'default'}
          placeholder={'enter zip code'}
          title={'Zip / Post Code'}
          placeholderTextColor={Colors.GRAY_DARK}
          externalContainer={styles.space}
        />

        <View style={styles.titleWrapper}>
          <CustomCheckbox
            title={'Apply as Billing Address'}
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
            type={'Shipping'}
            onToggle={(type, isChecked) => {
              if (isChecked) {
                setTypeOfAddress(type);
              } else {
                setTypeOfAddress(null);
              }
            }}
          />
        </View>
        <View style={styles.btn}>
          <CommonButton
            title={'Save'}
            onPress={saveAddress}
            externalFontStyle={styles.externalFontStyle}
            externalContainer={styles.loginContainer}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default AddNewAddress;
