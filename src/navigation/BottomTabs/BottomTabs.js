import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomBottomTab from './CustomBottomTab'
import { ScreenNames } from '../../global';
import HomeStack from '../BottomStack/HomeStack';
import CategoryStack from '../BottomStack/CategoryStack';
import NotificationStack from '../BottomStack/NotificationStack';
import ProfileStack from '../BottomStack/ProfileStack';

const BottomTabs = ({ userType }) => {
	const Tab = createBottomTabNavigator();
	const renderCustomBottomTab = (props) => {
		return <CustomBottomTab {...props} userType={userType} />;
	};
	return (
			<Tab.Navigator tabBar={renderCustomBottomTab} screenOptions={{ headerShown: false }}>
				<Tab.Screen name={ScreenNames.HOME_STACK} component={HomeStack} />
				<Tab.Screen name={ScreenNames.CATEGORY_STACK} component={CategoryStack} />
				<Tab.Screen name={ScreenNames.NOTIFICATION_STACK} component={NotificationStack} />
				<Tab.Screen name={ScreenNames.PROFILE_STACK} component={ProfileStack} />
			</Tab.Navigator>
	)
}
export default BottomTabs