import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import {styles} from './OrderSummaryStyles';
import CheckoutNavigationBar from '../../components/CheckoutNavigationBar/CheckoutNavigationBar';
import AddressContainerComponenet from '../../components/AddressContainer/AddressContainerComponent';
import CommonButton from '../../components/Button/CommonButton';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import OrderSummaryHooks from './OrderSummaryHooks';

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
            title={'Add New Delivery Address'}
            onPress={onAddNewDeliveryAddress}
            externalFontStyle={styles.externalFontStyle}
            externalContainer={styles.loginContainer}
          />
        </View>

        {/* <PaymentDetail />
        <ShippingMethod />
        <ApplyCode /> */}

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
        <CommonButton
          title={'Continue'}
          onPress={navigateToPayment}
          externalFontStyle={styles.externalFontStyle}
          externalContainer={styles.loginContainer}
        />
      </ScrollView>
    </View>
  );
};

export default OrderSummary;
