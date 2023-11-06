const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  containerWrapper: {
    height: 55,
    width: '100%',
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  radio: {
    height: 20,
    width: 20,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
  },
  radioBg: {
    backgroundColor: 'grey',
    height: 14,
    width: 14,
    borderRadius: 20,
    margin: 1,
  },
  mainView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 10,
  },
  imgWrapper: {
    justifyContent: 'center',
  },
  type: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  btn: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    width: '100%',
  },
});
