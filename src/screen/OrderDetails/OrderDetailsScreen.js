import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {styles} from './OrderDetailsStyles';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import PayPal from '../../assets/svgs/PayPal.svg';
import AddressContainerComponenet from '../../components/AddressContainer/AddressContainerComponent';
import {ScrollView} from 'react-native-gesture-handler';
import OrderContainerComponent from '../../components/OrderTabContainer/OrderContainerComponent';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors} from '../../global';

const OrderDetailsScreen = () => {
  return (
    <ScrollView>
      <View style={styles.main}>
        <FocusAwareStatusBar barColor={Colors.GRAY_LIGHT} />
        <SearchAppBar title={'Orders'} showCartIcon={true} showIcon={true} />
        <View style={styles.orderDetailView}>
          <Text style={styles.orderDetailTextTop}>ORDER DETAILS</Text>
          <Text style={styles.orderId}>Order ID 123456789</Text>
          <View style={styles.paymentModeWrapper}>
            <Text style={styles.paymentModeText}>Payment Mode</Text>
            <PayPal />
            <Text style={styles.paypal}>Paypal</Text>
          </View>
        </View>
        <View style={styles.productContainer}>
          <OrderContainerComponent showPopup={true} showQuantity={true} />
        </View>
        <View style={styles.orderTrackingWrappe}>
          <Text>Order Tracking</Text>
        </View>
        <View style={styles.orderDetailWrapper}>
          <Text style={styles.orderDetailText}>Order Details</Text>
          <Text style={styles.priceDetails}>Price details ( 1 Item )</Text>
          <View style={styles.totalPriceWrapper}>
            <Text style={styles.totalProductPriceText}>
              Total Product Price
            </Text>
            <Text style={styles.totalProductPriceValue}>40USD</Text>
          </View>
          <View style={styles.supplyDiscountWrapper}>
            <Text style={styles.supplyDiscountText}>Supplier Discount</Text>
            <Text style={styles.supplyDiscountValue}>3.01USD</Text>
          </View>
        </View>
        <View style={styles.orderTotalWrapperBorder}>
          <View style={styles.orderTotalWrapper}>
            <Text style={styles.orderTotalText}>Order Total</Text>
            <Text style={styles.orderTotalValue}>36.99 USD</Text>
          </View>
        </View>
        <View>
          <Text style={styles.deliveryAddressText}>Delivery Address</Text>
          <View style={styles.deliveryAddressWrapper}>
            <AddressContainerComponenet />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderDetailsScreen;
