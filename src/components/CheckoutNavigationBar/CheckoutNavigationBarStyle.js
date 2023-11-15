import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Constant, Fonts} from '../../global';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  stepContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepCircle: {
    borderRadius: CHANGE_BY_MOBILE_DPI(15),
    height: CHANGE_BY_MOBILE_DPI(30),
    width: CHANGE_BY_MOBILE_DPI(30),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: CHANGE_BY_MOBILE_DPI(5),
  },
  stepNumber: {
    textAlign: 'center',
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.WHITE,
    fontFamily: Fonts.MANROPE_BOLD,
  },
  stepText: {
    textAlign: 'center',
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.BLACK,
    fontFamily: Fonts.MANROPE_BOLD,
  },
  barContainer:{
    width:Constant.SCREEN_WIDTH / 4,
    borderWidth:CHANGE_BY_MOBILE_DPI(1),
    borderStyle:'dashed',
    borderColor:Colors.BLACK,
  }
});
