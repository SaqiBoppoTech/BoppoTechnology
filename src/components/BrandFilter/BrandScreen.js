import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import CategotyCheckBox from '../FilterComponents/Checkbox';
import {Colors, Fonts} from '../../global';
import SearchSvg from '../../assets/svgs/SearchSvg.svg';
import {BrandHooks} from './BrandHooks';
import {styles} from './BrandStyle';

const Brand = () => {
  const {checkboxes, setCheckboxes, handleCheckboxChange} = BrandHooks();
  return (
    <ScrollView>
      <View style={styles.input}>
        <View style={styles.searchBox}>
          <SearchSvg style={{marginLeft: 10}} />
          <TextInput placeholder="Search" placeholderTextColor={Colors.GRAY} style={styles.SearchText} />
        </View>
        <View style={{}}>
          {checkboxes.map((checkbox, index) => (
            <CategotyCheckBox
              key={index}
              label={checkbox.label}
              checked={checkbox.checked}
              onChange={() => handleCheckboxChange(index)}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Brand;
