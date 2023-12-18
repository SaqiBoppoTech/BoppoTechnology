import {FlatList, View, ActivityIndicator} from 'react-native';
import React from 'react';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import AddressContainerComponenet from '../../components/AddressContainer/AddressContainerComponent';
import DeliveryAddressHooks from './DelieveryAddressHooks';
import {styles} from './DeliveryAddressStyle';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors} from '../../global';

const DelieveryAddressScreen = () => {
  const {
    handleGoBack,
    editAddress,
    removeAddress,
    allAddress,
    loadMoreAddresses,
    loading,
    removeAddressFromList,
  } = DeliveryAddressHooks();

  const renderAddressItem = ({item}) => {
    const handleEditPress = () => {
      console.log('Edit pressed for:', item.id);
      editAddress({item});
    };

    const handleRemovePress = () => {
      console.log('Remove pressed for:', item.id);
      removeAddressFromList(item.id);
    };

    if (item.type == 'Shipping') {
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
      <SearchAppBar title={'Delivery address'} onPress={handleGoBack} />
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

export default DelieveryAddressScreen;
