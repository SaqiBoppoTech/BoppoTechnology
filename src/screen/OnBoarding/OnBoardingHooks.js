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
    const scrollX = new Animated.Value(0);
    const flatListRef = useRef(null);
    //USEEFFECT
    const [currentIndex, setCurrentIndex] = useState(0);
    //FUNCTIOM
    //NAVIGATION FUNCTION
    const resetStackAndGoToBottom = CommonActions.reset({
        index: 0,
        routes: [{ name: ScreenNames.LOGIN_SCREEN, }],
    });

    //ANIMATION FUNCTION
  const clickToSlide = (nextIndex) => {
    let data = STATIC_DATA.sliderData
    const itemIndex = data.findIndex((i) => i.id === data[nextIndex].id);
    if (itemIndex >= 0 && flatListRef.current) {
    flatListRef.current.scrollToItem({ item: data[itemIndex], animated: true });
    setCurrentIndex(nextIndex);
    }
  };

    

      
    const handleNext = () => {
        const nextIndex = currentIndex + 1;
        if (currentIndex < STATIC_DATA.sliderData.length - 1) {
            clickToSlide(nextIndex)
        } else {
            navigation.dispatch(resetStackAndGoToBottom)
        }
    };
    const skip = () => {
        navigation.dispatch(resetStackAndGoToBottom)
    }

    const renderOnBoarding = ({ item, index }) => {
        return (
            <Animated.View style={{...styles.sliderContainer}}  >
                <Text style={styles.sliderFontStyle}>{item.text}</Text>
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
        skip,scrollX,flatListRef
    }
}
export { OnBoardingHooks }