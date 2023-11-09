import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';

const QuestionDetailHooks = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  return {
    handleGoBack,
  };
};

export default QuestionDetailHooks;
