import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Animated} from 'react-native';
import {styles} from './OnBoardingStyle';
import {OnBoardingHooks} from './OnBoardingHooks';
import {STATIC_DATA} from '../../global/staticdata';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors, Constant} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import RightButtomSvg from '../../assets/svgs/RightButtonArrow.svg';
const OnBoardingScreen = () => {
    const { currentIndex, handleNext, renderOnBoarding,
        renderSliderStatusBar, skip,
        scrollX,flatListRef
    } = OnBoardingHooks()
    return (
        <View style={styles.container}>
            <FocusAwareStatusBar barColor={Colors.PRIMARY} />
            <View style={styles.parent}>
                <View style={{}}>
                    <Animated.FlatList
                        horizontal
                        data={STATIC_DATA.sliderData}
                        renderItem={renderOnBoarding}
                        initialScrollIndex={currentIndex}
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onEndReachedThreshold={0.5}
                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
                        keyExtractor={(item) => item.id}
                        ref={flatListRef}
                        scrollEnabled={false}
                    />
                </View>
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
                            <RightButtomSvg heigth={CHANGE_BY_MOBILE_DPI(60)} width={CHANGE_BY_MOBILE_DPI(60)}/>
                        </TouchableOpacity>
            </View>
                    </View>
        </View>
    );
};
export default OnBoardingScreen;
