import { Text, View,Animated } from 'react-native'
import { styles } from './OnBoardingStyle'
import { useRef, useState } from 'react';
import { STATIC_DATA } from '../../global/staticdata';
import { Colors, Constant, ScreenNames } from '../../global';
import { CommonActions, useNavigation } from '@react-navigation/native';

const OnBoardingHooks = () => {
    const navigation = useNavigation()
    //VARIABALE

    //USEREF
    const slideValue = new Animated.Value(0);
    //HOOK
    const [currentIndex, setCurrentIndex] = useState(0);
    //FUNCTIOM
    //NAVIGATION FUNCTION
    const resetStackAndGoToBottom = CommonActions.reset({
        index: 0,
        routes: [{ name: ScreenNames.BOTTOM_TAB, }],
    });

      const handleSlide = () => {
        const slideDistance = currentIndex* 200; // Adjust the distance you want to slide
        Animated.timing(slideValue, {
          toValue: slideDistance,
          duration: 300, 
          useNativeDriver: false, 
        }).start();
      };
      const slideAnimation = slideValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 200], // Adjust the distance you want to slide
      });
    const handleNext = () => {
        const nextIndex = currentIndex + 1;
        if (currentIndex < STATIC_DATA.sliderData.length - 1) {
            handleSlide()
            setCurrentIndex(nextIndex);
        } else {
            navigation.dispatch(resetStackAndGoToBottom)
        }
    };
    const skip = () => {
        navigation.dispatch(resetStackAndGoToBottom)
    }

    const renderOnBoarding = ({ item, index }) => {
        return (
            <Animated.View style={{...styles.sliderContainer, transform: [{ translateX: slideAnimation }],}}  >
                <Text style={styles.sliderFontStyle}>{STATIC_DATA.sliderData[currentIndex].text}</Text>
            </Animated.View>
        )
    }
    const renderSliderStatusBar = ({ item, index }) => {
        return (
            <View style={styles.barContainer}>
                <View style={{ ...styles.bar, backgroundColor: currentIndex == index ? Colors.BLACK : Colors.GRAY_MEDIUM }}></View>
            </View>
        )
    }
    //USEEFFECT
    return {
        currentIndex, setCurrentIndex,
        handleNext,
        renderOnBoarding,
        renderSliderStatusBar,
        skip,handleSlide
    }
}
export { OnBoardingHooks }