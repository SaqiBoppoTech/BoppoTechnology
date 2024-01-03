import {
  FlatList,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import AddressContainerComponenet from '../../components/AddressContainer/AddressContainerComponent';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors} from '../../global';
import ChangeAddressHooks from './ChangeAddressHooks';
import {styles} from './ChangeAddressStyle';

const ChangeAddress = () => {
  const {
    handleGoBack,
    allAddress,
    loadMoreAddresses,
    loading,
    setSelectedItem,
    selectedItem,
    onChangeAddress,
  } = ChangeAddressHooks();

  const renderAddressItem = ({item}) => {
    const handleEditPress = () => {
      console.log('Edit pressed for:', item.id);
      editAddress({item});
    };

    const handleRemovePress = () => {
      console.log('Remove pressed for:', item.id);
      removeAddressFromList(item.id);
    };

    const handleItemClick = () => {
      console.log('Clicked item:', item.id);
      setSelectedItem(item.id);
    };

    return (
      <TouchableOpacity
        onPress={() => {
          onChangeAddress(item.id);
        }}>
        <AddressContainerComponenet
          showBottomOptions={false}
          typeOfAddress={'default'}
          showIconRight={false}
          showLine={true}
          showdefault={false}
          addressline1={item.address_line1}
          city={`city ${item.city}`}
          province={`state ${item.province}`}
          zipcode={`Zip/Postal ${item.zipcode}`}
          name={`${item.recepient_name}`}
        />
      </TouchableOpacity>
    );
  };

  const renderFooter = () => {
    return loading ? (
      <ActivityIndicator size="small" color={Colors.WHITE} />
    ) : null;
  };

  return (
    <View style={styles.mainView}>
      <FocusAwareStatusBar barColor={Colors.CONCRETE} />
      <SearchAppBar title={'Change Address'} onPress={handleGoBack} />
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

export default ChangeAddress;
