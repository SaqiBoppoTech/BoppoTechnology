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

const OrderHooks = () => {
  //HOOKS
  const [currentTab, setCurrentTab] = useState(1);

  const tabs = [
    {
      id: 1,
      name: 'Delivered',
    },
    {
      id: 2,
      name: 'Cancelled/Returned',
    },
  ];

  const redirect = useNavigation();
  const handleGoBack = () => {
    redirect.goBack();
  };

  //tab content
  const tab_conetnt = () => {
    switch (currentTab) {
      case 1:
        return (
          <View style={{width: '100%', height: '100%', background: '#fff'}}>
            <AllOrderScreen
              onPressOrder={() => {
                navigation.navigate('');
              }}
            />
          </View>
        );
      case 2:
        return (
          <View style={{width: '100%', height: '100%', background: '#fff'}}>
            <CancelReturnScreen />
          </View>
        );
    }
  };

  return {
    currentTab,
    setCurrentTab,
    tabs,
    tab_conetnt,
    handleGoBack
  };
};

export {OrderHooks};
