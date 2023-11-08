import {Colors} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(10),
    borderRadius: CHANGE_BY_MOBILE_DPI(10),
  },
  pickerWrapper: {
    borderColor: 'grey',
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 8,
  },
  picker: {
    backgroundColor: 'transparent',
  },
  title: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '400',
    paddingLeft: 15,
  },
});
