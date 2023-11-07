import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenNames} from '../../global';
import ProfileScreen from '../../screen/Profile/ProfileScreen';

enableScreens();
const Stack = createStackNavigator();
const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ScreenNames.PROFILE_SCREEN}>
      <Stack.Screen
        name={ScreenNames.PROFILE_SCREEN}
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};
export default ProfileStack;
