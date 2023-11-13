import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Fonts} from '../../global';

export const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 3,
    marginHorizontal: 3,
  },
  item: {
    padding: 5,
    width: '50%',
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#F2F2F2',
    borderWidth: 1,
  },
  image: {
    width: '80%',
    height: '90%',
    resizeMode: 'contain',
  },
  incrementbtn: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 100,
  },
  nameWrapper: {
    color: 'black',
    fontSize: 13,
    fontWeight: 500,
    marginTop: 15,
    marginHorizontal: 3,
  },
  main: {
    height: '100%',
  },
  listWrapper: {
    marginBottom: 140,
  },
  categoryCardContainer: {
    height: CHANGE_BY_MOBILE_DPI(326),
    width: CHANGE_BY_MOBILE_DPI(188),
    borderRadius: CHANGE_BY_MOBILE_DPI(0),
  },
  categoryDetailImageContainer: {
    height: CHANGE_BY_MOBILE_DPI(167),
    width: CHANGE_BY_MOBILE_DPI(122),
    marginTop: CHANGE_BY_MOBILE_DPI(40),
  },
  paddingContainerCategoryDetail: {
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(30),
  },
  titleFontStyleCategoryDetail: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_MEDIUM,
    color: Colors.BLACK,
  },
});
