import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenNames} from '../../global';
import CategoryScreen from '../../screen/Category/CategoryScreen';
import CategoryDetailScreen from '../../screen/CategoryDetail/CategoryDetailScreen';
enableScreens();
const Stack = createStackNavigator();
const CategoryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ScreenNames.CATEGORY_SCREEN}>
      <Stack.Screen
        name={ScreenNames.CATEGORY_SCREEN}
        component={CategoryScreen}
      />
      <Stack.Screen
        name={ScreenNames.CATEGORY_DETAIL_SCREEN}
        component={CategoryDetailScreen}
      />
    </Stack.Navigator>
  );
};
export default CategoryStack;
