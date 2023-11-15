import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import CommonButton from '../../components/Button/CommonButton';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import {styles} from './CurrencyStyle';
import CurrencyHooks from './CurrencyHooks';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import { Colors } from '../../global';

const CurrencyScreen = () => {
  const {handleGoBack, selectedRadio, setSelectedRadio, navigateToProfile} =
    CurrencyHooks();

  return (
    <View style={styles.mainView}>
      <FocusAwareStatusBar barColor={Colors.WHITE} />
      <SearchAppBar title={'Select Currency'} onPress={handleGoBack} />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.containerWrapper}
          onPress={() => setSelectedRadio(1)}>
          <View style={styles.radio}>
            {selectedRadio === 1 ? <View style={styles.radioBg}></View> : null}
          </View>
          <View style={styles.imgWrapper}>
            <Image
              source={require('../../assets/images/india.png')}
              style={styles.imgView}
            />
          </View>
          <Text style={styles.type}>INR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containerWrapper}
          onPress={() => setSelectedRadio(2)}>
          <View style={styles.radio}>
            {selectedRadio === 2 ? <View style={styles.radioBg}></View> : null}
          </View>

          <View style={styles.imgWrapper}>
            <Image
              source={require('../../assets/images/uk.png')}
              style={styles.imgView}
            />
          </View>
          <Text style={styles.type}>GBP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btn}>
        <CommonButton
          title={'Save'}
          onPress={navigateToProfile}
          externalFontStyle={styles.externalFontStyle}
          externalContainer={styles.loginContainer}
        />
      </View>
    </View>
  );
};

export default CurrencyScreen;
