import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHT_WHITE,
    margin: CHANGE_BY_MOBILE_DPI(10),
    borderRadius: CHANGE_BY_MOBILE_DPI(10),
    paddingTop: CHANGE_BY_MOBILE_DPI(5),
  },

  bottomContainer: {
    flexDirection: 'row',
    height: CHANGE_BY_MOBILE_DPI(45),
    borderBottomRightRadius: CHANGE_BY_MOBILE_DPI(10),
    borderBottomLeftRadius: CHANGE_BY_MOBILE_DPI(10),
    backgroundColor: Colors.LIGHT_WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },

  optionText: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.BLACK,
    fontFamily: Fonts.MANROPE_BOLD,
  },
  line: {
    borderBottomWidth: CHANGE_BY_MOBILE_DPI(1),
    borderColor: Colors.GAINSBORO,
    marginTop: CHANGE_BY_MOBILE_DPI(10),
  },

  question: {
    fontFamily: Fonts.MANROPE_BOLD,
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.BLACK_DARK,
  },
  questionView: {
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(10),
    marginLeft: CHANGE_BY_MOBILE_DPI(20),
  },
  questionText: {
    fontFamily: Fonts.MANROPE_MEDIUM,
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    color: Colors.BLACK_DARK,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(5),
  },
  flexView: {
    flex: 1,
  },
});
