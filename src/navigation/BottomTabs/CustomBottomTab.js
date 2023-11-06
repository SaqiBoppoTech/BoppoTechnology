import React from 'react';
import {Animated, Platform, Text, TouchableOpacity, View} from 'react-native';

//insets
import {useSafeAreaInsets} from 'react-native-safe-area-context';

//styles
import {styles} from './styles';
//svgs
// import HomeSvg from '../../assets/svgs/HomeSvg.svg';
// import SearchSvg from '../../assets/svgs/SearchSvg.svg';
// import NotificationSvg from '../../assets/svgs/BellSvg.svg';
// import ClanderSvg from '../../assets/svgs/ClanderSvg.svg';
// import HomeFillSvg from '../../assets/svgs/HomeFillSvg.svg';
// import NotificationFillSvg from '../../assets/svgs/BellFillSvg.svg';
import {Colors, Constant} from '../../global';
//components

const CustomBottomTab = ({state, descriptors, navigation, userType}) => {
  const insets = useSafeAreaInsets();
  const isIOS = Platform.OS === 'ios';
  const names = ['Home', 'Search', 'Order', 'Profile'];
  // const svgs = [
  //     <HomeFillSvg fill={Colors.PRIMARY} />,
  //     <SearchSvg fill={Colors.PRIMARY} />,
  //     <NotificationFillSvg fill={Colors.PRIMARY} />,
  //     <ClanderSvg fill={Colors.PRIMARY} />
  // ];
  // const blurredSvg = [
  //     <HomeSvg fill={Colors.GRANITE_GRAY} />,
  //     <SearchSvg fill={Colors.GRANITE_GRAY} />,
  //     <NotificationSvg fill={Colors.GRANITE_GRAY} />,
  //     <ClanderSvg fill={Colors.GRANITE_GRAY} />
  // ]

  const svgs = [
    <Text>ahfsdjsa</Text>,
    <Text>ahfsssdjsa</Text>,
    <Text>ahfsdjsa</Text>,
    <Text>ahfsdjsa</Text>,
  ];
  const blurredSvg = [
    <Text>ahfsdjsa</Text>,
    <Text>ahfsdjsa</Text>,
    <Text>ahfsdjsa</Text>,
    <Text>ahfsdjsa</Text>,
  ];

  const stylesToBeApplied = [
    styles.home,
    styles.cancerTab,
    styles.chatTab,
    styles.chatTab,
  ];

  return (
    <View style={[styles.con, {position: 'absolute'}]}>
      <View style={styles.tabBarCon}>
        {state.routes.map((route, index) => {
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
              key={`bottomtabs-${index}`}
              activeOpacity={1}
              onPress={onPress}
              style={stylesToBeApplied[index]}>
              <Animated.View>
                {isFocused ? svgs[index] : blurredSvg[index]}
              </Animated.View>
              {isFocused ? (
                <Text
                  style={{
                    ...styles.names,
                    color: isFocused ? Colors.PRIMARY : '#C5CACE',
                  }}>
                  {names[index]}
                </Text>
              ) : null}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CustomBottomTab;
