import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import {useEffect, useState} from 'react';
import axios from 'axios';
import * as UserAction from '../../redux/actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
import {TOKEN} from '../../global/config';
const EditProfileHooks = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(UserAction.setAppBar(true));
    navigation.navigate(ScreenNames.SUCCESS_SCREEN, {
      message: `Profile Edited \nSuccessfully`,
    });
  };
  const navigateToChangePassword = () => {
    navigation.navigate(ScreenNames.CHANGE_PASSWORD);
  };

  ///API CODE GETPROFILE
  const [profile, setProfile] = useState(null);

  const getProfileData = async () => {
    try {
      let url = `https://stage-api.boppogo.com/auth/api/v1/customer/profile`;
      const response = await axios.get(url, {
        headers: {
          Authorization: TOKEN,
        },
      });
      setProfile(response.data.data.customerDetails);
      setfirstName(response.data.data.customerDetails?.firstname);
      setLastname(response.data.data.customerDetails?.lastname);
      setEmail(response.data.data.customerDetails?.email);
      setContactNo(response.data.data.customerDetails?.contact_no);
    } catch (error) {
      console.log('error getProfile', error.message);
    }
  };

  const [firstName, setfirstName] = useState('');
  const [lastname, setLastname] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    getProfileData();
  }, []);

  return {
    handleGoBack,
    onSubmit,
    navigateToChangePassword,
    firstName,
    setfirstName,
    lastname,
    setLastname,
    contactNo,
    setContactNo,
    email,
    setEmail,
  };
};

export default EditProfileHooks;
