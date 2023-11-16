import {View} from 'react-native';
import React from 'react';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import AddressContainerComponenet from '../../components/AddressContainer/AddressContainerComponent';
import DeliveryAddressHooks from './DelieveryAddressHooks';
import {styles} from './DeliveryAddressStyle';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors} from '../../global';

const DelieveryAddressScreen = () => {
  const {handleGoBack, editAddress, removeAddress} = DeliveryAddressHooks();
  return (
    <View style={styles.mainView}>
      <FocusAwareStatusBar barColor={Colors.CONCRETE} />
      <SearchAppBar title={'Delivery address'} onPress={handleGoBack} />
      <AddressContainerComponenet
        showLine={true}
        showBottomOptions={true}
        typeOfAddress={'Delivery Address'}
        onEditPress={editAddress}
        onRemovePress={removeAddress}
        showdefault={true}
      />
    </View>
  );
};

export default DelieveryAddressScreen;
