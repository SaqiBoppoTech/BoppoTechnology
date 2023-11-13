//import liraries
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './CardStyle';
import PlusSvg from '../../assets/svgs/PlusSvg.svg'
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';

// create a component
const Card = ({ image, name, price, discountPrice, percent, plusSvgVisibility, onPress, index }) => {
    return (
        <TouchableOpacity style={{ ...styles.exploreItemCardContainer, marginRight: CHANGE_BY_MOBILE_DPI(15), }} onPress={onPress}>
            {image &&
                <View style={styles.imageContainer}>
                    <Image resizeMode='contain' source={image} style={styles.image} />
                </View>
            }
            <View style={styles.paddingConmtainer}>
                {name && <Text style={styles.titleFontStyle} numberOfLines={3}>{name}</Text>}
                <View style={styles.priceContainer}>
                    {price && <Text style={styles.priceFontStyle}>${price}</Text>}
                    {discountPrice && <Text style={styles.discountFontStyle}>${discountPrice}</Text>}
                    {percent && <Text style={styles.percentageFontStyle}>{percent}% OFF </Text>}
                </View>
            </View>
            {
                plusSvgVisibility &&
                <View style={styles.positionContainer}>
                    <TouchableOpacity>
                        <PlusSvg heigth={CHANGE_BY_MOBILE_DPI(22)} width={CHANGE_BY_MOBILE_DPI(22)} />
                    </TouchableOpacity>
                </View>
            }
        </TouchableOpacity>
    );
};
export default Card;
