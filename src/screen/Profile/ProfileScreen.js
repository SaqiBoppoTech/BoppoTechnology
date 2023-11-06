import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import CommonButton from '../../components/Button/CommonButton';
import {styles} from './ProfileStyle';
import ProfileOptionComponent from '../../components/ProfileOption/ProfileOptionComponent';
import SettingComponent from '../../components/ProfileSettings/ProfileSettingsComponent';
import {
  CONTACT_US_SCREEN,
  CURRENCY_SCREEN,
  EDIT_PROFILE_SCREEN,
  MY_ADDRESSES,
  MY_QUESTION_ANSWER_SCREEN,
  MY_REVIEW_SCREEN,
  NOTIFICATION_SCREEN,
  ORDER_SCREEN,
  PRIVACY_POLICY_SCREEN,
  REFUND_POLICY_SCREEN,
  SELL_WITH_US_SCREEN,
  SHIPPING_POLICY_SCREEN,
  TERMS_AND_CONDITION_SCREEN,
  WISHLIST_SCREEN,
} from '../../global/screeenName';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <ScrollView>
        <View style={styles.ProfileSection}>
          <View style={styles.ProfileWrapper}>
            <View style={styles.container}>
              <Image
                source={{
                  uri: 'https://gccontent.blob.core.windows.net/gccontent/blogs/gcdocuments/20190408-create-rounded-profile-pictures/image2.png',
                }}
                style={styles.circleImage}
              />
            </View>
            <View>
              <Text style={styles.name}> Hello Serena!</Text>
              <Text style={styles.updateprofile}>
                View and update your profile
              </Text>
            </View>
          </View>

          <View style={styles.itemWrapper}>
            <ProfileOptionComponent
              title={'Wishlist'}
              onPress={() => {
                navigation.navigate(WISHLIST_SCREEN);
              }}
            />
            <ProfileOptionComponent
              title={'Orders'}
              onPress={() => {
                navigation.navigate(ORDER_SCREEN);
              }}
            />
          </View>
          <View
            style={{
              ...styles.itemWrapper,
              marginTop: 10,
              marginBottom: 15,
            }}>
            <ProfileOptionComponent
              title={'Edit Profile'}
              onPress={() => {
                navigation.navigate(EDIT_PROFILE_SCREEN);
              }}
            />
            <ProfileOptionComponent title={'Chat with Us'} onPress={() => {}} />
          </View>
        </View>

        <View
          style={{
            ...styles.settingWrapper,
          }}>
          <View>
            <Text style={styles.settingTitle}>Account Settings</Text>
          </View>
          <View>
            <SettingComponent
              title={'Saved Addresses'}
              onPress={() => {
                navigation.navigate(MY_ADDRESSES);
              }}
            />
            <SettingComponent
              title={'Select currency'}
              onPress={() => {
                navigation.navigate(CURRENCY_SCREEN);
              }}
            />
            <SettingComponent
              title={'Notification Settings'}
              onPress={() => {
                navigation.navigate(NOTIFICATION_SCREEN);
              }}
            />
            <SettingComponent
              title={'Sell With Us'}
              onPress={() => {
                navigation.navigate(SELL_WITH_US_SCREEN);
              }}
            />
          </View>
        </View>

        <View
          style={{
            ...styles.settingWrapper,
            marginTop: 10,
          }}>
          <View>
            <Text style={styles.settingTitle}>Activity</Text>
          </View>
          <View>
            <SettingComponent
              title={'Reviews'}
              onPress={() => {
                navigation.navigate(MY_REVIEW_SCREEN);
              }}
            />
            <SettingComponent
              title={'Questions & Answers'}
              onPress={() => {
                navigation.navigate(MY_QUESTION_ANSWER_SCREEN);
              }}
            />
          </View>
        </View>

        <View
          style={{
            ...styles.settingWrapper,
            marginTop: 10,
            marginBottom: 85,
          }}>
          <View>
            <Text style={styles.settingTitle}>Terms & Policies</Text>
          </View>
          <View>
            <SettingComponent
              title={'Privacy Policy'}
              onPress={() => {
                navigation.navigate(PRIVACY_POLICY_SCREEN);
              }}
            />
            <SettingComponent
              title={'Terms of Service'}
              onPress={() => {
                navigation.navigate(TERMS_AND_CONDITION_SCREEN);
              }}
            />
            <SettingComponent
              title={'Contact Us'}
              onPress={() => {
                navigation.navigate(CONTACT_US_SCREEN);
              }}
            />
            <SettingComponent
              title={'Refund Policy'}
              onPress={() => {
                navigation.navigate(REFUND_POLICY_SCREEN);
              }}
            />
            <SettingComponent
              title={'Shipping Policy'}
              onPress={() => {
                navigation.navigate(SHIPPING_POLICY_SCREEN);
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.btn}>
        <CommonButton title={'Log Out'} />
      </View>
    </View>
  );
};

export default ProfileScreen;
