//import liraries
import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {styles} from './CardStyle';
import PlusSvg from '../../assets/svgs/PlusSvg.svg';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import RatingComponent from '../RatingStar';
import SelectStarSvg from '../../assets/svgs/SelectStarSvg.svg';
import {Fonts} from '../../global';

// create a component
const Card = ({
  image,
  name,
  price,
  discountPrice,
  percent,
  plusSvgVisibility,
  onPress,
  index,
  categoryDetailRatingStar,
  categoryCardContainer,
  categoryDetailImageContainer,
  paddingContainerCategoryDetail,
  titleFontStyleCategoryDetail,
  freeDelivery,
}) => {
  return (
    <TouchableOpacity
     
      style={[styles.exploreItemCardContainer, categoryCardContainer]}
      onPress={onPress}>
      {image && (
        <View style={[styles.imageContainer, categoryDetailImageContainer]}>
          <Image resizeMode="contain" source={image} style={styles.image} />
        </View>
      )}
      <View style={[styles.paddingConmtainer, paddingContainerCategoryDetail]}>
        {name && (
          <Text
            style={[styles.titleFontStyle, titleFontStyleCategoryDetail]}
            numberOfLines={3}>
            {name}
          </Text>
        )}
        <View style={styles.priceContainer}>
          {price && <Text style={styles.priceFontStyle}>${price}</Text>}
          {discountPrice && (
            <Text style={styles.discountFontStyle}>${discountPrice}</Text>
          )}
          {percent && (
            <Text style={styles.percentageFontStyle}>{percent}% OFF </Text>
          )}
        </View>
        {categoryDetailRatingStar ? (
          <View style={styles.starWrapper}>
            <FlatList
              horizontal
              data={[1, 2, 3, 4, 5]}
              renderItem={() => (
                <SelectStarSvg width="15" height="15" style={styles.star} />
              )}
            />
          </View>
        ) : null}
        {freeDelivery ? (
          <Text style={styles.freeDeliveryText}>Free Delivery Today</Text>
        ) : null}
      </View>
      {plusSvgVisibility && (
        <View style={styles.positionContainer}>
          <TouchableOpacity>
            <PlusSvg
              heigth={CHANGE_BY_MOBILE_DPI(22)}
              width={CHANGE_BY_MOBILE_DPI(22)}
            />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};
export default Card;
