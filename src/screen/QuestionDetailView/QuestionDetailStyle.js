import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHT_WHITE,
    margin: CHANGE_BY_MOBILE_DPI(10),
    paddingTop: CHANGE_BY_MOBILE_DPI(5),
  },

  line: {
    borderBottomWidth: CHANGE_BY_MOBILE_DPI(1),
    borderColor: Colors.BLACK,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
  },
  lineWrapper: {
    marginVertical: CHANGE_BY_MOBILE_DPI(10),
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
  questionViewOnly: {
    flex: 0.18,
    alignItems: 'center',
  },
  mainView: {
    flex: 1,
  },
  ratingWrapper: {
    marginVertical: CHANGE_BY_MOBILE_DPI(10),
  },
  FlatListConatiner: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});
