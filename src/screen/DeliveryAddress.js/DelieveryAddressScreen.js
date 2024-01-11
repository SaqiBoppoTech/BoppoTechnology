import {
  FlatList,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import AddressContainerComponenet from '../../components/AddressContainer/AddressContainerComponent';
import DeliveryAddressHooks from './DelieveryAddressHooks';
import {styles} from './DeliveryAddressStyle';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors} from '../../global';
import {useDispatch} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';

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

  const dispatch = useDispatch();

  const reorderedAddresses = allAddress.sort((a, b) => {
    if (a.is_default === 1) {
      return -1;
    }
    if (b.is_default === 1) {
      return 1;
    }
    return 0;
  });

  const renderAddressItem = ({item}) => {
    const handleEditPress = () => {
      console.log('Edit pressed for:', item.id);
      editAddress({item});
    };

    const handleRemovePress = () => {
      console.log('Remove pressed for:', item.id);
      item.is_default == 1
        ? dispatch(
            UserAction.setToastedAlert({
              condition: true,
              toastedAlertText: `Default Address Can't Remove`,
            }),
          )
        : removeAddressFromList(item.id);
    };

    if (item.type == 'Shipping') {
      return (
        <TouchableOpacity
          onPress={() => {
            console.log('click', item.is_default);
          }}>
          <AddressContainerComponenet
            onEditPress={handleEditPress}
            onRemovePress={handleRemovePress}
            showBottomOptions={true}
            typeOfAddress={'default'}
            showIconRight={false}
            showLine={true}
            showdefault={item.is_default == 1 ? true : false}
            addressline1={item.address_line1}
            city={`city: ${item.city}`}
            province={`state: ${item.province}`}
            zipcode={`Zip/Postal: ${item.zipcode}`}
            name={`${item.recepient_name}`}
          />
        </TouchableOpacity>
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
        data={reorderedAddresses}
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
