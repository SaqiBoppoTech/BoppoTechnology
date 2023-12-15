import {useNavigation} from '@react-navigation/native';

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
