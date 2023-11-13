import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomAppBar from '../../components/AppBar/CustomAppBar';
import {styles} from './SuccessStyle';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import SuccessSvg from '../../assets/svgs/SuccessSvg.svg';
import {SuccessHooks} from './SuccessHooks';
import CheckFill from '../../assets/svgs/CheckFill';
import {Colors} from '../../global';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';

const SuccessScreen = () => {
  const {message} = SuccessHooks();
  return (
    <View style={styles.screenContainer}>
      <FocusAwareStatusBar barColor={Colors.WHITE} />
      <CustomAppBar />
      <View style={styles.container}>
        <SuccessSvg
          heigth={CHANGE_BY_MOBILE_DPI(170)}
          width={CHANGE_BY_MOBILE_DPI(170)}
        />
        <View style={styles.flexContainer}>
          <Text style={styles.messageFontStyle}>{message}</Text>
        </View>
      </View>
    </View>
  );
};

export default SuccessScreen;
