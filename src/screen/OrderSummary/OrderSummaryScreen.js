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
    checkoutInfo,
    setShowList,
    showList,
  } = OrderSummaryHooks();

  console.log('datatatatatta', checkoutInfo);
  const handleButtonPress = () => {
    setShowList(!showList);
  };

  const checkInfoData = checkoutInfo?.checkoutDetails || [];
  const shippingAddressData =
    checkoutInfo?.checkoutDetails[0]?.shop_customer_checkout
      ?.shop_customer_shipping_address || {};
  const billingAddressData =
    checkoutInfo?.checkoutDetails[0]?.shop_customer_checkout
      ?.shop_customer_billing_address || {};
  const productPaymentDetail =
    checkoutInfo?.checkoutDetails[0]?.shop_customer_checkout || {};

  const discountAmount =
    productPaymentDetail.total_price - productPaymentDetail.sub_total_price;

  console.log('================================', checkInfoData);
  console.log(
    '++++++++++++++++++++++++++++++++ shippingAddress data ',
    shippingAddressData,
  );
  console.log(
    '-------------------------------- billingAddress data ',
    billingAddressData,
  );
  console.log(
    '********************************* payment data ',
    productPaymentDetail,
  );

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
          addressline1={shippingAddressData.address_line1}
          city={shippingAddressData.city}
          province={shippingAddressData.province}
          zipcode={shippingAddressData.zipcode}
          name={shippingAddressData.recepient_name}
        />
        {/* <CommonButton
          title={'Change address'}
          onPress={handleButtonPress}
          externalFontStyle={styles.externalFontStyle}
          externalContainer={styles.loginContainer}
        /> */}

        {/* {showList && (
          <View
            style={{height: 100, width: '100%', backgroundColor: 'red'}}></View>
        )} */}

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
        <PaymentDetails
          productCost={productPaymentDetail.total_price}
          discount={discountAmount}
          subTotal={productPaymentDetail.sub_total_price}
          tax={productPaymentDetail.tax}
          shippingCost={'0'}
          totalAmount={productPaymentDetail.sub_total_price}
        />

        <Text style={styles.text}>Billing Address</Text>
        <AddressContainerComponenet
          showIconRight={true}
          typeOfAddress={'Default'}
          showLine={false}
          onEditPress={onEditClick}
          onRemovePress={onRemoveClick}
          addressline1={billingAddressData.address_line1}
          city={billingAddressData.city}
          province={billingAddressData.province}
          zipcode={billingAddressData.zipcode}
          name={billingAddressData.recepient_name}
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
