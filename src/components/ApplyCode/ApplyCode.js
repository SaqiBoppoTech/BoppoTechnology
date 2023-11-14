import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './ApplyCodeStyle';
import ApplyCodeHook from './ApplyCodeHooks';

const ApplyCode = () => {
  const {onPressApply, Apply, setApply} = ApplyCodeHook();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apply Code</Text>
      <View style={styles.container2}>
        <Text style={styles.save}>SAVE 20</Text>
        <TouchableOpacity style={styles.remove} onPress={onPressApply}>
          <Text style={styles.removetxt}>{Apply ? 'Remove' : 'Apply'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.discountPlanWrapper}>
        View Discounts & Buissness Plan/vouchers
      </Text>
    </View>
  );
};

export default ApplyCode;
