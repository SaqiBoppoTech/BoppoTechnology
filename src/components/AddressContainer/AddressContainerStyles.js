const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  defaultTitle: {
    backgroundColor: '#DDDDDD',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  container: {
    flexDirection: 'row',
    height: 45,
    justifyContent: 'space-between',
  },
  editWrapper: {
    backgroundColor: '#ddd',
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 15,
  },
  removeWrapper: {
    backgroundColor: '#ddd',
    width: '48%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 15,
  },
  textedit: {
    fontSize: 16,
    color: '#000',
  },
  textRemove: {
    fontSize: 16,
    color: '#000',
  },
});
