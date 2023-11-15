import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {styles} from './OrderStyle';
import {OrderHooks} from './OrderHooks';
import {Colors} from '../../global';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';

const OrderScreen = () => {
  const {currentTab, setCurrentTab, tabs, tab_conetnt, handleGoBack} =
    OrderHooks();

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
        />
        <View
          style={{
            flexDirection: 'row',
            backgroundColor:'red',
            marginTop:4
          }}>
          {tabs?.map((tab, idx) => {
            return (
              <TouchableOpacity
                key={idx}
                onPress={() => {
                  setCurrentTab(tab.id), console.log(tab.name);
                }}
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
