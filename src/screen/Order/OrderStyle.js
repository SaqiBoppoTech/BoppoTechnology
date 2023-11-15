import {Colors} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ALABASTER_GREY,
    height: CHANGE_BY_MOBILE_DPI(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  screenContainer:{
    
  }
});
