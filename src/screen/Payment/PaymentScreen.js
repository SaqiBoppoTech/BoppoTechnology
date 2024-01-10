import React, {useState, useEffect, useCallback} from 'react';
import PaymentMethod from '../../components/PaymentMethod/PaymentMethod';
import PaymentDetails from '../../components/PaymentDetails/PaymentDetails';
import CommonButton from '../../components/Button/CommonButton';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {Colors} from '../../global';
import Stripe from '../../assets/svgs/Stripe.svg';
import {PaymentHooks} from './PaymentHooks';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import CheckoutNavigationBar from '../../components/CheckoutNavigationBar/CheckoutNavigationBar';
import {styles} from './PaymentScreenStyle';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {useRoute} from '@react-navigation/native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import RazorpayCheckout from 'react-native-razorpay';

const PaymentScreen = () => {
  const {
    handleGoBack,
    orderReceivedSuccess,
    selectedRadioPayment,
    setSelectedRadioPayment,
    paymentData,
    changePaymentMethod,
    createOrder,
    createOrderData,
  } = PaymentHooks();
  let route = useRoute();
  let a = route.params.checkoutInfo;
  console.log('routedata from ordersummary for payment detail', a);

  const productPaymentDetail =
    route.params.checkoutInfo?.checkoutDetails[0]?.shop_customer_checkout || {};
  const discountAmount =
    productPaymentDetail.total_price - productPaymentDetail.sub_total_price;
  console.log('***paymentscreen', productPaymentDetail);

  const paymentInfo = paymentData?.payment_providers || [];
  console.log('paymentInfooooo', paymentInfo);

  const customerInfo = createOrderData?.notes || {};

  const handleItemClick = ({item}) => {
    console.log('item', item);
    setSelectedRadioPayment(item.id);
    changePaymentMethod();
  };

  console.log('final payment data', createOrderData);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => handleItemClick({item})}
      activeOpacity={0.4}
      style={{width: '100%'}}>
      <View style={styles.paymentDetailsButton}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              ...styles.radio,
              marginEnd: CHANGE_BY_MOBILE_DPI(10),
              marginTop: CHANGE_BY_MOBILE_DPI(3),
            }}>
            {selectedRadioPayment === item.id ? (
              <View style={styles.radioBg} />
            ) : null}
          </View>
          <Text style={styles.paymentText}>{item.name}</Text>
        </View>
        {/* <View style={styles.imagePosition}>{item.icon}</View> */}
      </View>
    </TouchableOpacity>
  );

  const RazorpayInfo = useCallback(() => {
    const selectedPaymentMethod = paymentInfo.find(
      item => item.id === selectedRadioPayment,
    );
    if (!selectedPaymentMethod) {
      console.log('Selected payment method not found');
      return;
    }

    const razorpayKey = selectedPaymentMethod.credentials.key;
    console.log('razorpayyyyyyyyyyyyyyyyyyyy', razorpayKey);
    const options = {
      description: 'Payment for your product',
      image: 'https://your-image-url.com/logo.png',
      currency: createOrderData.currency,
      key: razorpayKey,
      amount: createOrderData.amount,
      name: customerInfo.customer_name,
      prefill: {
        email: customerInfo.customer_email,
        contact: customerInfo.customer_mobile,
        name: customerInfo.customer_name,
      },
      theme: {color: '#3399cc'},
    };

    RazorpayCheckout.open(options)
      .then(data => {
        console.log('Payment Successful:', data);
        orderReceivedSuccess();
      })
      .catch(error => {
        console.log('Payment Error:', error);
        Alert.alert('Payment Failed', 'Please try again later.');
      });
  }, [selectedRadioPayment, paymentInfo]);

  const handlePay = () => {
    if (selectedRadioPayment == 4) {
      orderReceivedSuccess();
    } else {
      RazorpayInfo();
    }
  };

  const handleCreateOrder = () => {
    createOrder().then(res => {
      console.log('handle created done', res);
      handlePay();
    });
  };

  return (
    <View style={styles.mainView}>
      <FocusAwareStatusBar barColor={Colors.CONCRETE} />
      <SearchAppBar title={'Checkout'} onPress={handleGoBack} />
      <CheckoutNavigationBar />
      <ScrollView>
        <PaymentDetails
          productCost={productPaymentDetail.total_price}
          discount={discountAmount}
          subTotal={productPaymentDetail.sub_total_price}
          tax={productPaymentDetail.tax}
          shippingCost={'0'}
          totalAmount={productPaymentDetail.sub_total_price}
        />
        <View style={styles.main}>
          <Text style={styles.headingText}>Payment Detail</Text>
          <Text style={styles.lightText}>Please enter your payment method</Text>
          <FlatList
            data={paymentInfo}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
          />
        </View>
        <CommonButton title={'Pay'} onPress={handleCreateOrder} />
      </ScrollView>
    </View>
  );
};

export default PaymentScreen;
