const {TouchableOpacity, Image, View, Text} = require('react-native');
import {styles} from './BestOfferStyles';
import {useNavigation} from '@react-navigation/native';
import { Colors, ScreenNames} from '../../global/index';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import PlusSvg from '../../assets/svgs/PlusSvg.svg'
import React from 'react';
import Card from '../Card/Card';
const BestOfferHooks = () => {
  const navigation = useNavigation();

  const  [selectOffer,setSelectOffer] = React.useState(0)
  const navigateToProductDetail = () => {
    navigation.navigate(ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN);
  };
  const renderItem = ({ item, index }) => {
    return (
      <Card
        image={item.image}
        name={ item.name}
        price={ item.price}
        discountPrice={item.discountPrice}
        percent={item.percent}
        plusSvgVisibility={true}
        onPress={navigateToProductDetail}
      />
    )
  }
  const renderOfferTopTab = ({item,index}) => {
    const selectTheOffer = () => {
      setSelectOffer(index)
    }
    return(
      <TouchableOpacity
      onPress={selectTheOffer}
       style={styles.topTabparticualrContainer}>
        <Text style={{...styles.topTabFontStyle,color:selectOffer == index? Colors.BLACK : Colors.GRAY_DARK}}>{item.name}</Text>
       { selectOffer == index ?  <View style={styles.underLine}></View> : <></>}
      </TouchableOpacity>
    )
  }

  return {
    renderItem,
    renderOfferTopTab
  };
};

export {BestOfferHooks};
