import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Animated } from 'react-native';
import { styles } from './OnBoardingStyle';
import { OnBoardingHooks } from './OnBoardingHooks';
import { STATIC_DATA } from '../../global/staticdata';
import FocusAwareStatusBar from '../../component/FocusAwareStatusBar';
import { Colors, Constant } from '../../global';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import RightSvg from '../../assets/svgs/RightSvg.svg'
const OnBoardingScreen = () => {
    const { currentIndex, handleNext, renderOnBoarding,
        renderSliderStatusBar, handleScroll, skip,
        handleSlide,
        flatListRef
    } = OnBoardingHooks()
    return (
        <View style={styles.container}>
            <FocusAwareStatusBar barColor={Colors.PRIMARY} />
            <View style={styles.parent}>
                <View style={{}}>
                    <Animated.FlatList
                        ref={flatListRef}
                        horizontal
                        data={STATIC_DATA.sliderData}
                        renderItem={renderOnBoarding}
                        initialScrollIndex={currentIndex}
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onEndReachedThreshold={0.5}
                        // scrollEnabled={false}
                        // onScroll={handleScroll}
                    />
                </View>
                {/* <View style={styles.child}>
                </View> */}
            </View>
            <View style={styles.positionBottom}>
                    <View style={styles.flexDirectionContainer}>
                        <TouchableOpacity onPress={skip}>
                            <Text style={styles.skipFontStyle}>Skip</Text>
                        </TouchableOpacity>
                        <View style={styles.indicatorContainerStyle}>
                            <FlatList horizontal data={STATIC_DATA.sliderData} renderItem={renderSliderStatusBar} />
                        </View>
                        <TouchableOpacity onPress={handleNext} style={styles.boxContainer}>
                            <RightSvg heigth={CHANGE_BY_MOBILE_DPI(8)} width={CHANGE_BY_MOBILE_DPI(8)}/>
                        </TouchableOpacity>
            </View>
                    </View>
        </View>
    );
};
export default OnBoardingScreen;
