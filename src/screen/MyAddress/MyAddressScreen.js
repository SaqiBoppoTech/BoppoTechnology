import {Text, View} from 'react-native';
import React from 'react';
import SearchAppBar from '../../components/AppBar/SearchAppBar';
import {useNavigation} from '@react-navigation/native';
import CommonButton from '../../components/Button/CommonButton';
import {styles} from './MyAddressStyle';
import AddressTypeComponent from '../../components/AddressType/AddressTypeComponent';
import { ADD_NEW_ADDRESS, BILLING_ADDRESS, DELIEVERY_ADDRESS } from '../../global/screeenName';

const MyAddressScreen = ({navigation}) => {
  const redirect = useNavigation();
  const handleGoBack = () => {
    redirect.goBack();
  };
  return (
    <View style={styles.main}>
      <SearchAppBar
        title={'My Addresses'}
        onPress={() => {
          handleGoBack();
        }}
      />
      <AddressTypeComponent
        showDefault={true}
        title={'Delivery Address'}
        onPress={() => {
          navigation.navigate(DELIEVERY_ADDRESS);
        }}
      />
      <AddressTypeComponent
        showDefault={false}
        title={'Billing Address'}
        onPress={() => {
          navigation.navigate(BILLING_ADDRESS);
        }}
      />
      <View style={styles.btn}>
        <CommonButton
          title={'Add New Address'}
          onPress={() => {
            navigation.navigate(ADD_NEW_ADDRESS);
          }}
        />
      </View>
    </View>
  );
};

export default MyAddressScreen;
