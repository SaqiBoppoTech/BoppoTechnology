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
  const {handleGoBack, navigateToDeliveryAddress} = AddNewAddressHooks();

  return (
    <View style={styles.mainView}>
      <FocusAwareStatusBar barColor={Colors.WHITE} />
      <SearchAppBar title={'Add Addresses'} onPress={handleGoBack} />
      <ScrollView style={styles.margin}>
        <CustomTextField
          keyboardType={'default'}
          placeholder={'Street	1221 W Boise Ave, Boise,	Illinois'}
          title={'Street Address'}
          placeholderTextColor={Colors.GRAY_DARK}
        />
        <CustomTextField
          keyboardType={'default'}
          placeholder={'Boise'}
          title={'City'}
          placeholderTextColor={Colors.GRAY_DARK}
        />
        <CustomTextField
          keyboardType={'default'}
          placeholder={'Illinois'}
          title={'State'}
          placeholderTextColor={Colors.GRAY_DARK}
        />
        <CountryDropdownComponent />

        <CustomTextField
          keyboardType={'default'}
          placeholder={'enter zip code'}
          title={'Zip / Post Code'}
          placeholderTextColor={Colors.GRAY_DARK}
        />

        <View style={styles.titleWrapper}>
          <CustomCheckbox title={'Apply as Billing Address'} />
          <CustomCheckbox title={'Apply as Delivery Address'} />
        </View>
        <View style={styles.btn}>
          <CommonButton
            title={'Save'}
            onPress={navigateToDeliveryAddress}
            externalFontStyle={styles.externalFontStyle}
            externalContainer={styles.loginContainer}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default AddNewAddress;
