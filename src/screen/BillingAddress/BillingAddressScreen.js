import {FlatList, View, ActivityIndicator} from 'react-native';
import React from 'react';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import AddressContainerComponenet from '../../components/AddressContainer/AddressContainerComponent';
import {styles} from './BillingAddressStyle';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors} from '../../global';
import BillingAddressHooks from './BillingAddressHooks';

const BillingAddressScreen = () => {
  const {
    handleGoBack,
    editAddress,
    removeAddress,
    allAddress,
    loadMoreAddresses,
    loading,
    removeAddressFromList,
  } = BillingAddressHooks();

  const renderAddressItem = ({item}) => {
    const handleEditPress = () => {
      console.log('Edit pressed for:', item.id);
    };

    const handleRemovePress = () => {
      console.log('Remove pressed for:', item.id);
      removeAddressFromList(item.id);
    };

    if (item.type == 'Billing') {
      return (
        <AddressContainerComponenet
          onEditPress={handleEditPress}
          onRemovePress={handleRemovePress}
          showBottomOptions={true}
          typeOfAddress={'default'}
          showIconRight={false}
          showLine={true}
          showdefault={item.is_default == 1 ? true : false}
          addressline1={item.address_line1}
          city={`city ${item.city}`}
          province={`state ${item.province}`}
          zipcode={`Zip/Postal ${item.zipcode}`}
          name={`${item.recepient_name}`}
        />
      );
    } else {
      return null;
    }
  };

  const renderFooter = () => {
    return loading ? (
      <ActivityIndicator size="small" color={Colors.WHITE} />
    ) : null;
  };

  return (
    <View style={styles.mainView}>
      <FocusAwareStatusBar barColor={Colors.CONCRETE} />
      <SearchAppBar title={'Billing address'} onPress={handleGoBack} />
      <FlatList
        data={allAddress}
        keyExtractor={item => item.id}
        renderItem={renderAddressItem}
        onEndReached={loadMoreAddresses}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export default BillingAddressScreen;
