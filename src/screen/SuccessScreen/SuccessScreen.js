import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomAppBar from '../../components/AppBar/CustomAppBar';
import {styles} from './SuccessStyle';

const SuccessScreen = ({route}) => {
  const {message} = route.params;
  return (
    <View style={styles.screenContainer}>
      <CustomAppBar />
      <View style={styles.container}>
        {/* <IconButton icon="check-circle" iconColor="#000" size={90} /> */}
        <View
          style={{
            // backgroundColor: 'red',
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
