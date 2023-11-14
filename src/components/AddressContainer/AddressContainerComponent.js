import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import {styles} from './AddressContainerStyles';
import Edit from '../../assets/svgs/Edit.svg';
import Remove from '../../assets/svgs/Remove.svg';

const AddressContainerComponenet = ({
  onEditPress,
  onRemovePress,
  showBottomOptions,
  typeOfAddress,
  showIconRight,
  showLine,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowWrapper}>
        <Text style={styles.name}>Miss Edna Hayes II</Text>
        <View style={styles.defaultTitle}>
          <Text style={styles.typeofAddress}>{typeOfAddress}</Text>
        </View>
        {showIconRight && (
          <View style={styles.iconWrapper}>
            <TouchableOpacity onPress={onEditPress}>
              <Edit width="16" height="16" />
            </TouchableOpacity>

            <TouchableOpacity onPress={onEditPress}>
              <Remove width="16" height="16" />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.addressView}>
        <Text style={styles.streetAddress}>
          Street 1221 W Boise Ave, Boise, Illinois
        </Text>
        <Text style={styles.streetAddress}>Zip/Postal Code 83706</Text>
        <Text style={styles.streetAddress}>Phone Number (208) 258-3871</Text>
        <Text style={styles.streetAddress}>Country- United States</Text>
      </View>
      {showLine && <View style={styles.line}></View>}

      {showBottomOptions && (
        <View style={styles.container}>
          <TouchableOpacity style={styles.editWrapper} onPress={onEditPress}>
            <Edit width="15" height="15" />
            <Text style={styles.optionText}>Edit</Text>
          </TouchableOpacity>
          <View style={styles.verticalLine}></View>
          <TouchableOpacity
            style={styles.removeWrapper}
            onPress={onRemovePress}>
            <Remove width="15" height="15" />
            <Text style={styles.optionText}>Remove</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default AddressContainerComponenet;
