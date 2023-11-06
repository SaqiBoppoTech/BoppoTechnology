import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchAppBar from '../../components/AppBar/SearchAppBar';
import {useNavigation} from '@react-navigation/native';
import AddressContainerComponenet from '../../components/AddressContainer/AddressContainerComponent';

const DelieveryAddressScreen = () => {
  const redirect = useNavigation();
  const handleGoBack = () => {
    redirect.goBack();
  };
  return (
    <View>
      <SearchAppBar
        title={'Delivery address'}
        onPress={() => {
          handleGoBack();
        }}
      />
      <AddressContainerComponenet
        showLine={true}
        showBottomOptions={true}
        typeOfAddress={'Delivery Address'}
      />
    </View>
  );
};

export default DelieveryAddressScreen;

const styles = StyleSheet.create({});
