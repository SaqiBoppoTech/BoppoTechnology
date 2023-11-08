import { Colors, Constant, Fonts } from '../../global';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';

const { StyleSheet } = require('react-native');

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  title: {
    fontSize: CHANGE_BY_MOBILE_DPI(18),
    color: Colors.BLACK,
    fontFamily: Fonts.INTER_BOLD,
    paddingLeft: CHANGE_BY_MOBILE_DPI(15),
    lineHeight: CHANGE_BY_MOBILE_DPI(35)
  },

  enterOtpStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    color: Colors.BLACK,
    fontFamily: Fonts.MANROPE_BOLD,
    alignSelf: 'center',
    marginTop: CHANGE_BY_MOBILE_DPI(20),
    marginBottom: CHANGE_BY_MOBILE_DPI(30)
  },

  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: CHANGE_BY_MOBILE_DPI(40),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20)
  },
  resendotp: {
    fontSize: CHANGE_BY_MOBILE_DPI(13),
    color: Colors.BLACK,
    fontFamily: Fonts.LATO_REGULAR,
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginVertical: CHANGE_BY_MOBILE_DPI(35)
  },
  line: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 2,
  },
  imageContainer: {
    backgroundColor: '#fff',
    borderBottomRightRadius: CHANGE_BY_MOBILE_DPI(20),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  loginImageStyle: {
    height: '100%',
    width: '100%',
  },
  loginImageEmailStyle:{
    width: CHANGE_BY_MOBILE_DPI(250),
    height: CHANGE_BY_MOBILE_DPI(250),
    marginVertical:CHANGE_BY_MOBILE_DPI(30),
    alignSelf:'center'
  },
  imageSubContainer: {
    width: CHANGE_BY_MOBILE_DPI(300),
    height: CHANGE_BY_MOBILE_DPI(300),
    alignItems:'center'
  },
  arrowContainer: {
    top: CHANGE_BY_MOBILE_DPI(8)
  },
  externalCustomButtonStyle: {
  },
  externalContainer: {
    borderRadius: CHANGE_BY_MOBILE_DPI(10)
  },
  externalFontStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.WHITE,
    includeFontPadding: false
  },
  toastedContainer:{
    height:CHANGE_BY_MOBILE_DPI(81),
    width:Constant.SCREEN_WIDTH - 40 ,
    marginHorizontal:CHANGE_BY_MOBILE_DPI(20),
    borderRadius:CHANGE_BY_MOBILE_DPI(10),
    backgroundColor:Colors.BLACK,
    alignItems:'center',
    justifyContent:'center'
  },
  toastedFontStyle:{
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    fontFamily: Fonts.LATO_BOLD,
    color: Colors.WHITE,
    includeFontPadding: false,
    paddingHorizontal:CHANGE_BY_MOBILE_DPI(20),
    lineHeight:CHANGE_BY_MOBILE_DPI(20)
  },
  positionContainer:{
    position:'absolute',
    bottom:CHANGE_BY_MOBILE_DPI(20)
  }
});
