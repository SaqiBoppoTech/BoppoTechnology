import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomAppBar from '../../components/AppBar/CustomAppBar';
import {styles} from './SuccessStyle';
import CheckFill from '../../assets/svgs/CheckFill';
import {Colors} from '../../global';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';

const SuccessScreen = ({route}) => {
  const {message} = route.params;
  return (
    <View style={styles.screenContainer}>
      <FocusAwareStatusBar barColor={Colors.WHITE} />
      <CustomAppBar />
      <View style={styles.container}>
        <CheckFill />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.text}>{message}</Text>
        </View>
      </View>
    </View>
  );
};

export default SuccessScreen;
