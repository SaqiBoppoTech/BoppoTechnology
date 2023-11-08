import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import LogoSvg from '../../assets/svgs/LogoSvg.svg';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import FocusAwareStatusBar from './FocusAwareStatusBar';
import { Colors, Fonts } from '../../global';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';


const CustomAppBar = ({
  showIcons,
  onPressNotification,
  onPressLocation,
  showCartIcon,
  onPressCartIcon,
}) => {
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar barColor={Colors.WHITE} />
      <View style={styles.container}>
        <View style={styles.containerWrapper}>
          <LogoSvg height={CHANGE_BY_MOBILE_DPI(35)} width={CHANGE_BY_MOBILE_DPI(35)}/>
          <Text style={styles.text}>BoppoGo</Text>
        </View>
        {showIcons && (
          <View
            style={{
              ...styles.containerWrapper,
              justifyContent: 'space-evenly',
              width: '35%',
            }}>
            <TouchableOpacity onPress={onPressNotification}>
              <Icons name="notifications-outline" size={30} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressLocation}>
              <Icon name="location-pin" size={30} color="#000" />
            </TouchableOpacity>
            {showCartIcon && (
              <TouchableOpacity onPress={onPressCartIcon}>
                <Icons name="cart-outline" size={30} color="#000" />
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </View>

  );
};

export default CustomAppBar;

const styles = StyleSheet.create({
  mainContainer: {
  },
  container: {
    top:CHANGE_BY_MOBILE_DPI(0),
    height: CHANGE_BY_MOBILE_DPI(70),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius:CHANGE_BY_MOBILE_DPI(15),
    borderBottomEndRadius:CHANGE_BY_MOBILE_DPI(15),
    paddingHorizontal:CHANGE_BY_MOBILE_DPI(30),
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor:Colors.WHITE
  },
  text: {
    fontSize: CHANGE_BY_MOBILE_DPI(20.21),
    color:Colors.BLACK,
    fontFamily:Fonts.INTER_BOLD,
    marginLeft: CHANGE_BY_MOBILE_DPI(15),
    textAlign: 'center',
  },
  line: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 2,
  },
  containerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',

  },
});
