import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './AddressContainerStyles';

const AddressContainerComponenet = ({
  onEditPress,
  onRemovePress,
  showBottomOptions,
  typeOfAddress,
  showIconRight,
  showLine,
}) => {
  return (
    <View
      style={{
        backgroundColor: '#ddd',
        marginHorizontal: 10,
        borderRadius: 10,
        marginTop: 12,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 30,
          marginRight: 20,
          marginTop: 12,
        }}>
        <Text style={{fontSize: 18, color: '#000', fontWeight: '700'}}>
          Miss Edna Hayes II
        </Text>
        <View style={styles.defaultTitle}>
          <Text
            style={{
              fontSize: 14,
              textAlign: 'center',
              color: '#000',
              fontWeight: '500',
            }}>
            {typeOfAddress}
          </Text>
        </View>
        {showIconRight && (
          <View style={{flexDirection: 'row', gap: 20}}>
            <TouchableOpacity onPress={onEditPress}>
              <Icons name="edit" size={18} color="#000" />
            </TouchableOpacity>

            <TouchableOpacity onPress={onEditPress}>
              <Icon name="delete" size={18} color="#000" />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={{marginHorizontal: 30, marginTop: 8}}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '400',
            color: '#151515',
            marginTop: 2,
          }}>
          Street 1221 W Boise Ave, Boise, Illinois
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '400',
            color: '#151515',
            marginTop: 3,
          }}>
          Zip/Postal Code 83706
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '400',
            color: '#151515',
            marginTop: 3,
          }}>
          Phone Number (208) 258-3871
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '400',
            color: '#151515',
            marginTop: 3,
            marginBottom: 15,
          }}>
          Country- United States
        </Text>
      </View>
      {showLine && (
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: '#000',
            marginTop: 10,
          }}></View>
      )}

      {showBottomOptions && (
        <View style={styles.container}>
          <TouchableOpacity style={styles.editWrapper} onPress={onEditPress}>
            <Icons name="edit" size={18} color="#000" />
            <Text style={styles.textedit}>Edit</Text>
          </TouchableOpacity>
          <View
            style={{
              width: 1,
              height: '100%',
              backgroundColor: 'black',
            }}></View>
          <TouchableOpacity
            style={styles.removeWrapper}
            onPress={onRemovePress}>
            <Icon name="delete" size={18} color="#000" />
            <Text style={styles.textRemove}>Remove</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default AddressContainerComponenet;
