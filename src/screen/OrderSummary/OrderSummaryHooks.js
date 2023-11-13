import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';

const OrderSummaryHooks = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const onEditClick = () => {};
  const onRemoveClick = () => {};
  const onAddNewDeliveryAddress = () => {};
  const onAddNewBillingAddress = () => {};

  const navigateToPayment = () => {
    // navigation.navigate(ScreenNames.ORDER_SUMMARY_SCREEN);
  };

  return {
    handleGoBack,
    onAddNewBillingAddress,
    onAddNewDeliveryAddress,
    onEditClick,
    onRemoveClick,
    navigateToPayment,
  };
};

export default OrderSummaryHooks;
