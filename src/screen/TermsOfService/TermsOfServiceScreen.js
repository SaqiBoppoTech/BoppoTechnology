import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import {styles} from './TermsOfServiceStyle';
import TermsOfServicesHooks from './TermsOfServiceHooks';
import {Colors} from '../../global';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';

const TermsAndConditonsScreen = () => {
  const {handleGoBack} = TermsOfServicesHooks();
  return (
    <View style={styles.mainView}>
      <FocusAwareStatusBar barColor={Colors.WHITE} />
      <SearchAppBar title={'Terms & Policies'} onPress={handleGoBack} />
      <ScrollView style={styles.scrollChanges}>
        <Text style={styles.header}>Terms And Conditons</Text>

        <Text style={styles.text}>
          Thank you for visiting and shopping at RangePlus.com. Following are
          the terms and conditions that constitute our Shipping Policy.
          {'\n'}
          {'\n'}
          Domestic Shipping Policy Shipment processing time
          {'\n'}
          {'\n'}
          All orders are processed within 2-3 business days. Orders are not
          shipped or delivered on weekends or holidays.
          {'\n'}
          {'\n'}
          If we are experiencing a high volume of orders, shipments may be
          delayed by a few days. Please allow additional days in transit for
          delivery. If there will be a significant delay in shipment of your
          order, we will contact you via email or telephone.
          {'\n'}
          {'\n'}
          Shipping rates & delivery estimates
          {'\n'}
          {'\n'}
          Shipping charges for your order will be calculated and displayed at
          checkout. Here is an example.
          {'\n'}
          {'\n'}
          Shipment method
          {'\n'}
          {'\n'}
          Estimated delivery time
          {'\n'}
          {'\n'}
          Weight
          {'\n'}
          {'\n'}
          Shipment cost
          {'\n'}
          {'\n'}
          RoyalMail Tracked48
          {'\n'}
          {'\n'}
          2-3 Working Days
          {'\n'}
          {'\n'}
          Upto 1Kg & Under £10.00
          {'\n'}
          {'\n'}
          4.49
          {'\n'}
          {'\n'}
          RoyalMail Tracked48
          {'\n'}
          {'\n'}
          2-3 Working Days
          {'\n'}
          {'\n'}
          Upto 1Kg & Above £10.00
          {'\n'}
          {'\n'}
          3.99
          {'\n'}
          {'\n'}
          RoyalMail Tracked48
          {'\n'}
          {'\n'}
          2-3 Working Days
          {'\n'}
          {'\n'}
          £0.50 for every extra Kg.
          {'\n'}
          {'\n'}
          0.50 / Kg
          {'\n'}
          {'\n'}
          Delivery delays can occasionally occur occasionally and we would like
          to request our customers to wait for 4-5 days longer than the promised
          delivery date. Also at times couriers might require additional
          information from customers for clearance of their International
          Shipments. Please note that customers are responsible to provide the
          requested information in a timely manner. We bear no responsibility
          for direct or indirect loss occurred to the customer if goods are
          disposed off by customs or returned to us due to failure of the
          customer to provide information required for customs clearance.
          {'\n'}
          {'\n'}
          We use Royal Mail and DHL Express to use all our parcels.
          {'\n'}
          {'\n'}
          Shipment confirmation & Order tracking
          {'\n'}
          {'\n'}
          You will receive a Shipment Confirmation email once your order has
          been shipped. All the parcels are shipped using Tracked Services and
          we would provide you with tracking information once the parcel has
          been shipped.
          {'\n'}
          {'\n'}
          Customs, Duties and Taxes RangePlus is not responsible for any customs
          and taxes applied to your order for International Shipments. All fees
          imposed during or after shipping are the responsibilities of the
          customer (tariffs, taxes, etc.). Please make relevant enquiries with
          the import and customs authority of your country to check if the
          products you intend to purchase are allowed to be imported and if they
          are subject to any legal restrictions. Moreover please also check if
          the imported goods would require any document from the customer and if
          the items are subject to import duty.
          {'\n'}
          {'\n'}
          Damages
          {'\n'}
          {'\n'}
          RangePlus is not liable for any products damaged or lost during
          shipping. If you received your order damaged, please do not accept
          delivery of the item and return to the goods to the courier or the
          parcel company.
          {'\n'}
          {'\n'}
          Please save all packaging materials and damaged goods before filing a
          claim.
        </Text>
      </ScrollView>
    </View>
  );
};

export default TermsAndConditonsScreen;
