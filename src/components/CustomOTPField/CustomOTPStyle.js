import {StyleSheet} from 'react-native';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import { Colors } from '../../global';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf:'center',
  },
  input: {
    width: CHANGE_BY_MOBILE_DPI(45),
    height:  CHANGE_BY_MOBILE_DPI(45),
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    textAlign: 'center',
    borderRadius: CHANGE_BY_MOBILE_DPI(3),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(5),
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.GRAY_LIGHT,
  },
});
