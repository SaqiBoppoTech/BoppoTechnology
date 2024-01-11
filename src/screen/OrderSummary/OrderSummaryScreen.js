import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {styles} from './OrderSummaryStyles';
import CheckoutNavigationBar from '../../components/CheckoutNavigationBar/CheckoutNavigationBar';
import AddressContainerComponenet from '../../components/AddressContainer/AddressContainerComponent';
import CommonButton from '../../components/Button/CommonButton';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import OrderSummaryHooks from './OrderSummaryHooks';
import ApplyCode from '../../components/ApplyCode/ApplyCode';
import PaymentDetails from '../../components/PaymentDetails/PaymentDetails';
import {Colors} from '../../global';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import BlackIncremnetButton from '../../components/BlackIncrementButton/BlackIncrementButton';

const OrderSummary = () => {
  const {
    handleGoBack,
    onAddNewBillingAddress,
    onAddNewDeliveryAddress,
    navigateToPayment,
    checkoutInfo,
    onChangeDeliveryAddress,
    cartListData,
  } = OrderSummaryHooks();

  console.log('datatatatatta', checkoutInfo);

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

  const cartAddedItem = cartListData || [];

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

  const renderItem = ({item}) => {
    console.log('item', item);
    return (
      <View style={styles.renderMainView}>
        <View style={{...styles.imageViewWrapper, alignItems: 'center'}}>
          <View>
            {item.product_variant.shop_product_media.url != '/url' ? (
              <Image
                source={{
                  uri: `https://cdn-stage.boppogo.com/${item.product_variant.shop_product_media.url}`,
                }}
                style={styles.imageWrapper}
              />
            ) : (
              <Image
                resizeMode="contain"
                source={require('../../assets/images/Logo.png')}
                style={{
                  ...styles.imageWrapper,
                  height: CHANGE_BY_MOBILE_DPI(50),
                  alignSelf: 'center',
                }}
              />
            )}
          </View>
          <View style={styles.containWrapper}>
            <Text style={styles.name}>{item.product.title}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{item.product_variant.price} ₹</Text>
              <Text style={styles.discount}>
                {item.product_variant.compare_price}₹
              </Text>
            </View>
            <Text style={styles.quantity}>1 Qty</Text>
            <BlackIncremnetButton />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainView}>
      <FocusAwareStatusBar barColor={Colors.CONCRETE} />
      <SearchAppBar title={'Checkout'} onPress={handleGoBack} />
      <CheckoutNavigationBar />
      <ScrollView>
        <Text style={styles.text}>Delivery Address</Text>
        <AddressContainerComponenet
          showIconRight={false}
          typeOfAddress={'Default'}
          showLine={false}
          addressline1={shippingAddressData.address_line1}
          city={shippingAddressData.city}
          province={shippingAddressData.province}
          zipcode={shippingAddressData.zipcode}
          name={shippingAddressData.recepient_name}
        />
        <View style={styles.addressbtnStyle}>
          <CommonButton
            color={Colors.BLACK}
            externalCustomButtonStyle={styles.externalCustomButtonStyle}
            externalContainer={styles.loginContainer}
            externalFontStyle={styles.externalFontStyle}
            title={'Change Address'}
            onPress={onChangeDeliveryAddress}
          />
        </View>
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
        {/* <ShippingMethod />
        <View style={styles.line} />
        <ShippingType /> */}
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
          showIconRight={false}
          typeOfAddress={'Default'}
          showLine={false}
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
        <FlatList
          data={cartListData}
          renderItem={renderItem}
          keyExtractor={item => item.key}
          showsHorizontalScrollIndicator={false}
        />
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
