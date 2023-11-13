import { StyleSheet } from 'react-native';
import { CHANGE_BY_MOBILE_DPI, SCREEN_WIDTH } from '../../global/constant';
import { Colors, Fonts } from '../../global';

export const styles = StyleSheet.create({
  squareImage: {
    height: CHANGE_BY_MOBILE_DPI(112),
    width: CHANGE_BY_MOBILE_DPI(112),
    marginRight: CHANGE_BY_MOBILE_DPI(20),
    marginTop:CHANGE_BY_MOBILE_DPI(10)
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleImage: {
    height: CHANGE_BY_MOBILE_DPI(44.86),
    width: CHANGE_BY_MOBILE_DPI(44.86), 
    borderRadius: CHANGE_BY_MOBILE_DPI(100),
    marginRight: CHANGE_BY_MOBILE_DPI(10),
  },
  header: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.MANROPE_SEMIBOLD,
    color: Colors.BLACK
  },
  reviewcontainer: {
    height: CHANGE_BY_MOBILE_DPI(63),
    width: CHANGE_BY_MOBILE_DPI(91),
    borderColor: 'black',
    borderRadius: CHANGE_BY_MOBILE_DPI(5.73),
    borderWidth: 1,
    alignItems: 'center',
    marginRight: CHANGE_BY_MOBILE_DPI(20)
  },
  rating: {
    fontSize: CHANGE_BY_MOBILE_DPI(38),
    fontFamily: Fonts.MANROPE_BOLD,
    color: Colors.BLACK,
    includeFontPadding: false,
    top:CHANGE_BY_MOBILE_DPI(3)
  },
  ratingText: {
    fontSize: CHANGE_BY_MOBILE_DPI(17.18),
    fontFamily: Fonts.MANROPE_REGULAR,
    color: Colors.BLACK,
  },

  name: {
    fontSize: CHANGE_BY_MOBILE_DPI(15.27),
    fontFamily: Fonts.MANROPE_REGULAR,
    color: Colors.BLACK,
    marginRight:CHANGE_BY_MOBILE_DPI(10)
  },
  date: {
    fontSize: CHANGE_BY_MOBILE_DPI(17.18),
    fontFamily: Fonts.MANROPE_REGULAR,
    color: Colors.BLACK,
  },
  namedate:{
    fontSize: CHANGE_BY_MOBILE_DPI(12.14),
    fontFamily: Fonts.MANROPE_REGULAR,
    color: Colors.BLACK,
  },
  reviewDes: {
    fontSize: CHANGE_BY_MOBILE_DPI(15.27),
    fontFamily: Fonts.MANROPE_REGULAR,
    color: Colors.BLACK,
  },
  viewWrapper: {
    marginBottom:CHANGE_BY_MOBILE_DPI(10)
  },
  mainView: {
    flexDirection: 'row',
    marginTop: CHANGE_BY_MOBILE_DPI(20),
    alignItems: 'center',
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
  },
  ratingWrapper: {
    flexDirection: 'row',
    marginBottom: CHANGE_BY_MOBILE_DPI(5),
  },
  ratingMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
  },
  rateWrapper: {
   fontSize:CHANGE_BY_MOBILE_DPI(15),
   color:Colors.BLACK,
   fontFamily:Fonts.MANROPE_REGULAR
  },
  totalRating: {
    fontSize:CHANGE_BY_MOBILE_DPI(13.36),
   color:Colors.BLACK,
   fontFamily:Fonts.MANROPE_REGULAR,
   marginLeft:CHANGE_BY_MOBILE_DPI(10)
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  reviewWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:CHANGE_BY_MOBILE_DPI(20)

  },
  marginHorizontalContainer: {
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20)
  },
  starMarginHorizontalContainer:{
    marginHorizontal:CHANGE_BY_MOBILE_DPI(10)
  },
  starBarOuterContainer:{
    height:CHANGE_BY_MOBILE_DPI(6),
    width:SCREEN_WIDTH / 1.8,
    borderRadius:CHANGE_BY_MOBILE_DPI(100),
    backgroundColor:Colors.GRAY_MEDIUM
  },
  starBarInnerContainer:{
    height:CHANGE_BY_MOBILE_DPI(6),
    width:SCREEN_WIDTH / 3,
    borderRadius:CHANGE_BY_MOBILE_DPI(100),
    backgroundColor:Colors.YELLOW
  },
  sizeContainer:{
    height:CHANGE_BY_MOBILE_DPI(20),
    width:CHANGE_BY_MOBILE_DPI(40),
  },
  flexDirectionStarContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  marginRightContainer:{
    marginRight:CHANGE_BY_MOBILE_DPI(3)
  },
  flexWrapContainer:{
    flexDirection:'row',
    flexWrap:'wrap'
  },
  flexContainer:{
    marginTop:CHANGE_BY_MOBILE_DPI(10)
  }
});
