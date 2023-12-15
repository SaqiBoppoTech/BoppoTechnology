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
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import CommonButton from '../../components/Button/CommonButton';

const SuccessScreen = () => {
  const {message, userAppBar, handleGoBack, navigateToEditProfile} =
    SuccessHooks();
  return (
    <View style={styles.screenContainer}>
      <FocusAwareStatusBar barColor={Colors.CONCRETE} />
      {userAppBar ? (
        <SearchAppBar title={'Change Password'} onPress={handleGoBack} />
      ) : (
        <CustomAppBar />
      )}
      <View style={styles.container}>
        <SuccessSvg
          heigth={CHANGE_BY_MOBILE_DPI(170)}
          width={CHANGE_BY_MOBILE_DPI(170)}
        />
        <View style={styles.flexContainer}>
          <Text style={styles.messageFontStyle}>{message}</Text>
        </View>
      </View>
      <View style={styles.btn}>
        <CommonButton
          onPress={navigateToEditProfile}
          title={'Continue Editing'}
        />
      </View>
    </View>
  );
};

export default SuccessScreen;
