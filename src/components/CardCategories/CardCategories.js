//import liraries
import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {styles} from './CardStyleCategories';
import PlusSvg from '../../assets/svgs/PlusSvg.svg';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import RatingComponent from '../RatingStar';
import SelectStarSvg from '../../assets/svgs/SelectStarSvg.svg';
import {Fonts} from '../../global';

// create a component
const CardCategory = ({
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
      <View style={[styles.imageContainer, categoryDetailImageContainer]}>
        {image != '/url' ? (
          <Image
            source={{
              uri: `https://cdn-stage.boppogo.com/${image}`,
            }}
            style={styles.imageWrapper}
          />
        ) : (
          <Image
            resizeMode="contain"
            source={require('../../assets/images/Logo.png')}
            style={{
              ...styles.imageWrapper,
              height: CHANGE_BY_MOBILE_DPI(50),
              marginTop: CHANGE_BY_MOBILE_DPI(40),
            }}
          />
        )}
      </View>
      <View style={[styles.paddingConmtainer, paddingContainerCategoryDetail]}>
        <Text
          style={[styles.titleFontStyle, titleFontStyleCategoryDetail]}
          numberOfLines={1}>
          {name}
        </Text>

        <View style={styles.priceContainer}>
          <Text style={styles.priceFontStyle}>${price}</Text>

          <Text style={styles.discountFontStyle}>${discountPrice}</Text>

          <Text style={styles.percentageFontStyle}>{percent}% OFF </Text>
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
export default CardCategory;
