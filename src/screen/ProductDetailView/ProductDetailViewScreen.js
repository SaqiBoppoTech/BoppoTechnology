import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styles } from './ProductDetailViewStyle';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import { Colors, Constant } from '../../global';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import CustomCarousel from '../../components/Carousel/CustomCarousel';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import HeartSvg from '../../assets/svgs/HeartSvg.svg'
import ShareSvg from '../../assets/svgs/ShareSvg.svg'
const ProductDetailViewScreen = () => {
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
      //  externalData={}
       externalIndicatorPositionContainer={styles.positionAlignment}
       defaultWidth={Constant.SCREEN_WIDTH}
       defaultHeigth={CHANGE_BY_MOBILE_DPI(240)}
      />
      <View style={styles.iconPositionContainer}>
        <HeartSvg heigth={CHANGE_BY_MOBILE_DPI(31)} width={CHANGE_BY_MOBILE_DPI(31)} style={styles.heartSvgStyle}/>
        <ShareSvg heigth={CHANGE_BY_MOBILE_DPI(31)} width={CHANGE_BY_MOBILE_DPI(31)}/>
      </View>
      </View>
    </View>
  );
};

export default ProductDetailViewScreen;
