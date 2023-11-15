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
import TopTabBar from '../../components/TopTabBar/TopTabBar';
import {styles} from './OrderStyle';
import Card from '../../components/Card/Card';
import {Colors} from '../../global';

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

  const [selectedTab, setSelectTabs] = React.useState(0);
  const openCustomView = () => {
    return (
      <View style={styles.marginBottomContainer}>
        {selectedTab == 0 ? (
          <AllOrderScreen />
        ) : selectedTab == 1 ? (
          <CancelReturnScreen />
        ) : null}
      </View>
    );
  };

  const renderTopBar = ({item, index}) => {
    const addIndexOntState = () => {
      setSelectTabs(index);
    };
    let bottomBar = selectedTab == index && {backgroundColor: Colors.PRIMARY};
    return (
      <TouchableOpacity
        style={styles.barContainerStyle}
        onPress={addIndexOntState}>
        <Text
          style={[
            selectedTab == index
              ? styles.labelFontStyle
              : styles.labelBlurFontStyle,
          ]}>
          {item}
        </Text>
        <View style={{...styles.bottomBar, ...bottomBar}}></View>
      </TouchableOpacity>
    );
  };

  return {
    setCurrentTab,
    handleGoBack,
    openCustomView,
    renderTopBar,
  };
};

export {OrderHooks};
