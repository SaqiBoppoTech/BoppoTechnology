import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styles } from './ProductDetailViewStyle';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import { Colors, Constant } from '../../global';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import CustomCarousel from '../../components/Carousel/CustomCarousel';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import HeartSvg from '../../assets/svgs/HeartSvg.svg'
import ShareSvg from '../../assets/svgs/ShareSvg.svg'
import { STATIC_DATA } from '../../global/staticdata';
import CustomTopTabs from '../../navigation/CustomTopTabs/CustomTopTab';
import { ProductDetailViewHooks } from './ProductDetailViewHooks';
import ProductDescriptionScreen from '../../components/ProductDescription/ProductDescription';
import ProductDetailScreen from '../../components/ProductDetail/ProductDetailScreen';
import ProductReviewScreen from '../../components/ProductReview/ProductReviewScreen';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
const ProductDetailViewScreen = () => {
  const { renderTopBar } = ProductDetailViewHooks()
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar barColor={Colors.WHITE} />
      <SearchAppBar
        showIcon={true}
        showHeart={true}
        showCartIcon={true}
      />
      <View style={styles.carosalContainer}>
        <CustomCarousel
          autoPlay={false}
          externalCarsoualContainer={styles.marginContainer}
          externalData={STATIC_DATA.productDetailCarosualData}
          externalIndicatorPositionContainer={styles.positionAlignment}
          defaultWidth={Constant.SCREEN_WIDTH}
          defaultHeigth={CHANGE_BY_MOBILE_DPI(240)}
        />
        <View style={styles.iconPositionContainer}>
          <HeartSvg heigth={CHANGE_BY_MOBILE_DPI(31)} width={CHANGE_BY_MOBILE_DPI(31)} style={styles.heartSvgStyle} />
          <ShareSvg heigth={CHANGE_BY_MOBILE_DPI(31)} width={CHANGE_BY_MOBILE_DPI(31)} />
        </View>
      </View>
      <View style={styles.topTabContainer}>
        <View>
          <FlatList horizontal data={STATIC_DATA.topTabData} renderItem={renderTopBar} contentContainerStyle={styles.contentContainerStyle} />
        </View>
          <ProductDescription/>
        {/* <ProductReviewScreen/> */}
        {/* <ProductDetailScreen/> */}
      </View>
    </View>
  );
};

export default ProductDetailViewScreen;
