import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Constant, Fonts} from '../../global';

export const styles = StyleSheet.create({
  imageContainer: {
    height: CHANGE_BY_MOBILE_DPI(60),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: CHANGE_BY_MOBILE_DPI(10),
    marginBottom: CHANGE_BY_MOBILE_DPI(3),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(3),
  },
  item: {
    padding: CHANGE_BY_MOBILE_DPI(5),
    height: CHANGE_BY_MOBILE_DPI(300),
    borderRadius: CHANGE_BY_MOBILE_DPI(5),
    borderWidth: CHANGE_BY_MOBILE_DPI(1),
  },
  image: {
    resizeMode: 'contain',
  },
  incrementbtn: {
    position: 'absolute',
    top: CHANGE_BY_MOBILE_DPI(5),
    right: CHANGE_BY_MOBILE_DPI(5),
  },
  nameWrapper: {
    color: Colors.BLACK,
    fontSize: CHANGE_BY_MOBILE_DPI(13),
    fontFamily: Fonts.MANROPE_MEDIUM,
    marginTop: CHANGE_BY_MOBILE_DPI(15),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(3),
  },
  main: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    marginBottom: CHANGE_BY_MOBILE_DPI(64),
  },
  listWrapper: {
    // marginBottom: 140,
    flex:1,
  },
  categoryCardContainer: {
    height: CHANGE_BY_MOBILE_DPI(326),
    width: CHANGE_BY_MOBILE_DPI(188),
    borderRadius: CHANGE_BY_MOBILE_DPI(0),
    marginBottom: CHANGE_BY_MOBILE_DPI(2),
  },
  categoryDetailImageContainer: {
    height: CHANGE_BY_MOBILE_DPI(167),
    width: CHANGE_BY_MOBILE_DPI(122),
    marginTop: CHANGE_BY_MOBILE_DPI(40),
    marginBottom: CHANGE_BY_MOBILE_DPI(5),
  },
  paddingContainerCategoryDetail: {
    marginHorizontal: CHANGE_BY_MOBILE_DPI(15),
  },
  titleFontStyleCategoryDetail: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.MANROPE_MEDIUM,
    color: Colors.BLACK,
  },
  externalHeaderItem: {
    paddingVertical: CHANGE_BY_MOBILE_DPI(3),
    paddingTop: CHANGE_BY_MOBILE_DPI(5),
    // backgroundColor:'red'
  },
  externalMainContainerStyle: {
    backgroundColor: Colors.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    // marginVertical:20
  },
  externalTopTabContainerStyle:{
    marginRight:CHANGE_BY_MOBILE_DPI(15),
  },
  externalTopTabStyle:{
    marginVertical:CHANGE_BY_MOBILE_DPI(9)
  },
  contentContainerStyle:{
    paddingHorizontal:CHANGE_BY_MOBILE_DPI(25),
    backgroundColor:Colors.WHITE,
    elevation:CHANGE_BY_MOBILE_DPI(2),
    marginVertical:1
  }
});
