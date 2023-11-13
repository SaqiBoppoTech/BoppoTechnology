import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';

const MyReviewHooks = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const navigateToProductDetail = () => {
    navigation.navigate(ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN);
  };
  const onRemovePress = () => {};
  return {
    handleGoBack,
    navigateToProductDetail,
    onRemovePress,
  };
};

export default MyReviewHooks;
