import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import {CHANGE_BY_MOBILE_DPI} from '../global/constant';
import SearchSvg from '../assets/svgs/SearchSvg.svg';
import MicSvg from '../assets/svgs/MicSvG.svg';
import {Colors} from '../global';

const SearchField = () => {
  return (
    <View style={styles.container}>
      <SearchSvg style={{margin: 8}} />
      <TextInput
        style={styles.input}
        placeholder="Search Products, categories..."
        placeholderTextColor="#A9A9A9"
      />
      <MicSvg style={{margin: 8}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: Colors.GRAY_LIGHT,
    paddingHorizontal: 8,
    paddingVertical: 1,
    marginHorizontal: 10,
    marginTop: 5,
    marginLeft: CHANGE_BY_MOBILE_DPI(20),
  },
  icon: {
    margin: 7,
    color: '#737373',
  },
  input: {
    flex: 1,
    fontSize: CHANGE_BY_MOBILE_DPI(12),
    color: '#000',
  },
});

export default SearchField;
