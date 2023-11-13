import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import CommonButton from '../../components/Button/CommonButton';
import {styles} from './ProfileStyle';
import SettingComponent from '../../components/ProfileSettings/ProfileSettingsComponent';
import ProfileSection from '../../components/ProfileSection/ProfileSection';
import {ProfileHooks} from './ProfileHooks';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors} from '../../global';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';

const ProfileScreen = () => {
  const {
    navigateToMyAddress,
    navigateToCurrency,
    navigateToNotificationSetting,
    navigateToSellWithUs,
    navigateToMyReview,
    navigateToMyQuestionAnswer,
    navigateToPrivacyPolicy,
    navigateToTermsAndCondition,
    navigateToContactUs,
    navigateToRefundPolicy,
    navigateToShippingPolicy,
  } = ProfileHooks();
  return (
    <View style={styles.mainView}>
      <FocusAwareStatusBar barColor={Colors.WHITE} />
      <ScrollView>
        <ProfileSection />
        <View
          style={{
            ...styles.settingWrapper,
            marginTop: CHANGE_BY_MOBILE_DPI(5),
          }}>
          <View>
            <Text style={styles.settingTitle}>Account Settings</Text>
          </View>
          <SettingComponent
            title={'Saved Addresses'}
            onPress={navigateToMyAddress}
          />
          <SettingComponent
            title={'Select currency'}
            onPress={navigateToCurrency}
          />
          <SettingComponent
            title={'Notification Settings'}
            onPress={navigateToNotificationSetting}
          />
          <SettingComponent
            title={'Sell With Us'}
            onPress={navigateToSellWithUs}
          />
        </View>

        <View
          style={{
            ...styles.settingWrapper,
            marginTop: 10,
          }}>
          <View>
            <Text style={styles.settingTitle}>Activity</Text>
          </View>
          <SettingComponent title={'Reviews'} onPress={navigateToMyReview} />
          <SettingComponent
            title={'Questions & Answers'}
            onPress={navigateToMyQuestionAnswer}
          />
        </View>

        <View
          style={{
            ...styles.settingWrapper,
            marginTop: 10,
          }}>
          <View>
            <Text style={styles.settingTitle}>Terms & Policies</Text>
          </View>

          <SettingComponent
            title={'Privacy Policy'}
            onPress={navigateToPrivacyPolicy}
          />
          <SettingComponent
            title={'Terms of Service'}
            onPress={navigateToTermsAndCondition}
          />
          <SettingComponent
            title={'Contact Us'}
            onPress={navigateToContactUs}
          />
          <SettingComponent
            title={'Refund Policy'}
            onPress={navigateToRefundPolicy}
          />
          <SettingComponent
            title={'Shipping Policy'}
            onPress={navigateToShippingPolicy}
          />
        </View>
        <View style={styles.btn}>
          <CommonButton
            externalFontStyle={styles.externalFontStyle}
            externalContainer={styles.loginContainer}
            title={'Log Out'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
