import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from './AddToCartButtonStyle';
import { AddToCartButtonHooks } from './AddToCartButtonHooks';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import CrossSvg from '../../assets/svgs/CrossSvg.svg'
import { Constant } from '../../global';
const AddToCartButton = ({ externalButtonStyle, leftSvg = <></>, text = '(4) Items added to the cart',
    externalFontStyle, externalProceedStyle, externalProceedFontStyle, proceedFlag = false }) => {
    const { } = AddToCartButtonHooks()
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity style={[styles.buttonContainer, externalButtonStyle,{paddingLeft: !proceedFlag ? Constant.SCREEN_WIDTH / 7 : 0}]}>
                <View style={styles.flexDirectionContainer}>
                    <View style={styles.svgContainer}>
                        {leftSvg}
                    </View>
                    <View style={styles.flexContainer}>
                        <Text style={[styles.textFontSytle, externalFontStyle]}>{text}</Text>
                    </View>
                </View>
                {
                    proceedFlag ?
                    <View style={styles.processedBuyContainer}>
                        <TouchableOpacity style={[styles.proceedToBuyButtonStyle, externalProceedStyle]}>
                            <Text style={[styles.proceedFontStyle, externalProceedFontStyle]}>Proceed to buy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.crossContainer}>
                            <CrossSvg height={CHANGE_BY_MOBILE_DPI(15)} width={CHANGE_BY_MOBILE_DPI(15)} />
                        </TouchableOpacity>
                    </View>
                    :
                    null
                }
            </TouchableOpacity>
        </View>
    );
};

export default AddToCartButton;
