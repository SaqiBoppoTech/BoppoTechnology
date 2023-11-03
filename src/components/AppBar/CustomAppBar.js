import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Logo from '../Logo';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icons from 'react-native-vector-icons/Ionicons';

const CustomAppBar = ({
  showIcons,
  onPressNotification,
  onPressLocation,
  showCartIcon,
  onPressCartIcon,
}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.containerWrapper}>
          <Logo height={50} width={50} iconSize={30} />
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

      <View style={styles.line}></View>
    </View>
  );
};

export default CustomAppBar;

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginLeft: 20,
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
