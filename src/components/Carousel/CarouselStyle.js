import {StyleSheet, Dimensions} from 'react-native';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  indicator: {
    height: CHANGE_BY_MOBILE_DPI(7.49),
    width: CHANGE_BY_MOBILE_DPI(7.49),
    borderRadius: CHANGE_BY_MOBILE_DPI(100),
    marginHorizontal:CHANGE_BY_MOBILE_DPI(3)
  },
  indicatorConatiner: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  indicatorPosition: {
    zIndex: 1,
    position: 'absolute',
    bottom: CHANGE_BY_MOBILE_DPI(20),
    alignSelf: 'center',
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
  marginRightContainer:{
    marginRight:CHANGE_BY_MOBILE_DPI(3)
  },
  ratingContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  }
});

