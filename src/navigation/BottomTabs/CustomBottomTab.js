import React, { useState } from 'react';
import { Animated, Platform, Text, TouchableOpacity, View, } from 'react-native';
//insets
import { useSafeAreaInsets } from 'react-native-safe-area-context';
//styles
import { styles } from './styles';
//svgs
import HomeSvg from '../../assets/svgs/BottomTabSvgs/HomeSvg.svg';
import SearchSvg from '../../assets/svgs/BottomTabSvgs/CategorySvg.svg';
import NotificationSvg from '../../assets/svgs/BottomTabSvgs/NotificationSvg.svg';
import ProfileSvg from '../../assets/svgs/BottomTabSvgs/ProfileSvg.svg';
import HomeFillSvg from '../../assets/svgs/BottomTabSvgs/HomeFillSvg.svg';
import SearchFillSvg from '../../assets/svgs/BottomTabSvgs/CategoryFillSvg.svg';
import NotificationFillSvg from '../../assets/svgs/BottomTabSvgs/NotificationFillSvg.svg';
import ProfileFillSvg from '../../assets/svgs/BottomTabSvgs/ProfileFillSvg.svg';
import { Colors, Constant } from '../../global';
const CustomBottomTab = ({ state, descriptors, navigation, userType }) => {
    const names = ["Home", "Browse", "Buy Again", "Profile"];
    const [svgs] = useState( [
        <HomeSvg heigth={Constant.CHANGE_BY_MOBILE_DPI(18)} width={Constant.CHANGE_BY_MOBILE_DPI(18)}/>,
        <SearchSvg heigth={Constant.CHANGE_BY_MOBILE_DPI(18)} width={Constant.CHANGE_BY_MOBILE_DPI(18)} />,
        <NotificationSvg heigth={Constant.CHANGE_BY_MOBILE_DPI(18)} width={Constant.CHANGE_BY_MOBILE_DPI(18)} />,
        <ProfileSvg heigth={Constant.CHANGE_BY_MOBILE_DPI(18)} width={Constant.CHANGE_BY_MOBILE_DPI(18)} />
    ]);
    const [blurredSvg] = useState( [
        <HomeFillSvg heigth={Constant.CHANGE_BY_MOBILE_DPI(18)} width={Constant.CHANGE_BY_MOBILE_DPI(18)}/>,
        <SearchFillSvg heigth={Constant.CHANGE_BY_MOBILE_DPI(18)} width={Constant.CHANGE_BY_MOBILE_DPI(18)} />,
        <NotificationFillSvg heigth={Constant.CHANGE_BY_MOBILE_DPI(18)} width={Constant.CHANGE_BY_MOBILE_DPI(18)} />,
        <ProfileFillSvg heigth={Constant.CHANGE_BY_MOBILE_DPI(18)} width={Constant.CHANGE_BY_MOBILE_DPI(18)} />
    ]);
    const bgColor = {
        backgroundColor:Colors.BLACK,
       borderRadius:Constant.CHANGE_BY_MOBILE_DPI(100),
       paddingHorizontal:Constant.CHANGE_BY_MOBILE_DPI(10)
    }
    return (
        <View style={[styles.con, { position: 'absolute' }]}>
            <View style={styles.tabBarCon}>
                {
                    state.routes.map((route, index) => {
                        const isFocused = state.index === index;
                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        };

                        return (
                            <TouchableOpacity
                                key={`bottomtabs-${index}`} activeOpacity={1} onPress={onPress} 
                                style={[styles.home,isFocused && bgColor]}>
                                <Animated.View>
                                 {
                                    !isFocused ?svgs[index]:blurredSvg[index]
                                 }
                                </Animated.View>
                                {
                                    isFocused ?
                                        <Text style={{ ...styles.names}}>
                                            {names[index]}
                                        </Text>
                                        :
                                        null
                                }
                            </TouchableOpacity>
                        );
                    })
                }

            </View>
        </View>
    );
};

export default CustomBottomTab;