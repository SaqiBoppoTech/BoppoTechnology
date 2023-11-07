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

const OrderScreen = ({navigation}) => {
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
  const redirect = useNavigation();
  const handleGoBack = () => {
    redirect.goBack();
  };
  return (
    <>
      {/* tab lis */}
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <SearchAppBar
          title={'Orders'}
          showIcon={true}
          showHeart={false}
          onPress={() => {
            handleGoBack();
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
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
                          color: '#3876BF',
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
        <View style={{width: '100%', height: '100%', backgroundColor: '#fff'}}>
          {tab_conetnt()}
        </View>
      </View>
    </>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
