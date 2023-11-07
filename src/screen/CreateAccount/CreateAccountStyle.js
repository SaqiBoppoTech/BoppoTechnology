const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  text: {
    color: '#000000',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 5,
    fontSize: 14,
    fontWeight: '500',
  },
  bottomText: {
    color: '#3876BF',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 5,
    fontSize: 14,
    fontWeight: '500',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    marginTop: 25,
    marginBottom: 25,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 30,
  },
});
