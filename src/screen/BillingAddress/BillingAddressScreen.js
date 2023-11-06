import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchAppBar from '../../components/AppBar/SearchAppBar';
import {useNavigation} from '@react-navigation/native';
import AddressContainerComponenet from '../../components/AddressContainer/AddressContainerComponent';

const BillingAddressScreen = () => {
  const redirect = useNavigation();
  const handleGoBack = () => {
    redirect.goBack();
  };
  return (
    <View>
      <SearchAppBar
        title={'Billing address'}
        onPress={() => {
          handleGoBack();
        }}
      />
      <AddressContainerComponenet
        onEditPress={() => {}}
        onRemovePress={() => {}}
        showBottomOptions={true}
        showLine={true}
        typeOfAddress={'Billing Address'}
      />
    </View>
  );
};

export default BillingAddressScreen;

const styles = StyleSheet.create({});
