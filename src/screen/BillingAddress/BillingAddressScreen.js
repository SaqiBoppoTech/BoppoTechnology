import {View} from 'react-native';
import React from 'react';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import AddressContainerComponenet from '../../components/AddressContainer/AddressContainerComponent';
import {styles} from './BillingAddressStyle';
import BillingAddressHooks from './BillingAddressHooks';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const BillingAddressScreen = () => {
  const {handleGoBack, editAddress, removeAddress} = BillingAddressHooks();
  return (
    <View style={styles.mainView}>
      <FocusAwareStatusBar barColor={Colors.WHITE} />
      <SearchAppBar title={'Billing address'} onPress={handleGoBack} />
      <AddressContainerComponenet
        onEditPress={editAddress}
        onRemovePress={removeAddress}
        showBottomOptions={true}
        showLine={true}
        typeOfAddress={'Billing Address'}
      />
    </View>
  );
};

export default BillingAddressScreen;
