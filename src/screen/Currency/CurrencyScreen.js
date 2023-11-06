import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import CommonButton from '../../components/Button/CommonButton';
import SearchAppBar from '../../components/AppBar/SearchAppBar';
import {useNavigation} from '@react-navigation/native';
import {styles} from './CurrencyStyle';
import {PROFILE_SCREEN} from '../../global/screeenName';

const CurrencyScreen = ({navigation}) => {
  const redirect = useNavigation();
  const handleGoBack = () => {
    redirect.goBack();
  };
  const [selectedRadio, setSelectedRadio] = useState(1);

  return (
    <View style={styles.mainView}>
      <SearchAppBar
        title={'Select Currency'}
        onPress={() => {
          handleGoBack();
        }}
      />
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
              style={{height: 24, width: 40}}
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
              style={{height: 24, width: 40}}
            />
          </View>
          <Text style={styles.type}>GBP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btn}>
        <CommonButton
          title={'Save'}
          onPress={() => {
            navigation.navigate(PROFILE_SCREEN);
          }}
        />
      </View>
    </View>
  );
};

export default CurrencyScreen;
