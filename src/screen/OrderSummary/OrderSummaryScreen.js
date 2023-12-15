import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import {styles} from './OrderSummaryStyles';
import CheckoutNavigationBar from '../../components/CheckoutNavigationBar/CheckoutNavigationBar';
import AddressContainerComponenet from '../../components/AddressContainer/AddressContainerComponent';
import CommonButton from '../../components/Button/CommonButton';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import OrderSummaryHooks from './OrderSummaryHooks';
import ShippingMethod from '../../components/ShippingMethod/ShippingMethod';
import ShippingType from '../../components/ShippingType/ShippingType';
import ApplyCode from '../../components/ApplyCode/ApplyCode';
import PaymentDetails from '../../components/PaymentDetails/PaymentDetails';
import {Colors} from '../../global';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';

const OrderSummary = () => {
  const {
    handleGoBack,
    onAddNewBillingAddress,
    onAddNewDeliveryAddress,
    onEditClick,
    onRemoveClick,
    navigateToPayment,
  } = OrderSummaryHooks();
  return (
    <View style={styles.mainView}>
      <FocusAwareStatusBar barColor={Colors.CONCRETE} />
      <SearchAppBar title={'Checkout'} onPress={handleGoBack} />
      <CheckoutNavigationBar />
      <ScrollView>
        <Text style={styles.text}>Delivery Address</Text>
        <AddressContainerComponenet
          showIconRight={true}
          typeOfAddress={'Default'}
          showLine={false}
          onEditPress={onEditClick}
          onRemovePress={onRemoveClick}
        />
        <View style={styles.addressbtnStyle}>
          <CommonButton
            color={Colors.BLACK}
            externalCustomButtonStyle={styles.externalCustomButtonStyle}
            externalContainer={styles.loginContainer}
            externalFontStyle={styles.externalFontStyle}
            title={'Add New Delivery Address'}
            onPress={onAddNewDeliveryAddress}
          />
        </View>
        <View style={styles.underLine}></View>
        <ShippingMethod />
        <View style={styles.line} />
        <ShippingType />
        <ApplyCode />
        <PaymentDetails />

        <Text style={styles.text}>Billing Address</Text>
        <AddressContainerComponenet
          showIconRight={true}
          typeOfAddress={'Default'}
          showLine={false}
          onEditPress={onEditClick}
          onRemovePress={onRemoveClick}
        />
        <View style={styles.addressbtnStyle}>
          <CommonButton
            title={'Add New Billing Address'}
            onPress={onAddNewBillingAddress}
            externalFontStyle={styles.externalFontStyle}
            externalContainer={styles.loginContainer}
          />
        </View>
        <View style={styles.btn}>
          <CommonButton
            title={'Continue'}
            onPress={navigateToPayment}
            externalFontStyle={styles.externalFontStyle}
            externalContainer={styles.loginContainer}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderSummary;
