import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import {styles} from './AddressContainerStyles';
import Edit from '../../assets/svgs/Edit.svg';
import Remove from '../../assets/svgs/Remove.svg';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

const AddressContainerComponenet = ({
  onEditPress,
  onRemovePress,
  showBottomOptions,
  typeOfAddress,
  showIconRight,
  showLine,
  showdefault,
  addressline1,
  zipcode,
  city,
  province,
  name,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowWrapper}>
        <Text style={styles.name}>{name}</Text>
        {showdefault && (
          <View style={styles.defaultTitle}>
            <Text style={styles.typeofAddressStyle}>{typeOfAddress}</Text>
          </View>
        )}

        {showIconRight && (
          <View style={styles.iconWrapper}>
            <TouchableOpacity onPress={onEditPress}>
              <Edit
                width={CHANGE_BY_MOBILE_DPI(18)}
                height={CHANGE_BY_MOBILE_DPI(18)}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onRemovePress}>
              <Remove
                width={CHANGE_BY_MOBILE_DPI(18)}
                height={CHANGE_BY_MOBILE_DPI(18)}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.addressView}>
        <Text style={styles.streetAddress}>{addressline1}</Text>
        <Text style={styles.streetAddress}>{zipcode}</Text>
        <Text style={styles.streetAddress}>{city}</Text>
        <Text style={styles.streetAddress}>{province}</Text>
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
