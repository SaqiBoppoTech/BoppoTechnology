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
import {TouchableOpacity} from 'react-native-gesture-handler';

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
    navigateToLogin,
    profile,
  } = ProfileHooks();
  return (
    <View style={styles.mainView}>
      <FocusAwareStatusBar barColor={Colors.CONCRETE} />
      <ScrollView>
        <ProfileSection profileName={profile?.firstname} />
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
          <View style={styles.line}></View>
          <SettingComponent
            title={'Select currency'}
            onPress={navigateToCurrency}
          />
          <View style={styles.line}></View>
          <SettingComponent
            title={'Notification Settings'}
            onPress={navigateToNotificationSetting}
          />
          <View style={styles.line}></View>
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
          <View style={styles.line}></View>
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
          <View style={styles.line}></View>
          <SettingComponent
            title={'Terms of Service'}
            onPress={navigateToTermsAndCondition}
          />
          <View style={styles.line}></View>
          <SettingComponent
            title={'Contact Us'}
            onPress={navigateToContactUs}
          />
          <View style={styles.line}></View>
          <SettingComponent
            title={'Refund Policy'}
            onPress={navigateToRefundPolicy}
          />
          <View style={styles.line}></View>
          <SettingComponent
            title={'Shipping Policy'}
            onPress={navigateToShippingPolicy}
          />
        </View>
        <View style={styles.btn}>
          <TouchableOpacity  onPress={navigateToLogin}>
            <CommonButton
              externalFontStyle={styles.externalFontStyle}
              externalContainer={styles.loginContainer}
              title={'Log Out'}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
