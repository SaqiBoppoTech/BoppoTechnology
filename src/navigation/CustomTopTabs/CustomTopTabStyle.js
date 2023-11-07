import {StyleSheet } from 'react-native';
import { Constant } from '../../global';
export const styles = StyleSheet.create({
    flex: {
        flex: 1,
      },
      topScroll: {
        flexGrow: 0,
      },
      item: {
        height: '100%',
        width: Constant.SCREEN_WIDTH,
        backgroundColor: 'grey',
        borderWidth: 5,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      headerItem: {
        paddingHorizontal: 20,
        paddingVertical: 10,
      },
      bar: {
        height: 3,
        alignSelf: 'flex-start',
      },
      barInner: {
        backgroundColor: '#000',
      },
      txt: {
        fontSize: 30,
        color: '#fff',
      },
});