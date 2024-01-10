import {View} from 'react-native';
import React from 'react';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import CommonButton from '../../components/Button/CommonButton';
import {styles} from './MyAddressStyle';
import AddressTypeComponent from '../../components/AddressType/AddressTypeComponent';
import MyAddressHooks from './MyAddressHooks';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors} from '../../global';

const MyAddressScreen = () => {
  const {
    handleGoBack,
    navigateToAddToNewAddress,
    navigateToBillingScreen,
    navigateToDeliveryScreen,
  } = MyAddressHooks();
  return (
    <View style={styles.main}>
      <FocusAwareStatusBar barColor={Colors.CONCRETE} />
      <SearchAppBar title={'My Addresses'} onPress={handleGoBack} />
      <View style={styles.marginWrapper}>
        <AddressTypeComponent
          showDefault={false}
          title={'Delivery Address'}
          onPress={navigateToDeliveryScreen}
        />
      </View>

      <AddressTypeComponent
        showDefault={false}
        title={'Billing Address'}
        onPress={navigateToBillingScreen}
      />
      <View style={styles.btn}>
        <CommonButton
          title={'Add New Address'}
          onPress={navigateToAddToNewAddress}
          externalFontStyle={styles.externalFontStyle}
          externalContainer={styles.loginContainer}
        />
      </View>
    </View>
  );
};

export default MyAddressScreen;
