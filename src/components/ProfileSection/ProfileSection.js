import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import ProfileOptionComponent from '../ProfileOption/ProfileOptionComponent';
import {styles} from './ProfileSectionStyle';
import {ProfileSectionHooks} from './ProfileSectionHooks';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {GlobalImage} from '../../global/staticImage';

const ProfileSection = () => {
  const {
    navigateToChatWithUs,
    navigateToEditProfile,
    navigateToOrders,
    navigateToWishList,
  } = ProfileSectionHooks();
  return (
    <View>
      <View style={styles.ProfileSection}>
        <View style={styles.ProfileWrapper}>
          <View style={styles.Imagecontainer}>
            <Image
              source={GlobalImage.profileImage}
              style={styles.circleImage}
            />
          </View>
          <View>
            <Text style={styles.name}>Hello Serena!</Text>
            <Text style={styles.updateprofile}>
              View and update your profile
            </Text>
          </View>
        </View>

        <View style={styles.itemWrapper}>
          <ProfileOptionComponent
            title={'Wishlist'}
            onPress={navigateToWishList}
          />
          <ProfileOptionComponent title={'Orders'} onPress={navigateToOrders} />
        </View>
        <View
          style={{
            ...styles.itemWrapper,
            marginTop: CHANGE_BY_MOBILE_DPI(12),
            marginBottom: CHANGE_BY_MOBILE_DPI(16),
          }}>
          <ProfileOptionComponent
            title={'Edit Profile'}
            onPress={navigateToEditProfile}
          />
          <ProfileOptionComponent
            title={'Chat with Us'}
            onPress={navigateToChatWithUs}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileSection;
