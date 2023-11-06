const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 1,
  },
  productWrapper: {
    flexDirection: 'row',
    height: 120,
    width: '90%',
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.0,
    elevation: 3,
  },
  arrowWrapper: {
    height: 120,
    width: '18%',
    backgroundColor: '#F0F0F0',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
  },
  imageWrapper: {
    height: 90,
    width: 90,
    marginLeft: 20,
  },
  textWrapper: {
    fontWeight: '700',
    alignItems: 'flex-start',
  },
  titleWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginHorizontal: 20,
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  searchFiledWrapper: {
    width: '90%',
  },
});
