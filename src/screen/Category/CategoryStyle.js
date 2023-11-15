import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Constant, Colors, Fonts} from '../../global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    marginBottom: CHANGE_BY_MOBILE_DPI(60),
  },
  productWrapper: {
    flexDirection: 'row',
    height: CHANGE_BY_MOBILE_DPI(92),
    marginVertical:CHANGE_BY_MOBILE_DPI(10),
    borderRadius: CHANGE_BY_MOBILE_DPI(12),
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
    paddingHorizontal:CHANGE_BY_MOBILE_DPI(20)
  },
  arrowWrapper: {
    height: CHANGE_BY_MOBILE_DPI(92),
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(15),
    backgroundColor: Colors.GALLERY_GREY,
    borderTopRightRadius: CHANGE_BY_MOBILE_DPI(12),
    borderBottomRightRadius: CHANGE_BY_MOBILE_DPI(12),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: CHANGE_BY_MOBILE_DPI(0),
  },
  imageWrapper: {
    height: CHANGE_BY_MOBILE_DPI(71),
    width: CHANGE_BY_MOBILE_DPI(71),
    // marginLeft: CHANGE_BY_MOBILE_DPI(20),
  },
  textWrapper: {
    fontSize: CHANGE_BY_MOBILE_DPI(18),
    fontFamily: Fonts.MANROPE_BOLD,
    alignItems: 'flex-start',
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(20),
  },
  productText: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.MANROPE_BOLD,
    alignItems: 'flex-start',
    color: Colors.GRAY_DARK,
  },
  titleWrapper: {
    flex:1,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Constant.SCREEN_WIDTH,
  },
  count: {
    position: 'absolute',
    backgroundColor: Colors.PRIMARY,
    height: CHANGE_BY_MOBILE_DPI(20),
    width: CHANGE_BY_MOBILE_DPI(20),
    bottom: CHANGE_BY_MOBILE_DPI(14),
    left: CHANGE_BY_MOBILE_DPI(13),
    borderRadius: CHANGE_BY_MOBILE_DPI(100),
  },
  countNumber: {
    color: Colors.WHITE,
    alignSelf: 'center',
  },
  searchFieldWrapper:{
    flexDirection: 'row',
    width: Constant.SCREEN_WIDTH,
    marginTop: CHANGE_BY_MOBILE_DPI(10),
    alignContent: 'center',
  },
  externalStyleWidth:{
    height: CHANGE_BY_MOBILE_DPI(42),
    width: Constant.SCREEN_WIDTH - 75,
  },
  cartWrapper:{
    alignSelf: 'center'
  }
});
