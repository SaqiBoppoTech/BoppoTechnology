import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainView: {
    position: 'relative',
  },
  ProfileSection: {
    backgroundColor: 'black',
    margin: 10,
    borderRadius: 10,
  },
  ProfileWrapper: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  itemWrapper: {
    flexDirection: 'row',
    gap: 15,
    marginHorizontal: 15,
  },
  btn: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    width: '100%',
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  updateprofile: {
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  settingWrapper: {
    backgroundColor: '#FAFAFA',
    justifyContent: 'space-evenly',
    borderRadius: 15,
    marginHorizontal: 12,
    paddingVertical: 5,
  },
  settingTitle: {
    fontSize: 22,
    color: '#151515',
    textAlign: 'left',
    fontWeight: '600',
    marginHorizontal: 18,
  },
});
