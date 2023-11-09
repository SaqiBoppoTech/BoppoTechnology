import {View, Text} from 'react-native';
import React from 'react';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import PayPal from '../../assets/svgs/PayPal.svg';
import AddressContainerComponenet from '../../components/AddressContainer/AddressContainerComponent';
import {ScrollView} from 'react-native-gesture-handler';
import OrderContainerComponent from '../../components/OrderTabContainer/OrderContainerComponent';
import {styles} from '../Cancel-ReturnDetails/Cancel-ReturnDetailStyles';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import { Colors } from '../../global';

const CancelReturnDetailScreen = () => {
  return (
    <ScrollView>
      <View style={styles.main}>
        <FocusAwareStatusBar barColor={Colors.GRAY_LIGHT} />
        <SearchAppBar title={'Orders'} showCartIcon={true} showIcon={true} />
        <View style={styles.cancelDetailView}>
          <Text style={styles.cancelDetailTextTop}>CANCEL/RETURN DETAILS</Text>
          <Text style={styles.cancelId}>RETURN ID 123456789</Text>
          <View style={styles.paymentModeWrapperCancel}>
            <Text style={styles.paymentModeTextCancel}>Payment Mode</Text>
            <PayPal />
            <Text style={styles.paypalCancel}>Paypal</Text>
          </View>
        </View>
        <View style={styles.productContainerCancel}>
          <OrderContainerComponent showPopup={true} showQuantity={true} />
        </View>
        <View style={styles.cancelTrackingWrappe}>
          <Text>Order Tracking</Text>
        </View>
        <View style={styles.cancelDetailWrapper}>
          <Text style={styles.cancelDetailText}>CANCEL/RETURN Details</Text>
          <Text style={styles.priceDetailsCancel}>
            Price details ( 1 Item )
          </Text>
          <View style={styles.totalPriceWrapperCancel}>
            <Text style={styles.totalProductPriceTextCancel}>
              Total Product Price
            </Text>
            <Text style={styles.totalProductPriceValueCancel}>40USD</Text>
          </View>
          <View style={styles.supplyDiscountWrapperCancel}>
            <Text style={styles.supplyDiscountTextCancel}>
              Supplier Discount
            </Text>
            <Text style={styles.supplyDiscountValueCancel}>3.01USD</Text>
          </View>
        </View>
        <View style={styles.cancelTotalWrapperBorder}>
          <View style={styles.cancelTotalWrapper}>
            <Text style={styles.cancelTotalText}>Order Total</Text>
            <Text style={styles.cancelTotalValue}>36.99 USD</Text>
          </View>
        </View>
        <View style={styles.deliveryAddressWrapperCancel}>
          <Text style={styles.deliveryAddressTextCancel}>Delivery Address</Text>
          <View style={styles.deliveryAddressWrapperCancel}>
            <AddressContainerComponenet />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CancelReturnDetailScreen;
