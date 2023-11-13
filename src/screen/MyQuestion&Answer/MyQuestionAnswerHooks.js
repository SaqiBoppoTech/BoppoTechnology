import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';

const MyQuestionAnswerHooks = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const navigateToDetailQuestionAnswerView = () => {
    navigation.navigate(ScreenNames.QUESTION_DETAIL_VIEW);
  };
  return {
    handleGoBack,
    navigateToDetailQuestionAnswerView,
  };
};

export default MyQuestionAnswerHooks;
