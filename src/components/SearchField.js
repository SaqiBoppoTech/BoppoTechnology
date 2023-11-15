import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import SearchSvg from '../assets/svgs/SearchSvg.svg'
import MikeSvg from '../assets/svgs/MikeSvg.svg'
import { CHANGE_BY_MOBILE_DPI } from '../global/constant';
import { Colors, Constant, Fonts } from '../global';


const SearchField = ({externalStyleWidth}) => {
  return (
    <View style={[styles.searchContainer,externalStyleWidth]}>
      <View style={styles.flexDirectionContainer}>
        <SearchSvg height={CHANGE_BY_MOBILE_DPI(20)} width={CHANGE_BY_MOBILE_DPI(20)} style={{marginHorizontal:CHANGE_BY_MOBILE_DPI(2)}}/>
        <View style={styles.flexContainer}>
          <TextInput
            style={styles.inputContainer}
            placeholder="Search Products, categories..."
            placeholderTextColor="#A9A9A9"
          />
        </View>
      </View>
      <TouchableOpacity>
      <MikeSvg height={CHANGE_BY_MOBILE_DPI(20)} width={CHANGE_BY_MOBILE_DPI(20)} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: CHANGE_BY_MOBILE_DPI(43),
    width:Constant.SCREEN_WIDTH - 25,
    borderRadius: CHANGE_BY_MOBILE_DPI(8.63),
    borderColor: Colors.GRAY_MEDIUM,
    borderWidth: CHANGE_BY_MOBILE_DPI(1),
    marginHorizontal:CHANGE_BY_MOBILE_DPI(15),
    paddingHorizontal:CHANGE_BY_MOBILE_DPI(10)
  },
  inputContainer: {
    fontSize: CHANGE_BY_MOBILE_DPI(12),
    fontFamily: Fonts.MANROPE_MEDIUM,
    color: Colors.BLACK
  },
  flexDirectionContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  flexContainer: {
    flex: 1
  }

});

export default SearchField;
