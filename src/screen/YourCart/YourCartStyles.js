import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  renderMainView: {
    backgroundColor: Colors.LIGHT_WHITE,
    flex: 1,
    marginBottom: CHANGE_BY_MOBILE_DPI(5),
    marginTop: CHANGE_BY_MOBILE_DPI(3),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(5),
    borderRadius: CHANGE_BY_MOBILE_DPI(10),
  },
  imageViewWrapper: {
    flexDirection: 'row',
    marginLeft: CHANGE_BY_MOBILE_DPI(10),
    marginTop: CHANGE_BY_MOBILE_DPI(5),
  },
  imageWrapper: {
    height: CHANGE_BY_MOBILE_DPI(150),
    width: CHANGE_BY_MOBILE_DPI(150),
  },
  containWrapper: {
    flex: 1,
    marginLeft: CHANGE_BY_MOBILE_DPI(10),
    marginRight: CHANGE_BY_MOBILE_DPI(5),
    gap: CHANGE_BY_MOBILE_DPI(4),
  },
  name: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.BLACK_DARK,
    fontFamily: Fonts.MANROPE_EXTRA_BOLD,
  },

  discount: {
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.GRAY_DARK,
    fontSize: CHANGE_BY_MOBILE_DPI(12),
    textDecorationLine: 'line-through',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: CHANGE_BY_MOBILE_DPI(10),
  },
  price: {
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(16),
  },

  quantity: {
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(14),
  },

  container: {
    margin: CHANGE_BY_MOBILE_DPI(10),
    borderRadius: CHANGE_BY_MOBILE_DPI(10),
    paddingVertical: CHANGE_BY_MOBILE_DPI(15),
  },

  rowWrapper: {
    flexDirection: 'row',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(10),
  },
  nameView: {
    justifyContent: 'space-between',
    flex: 1,
  },
  bottomContainer: {
    flexDirection: 'row',
    height: CHANGE_BY_MOBILE_DPI(45),
    justifyContent: 'space-between',
    borderBottomRightRadius: CHANGE_BY_MOBILE_DPI(10),
    borderBottomLeftRadius: CHANGE_BY_MOBILE_DPI(10),
  },
  editWrapper: {
    backgroundColor: Colors.LIGHT_WHITE,
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: CHANGE_BY_MOBILE_DPI(10),
    borderBottomLeftRadius: CHANGE_BY_MOBILE_DPI(10),
  },
  removeWrapper: {
    backgroundColor: Colors.LIGHT_WHITE,
    width: '48%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: CHANGE_BY_MOBILE_DPI(10),
    borderBottomRightRadius: CHANGE_BY_MOBILE_DPI(10),
  },
  optionText: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.BLACK,
    fontFamily: Fonts.MANROPE_MEDIUM,
  },
  line: {
    borderBottomWidth: CHANGE_BY_MOBILE_DPI(1),
    borderColor: Colors.GAINSBORO,
    marginTop: CHANGE_BY_MOBILE_DPI(10),
  },
  verticalLine: {
    width: CHANGE_BY_MOBILE_DPI(1),
    backgroundColor: Colors.GAINSBORO,
  },
  flatlistView: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    marginBottom: CHANGE_BY_MOBILE_DPI(70),
  },
  btnStyle: {
    position: 'absolute',
    bottom: CHANGE_BY_MOBILE_DPI(10),
    left: 0,
    width: '100%',
  },
});
