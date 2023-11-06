const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 45,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
  },
  defaultTitle: {
    backgroundColor: '#DDDDDD',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  wrapper: {
    flexDirection: 'row',
    gap: 50,
    alignItems: 'center',
  },
});
