import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

export const styles = StyleSheet.create({
  input: {
    height: 160,
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'grey',
    color: '#121212',
    fontSize: 18,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  title: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '400',
    paddingLeft: 15,
  },
  titleview: {
    flexDirection: 'row',
  },
  asterisk: {
    color: 'red',
    fontSize: 16,
  },
  btn: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    width: '100%',
  },
  mainView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerWrapper: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: CHANGE_BY_MOBILE_DPI(10),
  },
});
