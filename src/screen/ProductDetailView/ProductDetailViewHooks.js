import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './ProductDetailViewStyle';
import {Colors, Fonts, ScreenNames} from '../../global';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import ProductReview from '../../components/ProductReview/ProductReview';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import QuestionAndAnswer from '../../components/QuestionAndAnswer/QuestionAndAnswer';
import { useNavigation } from '@react-navigation/native';

const ProductDetailViewHooks = () => {
  const [selectedTab, setSelectTabs] = React.useState(0);
  const navigation = useNavigation()
  const openCustomView = () => {
    return (
      <View style={styles.marginBottomContainer}>
        {selectedTab == 0 ? (
          <ProductDescription />
        ) : selectedTab == 1 ? (
          <ProductDetail />
        ) : selectedTab == 2 ? (
          <ProductReview />
        ) : (
          <QuestionAndAnswer />
        )}
      </View>
    );
  };

  const navigateToCart = () => {
    navigation.navigate(ScreenNames.YOUR_CART_SCREEN)
  }

  const navigateToCheckOut = () => {
    navigation.navigate(ScreenNames.ORDER_SUMMARY_SCREEN)
  }

  const renderTopBar = ({item, index}) => {
    const addIndexOntState = () => {
      setSelectTabs(index);
    };
    let bottomBar = selectedTab == index && {backgroundColor: Colors.PRIMARY};
    return (
      <TouchableOpacity
        style={styles.barContainerStyle}
        onPress={addIndexOntState}>
        <Text
          style={[
            selectedTab == index
              ? styles.labelFontStyle
              : styles.labelBlurFontStyle,
          ]}>
          {item}
        </Text>
        <View style={{...styles.bottomBar, ...bottomBar}}></View>
      </TouchableOpacity>
    );
  };
  return {
    renderTopBar,
    openCustomView,
    navigateToCart,
    navigateToCheckOut
  };
};
export {ProductDetailViewHooks};
