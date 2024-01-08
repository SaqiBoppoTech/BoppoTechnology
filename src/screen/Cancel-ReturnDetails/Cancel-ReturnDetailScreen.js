import {View, Text} from 'react-native';
import React from 'react';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import Paypal from '../../assets/svgs/PayPal.svg'
import AddressContainerComponenet from '../../components/AddressContainer/AddressContainerComponent';
import {ScrollView} from 'react-native-gesture-handler';
import OrderContainerComponent from '../../components/OrderTabContainer/OrderContainerComponent';
import {styles} from '../Cancel-ReturnDetails/Cancel-ReturnDetailStyles';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors} from '../../global';
import { CancelReturnDetailHooks } from './Cancel-ReturnDetailHooks';

const CancelReturnDetailScreen = () => {
  const {navigateToCartPage,handleGoBack} = CancelReturnDetailHooks();
  return (
    <ScrollView>
      <View style={styles.main}>
        <FocusAwareStatusBar barColor={Colors.GRAY_LIGHT} />
        <SearchAppBar
          title={'Cancel/Return Detail'}
          showCartIcon={true}
          showIcon={true}
          showSearchIcon={true}
          onCartPress={navigateToCartPage}
          onPress={handleGoBack}
        />
        <View style={styles.cancelDetailView}>
          <Text style={styles.cancelDetailTextTop}>CANCEL/RETURN DETAILS</Text>
          <Text style={styles.cancelId}>RETURN ID 123456789</Text>
          <View style={styles.paymentModeWrapperCancel}>
            <Text style={styles.paymentModeTextCancel}>Payment Mode</Text>
            <Paypal />
            <Text style={styles.paypalCancel}>Paypal</Text>
          </View>
        </View>
        <View style={styles.productContainerCancel}>
          <OrderContainerComponent showPopup={true} showQuantity={true} />
        </View>
        <View style={styles.cancelTrackingWrappe}>
          <Text>Tracking YET TO DEVELOP</Text>
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
