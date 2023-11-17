import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {styles} from './OrderStyle';
import {OrderHooks} from './OrderHooks';
import {Colors} from '../../global';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import {STATIC_DATA} from '../../global/staticdata';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';

const OrderScreen = () => {
  const {
    handleGoBack,
    openCustomView,
    renderTopBar,
    navigateToCartPage
  } = OrderHooks();

  return (
    <>
      {/* tab lis */}
      <View style={styles.mainContainer}>
        <FocusAwareStatusBar barColor={Colors.CONCRETE} />
        <SearchAppBar
          title={'Orders'}
          showIcon={true}
          showSearchIcon={true}
          showCartIcon={true}
          showCartCount={true}
          onPress={() => {
            handleGoBack();
          }}
          onCartPress={navigateToCartPage}
        />
        <View>
          <FlatList
            horizontal
            data={STATIC_DATA.orderTopTabData}
            renderItem={renderTopBar}
            contentContainerStyle={styles.contentContainerStyle}
          />
        </View>
        <View style={{ paddingTop: CHANGE_BY_MOBILE_DPI(2)}}>
          {openCustomView()}
        </View>
      </View>
    </>
  );
};

export default OrderScreen;
