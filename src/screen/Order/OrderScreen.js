import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import AllOrderScreen from '../AllOrders/AllOrdersScreen';
import CancelReturnScreen from '../CancelReturn/CancelReturnScreen';
import SearchAppBar from '../../components/AppBar/SearchAppBar';
import {styles} from './OrderStyle';
import {OrderHooks} from './OrderHooks';
import {Colors} from '../../global';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';

const OrderScreen = () => {
  const {currentTab, setCurrentTab, tabs, tab_conetnt, handleGoBack} =
    OrderHooks();

  return (
    <>
      {/* tab lis */}
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <FocusAwareStatusBar barColor={Colors.Concrete} />
        <SearchAppBar
          title={'Orders'}
          showIcon={true}
          showHeart={false}
          showCartIcon={true}
          onPress={() => {
            handleGoBack();
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'space-between',
            // alignItems: 'center',
          }}>
          {tabs?.map((tab, idx) => {
            return (
              <TouchableOpacity
                key={idx}
                onPress={() => setCurrentTab(tab.id)}
                activeOpacity={0.8}
                style={styles.container}>
                <Text
                  style={
                    currentTab === tab?.id
                      ? {
                          color: Colors.PRIMARY,
                          fontSize: 15,
                          borderBottomWidth: 5,
                          borderColor: '#3876BF',
                          fontWeight: '500',
                        }
                      : {color: '#000', fontSize: 16}
                  }>
                  {tab?.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{}}>{tab_conetnt()}</View>
      </View>
    </>
  );
};

export default OrderScreen;
