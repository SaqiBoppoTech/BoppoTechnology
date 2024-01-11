import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import {useEffect, useState} from 'react';
import axios from 'axios';
import * as UserAction from '../../redux/actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
import {API_END_POINT, BASE_URL, ORIGIN, TOKEN} from '../../global/config';
import {signUpValidation} from '../../global/validation';
import axiosInstance from '../../global/api-core';
const EditProfileHooks = () => {
  const navigation = useNavigation();
  let userData = useSelector(e => e?.user?.userData);
  console.warn('asdasd', userData);

  const handleGoBack = () => {
    navigation.goBack();
  };
  const dispatch = useDispatch();

  const onSubmit = () => {
    // dispatch(UserAction.setAppBar(true));
    navigation.navigate(ScreenNames.SUCCESS_SCREEN, {
      message: `Profile Edited \nSuccessfully`,
    });
  };
  // const navigateToVerifyMobileNumberScreen = () => {
  //   navigation.navigate(ScreenNames.VERIFY_NUMBER_EDIT_PROFILE);
  // };

  const navigateToSuccessScreen = () => {
    updateUserProfile();
  };

  ///API CODE GETPROFILE
  const [profile, setProfile] = useState(null);

  const getProfileData = async () => {
    try {
      const response = await axiosInstance.get(API_END_POINT.PROFILE);
      setProfile(response.data.data.customerDetails);
      setfirstName(response.data.data.customerDetails?.firstname);
      setLastname(response.data.data.customerDetails?.lastname);
      setEmail(response.data.data.customerDetails?.email);
      setContactNo(response.data.data.customerDetails?.contact_no);
    } catch (error) {
      console.log('error getProfile', error.message);
    }
  };

  console.warn('asdasda', profile && profile);

  const [firstName, setfirstName] = useState('');
  const [lastname, setLastname] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [isToastAlertVisible, setToastAlertVisible] = useState(false);
  const [toastAlertText, setToastAlertText] = useState('');

  const openGlobalModal = ({title}) => {
    dispatch(
      UserAction.setAlertData({
        alertVisibility: true,
        message: 'Alert',
        description: title,
        leftText: 'OK',
        rightEvent: () => {},
        leftEvent: () => {},
      }),
    );
    dispatch(UserAction.setGlobalLoader(false));
  };

  const showToastAlert = text => {
    setToastAlertText(text);
    setToastAlertVisible(true);
  };

  ///API OF UPDATE PROFILE
  const updateUserProfile = async () => {
    try {
      if (dateOfBirth == '') {
        showToastAlert('Enter Date of Birth');
      } else if (gender == '') {
        showToastAlert('Enter Your Gender');
      } else {
        let url = `${API_END_POINT.UPDATE_PROFILE}`;
        let response = await axiosInstance.patch(url, {
          firstname: firstName,
          lastname: lastname,
          email: email,
          date_of_birth: dateOfBirth,
          gender: gender,
        });
        if (response.data.success == true) {
          onSubmit();
        }
      }
    } catch (error) {
      console.log('error UpdateUserProfile', error.message);
    }
  };

  ///API OF CHANGE PASSWORD
  const navigateToChangePassword = async () => {
    try {
      let url = `${API_END_POINT.CHANGE_PASSWORD}`;
      let response = await axiosInstance.post(url);
      if (response.data.success == true) {
        navigation.navigate(ScreenNames.CHANGE_PASSWORD);
        dispatch(UserAction.setChangePasswordOtp(response.data.data.otp));
      }
    } catch (error) {
      console.log('error ChangePassword', error.message);
    }
  };

  //API OF CHANGE CONTACT NUMBER
  const navigateToVerifyMobileNumberScreen = async () => {
    try {
      dispatch(UserAction.setGlobalLoader(true));
      let url = `${API_END_POINT.CHANGE_CONTACT_NUMBER}`;
      let response = await axiosInstance.post(url, {
        new_contact_no: contactNo,
        new_country_code: '+91',
      });
      if (response.data.success == true) {
        dispatch(UserAction.setGlobalLoader(false));
        navigation.navigate(ScreenNames.VERIFY_NUMBER_EDIT_PROFILE);
        dispatch(UserAction.setChangeMobileOtp(response.data.data.otp));
        dispatch(
          UserAction.setChangeMobileOtpToken(
            response.data.data.changeContactNoToken,
          ),
        );
      }
    } catch (error) {
      dispatch(UserAction.setGlobalLoader(false));
      console.log('error ChangeMobileNumber', error.message);
    }
  };

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
    navigateToSuccessScreen,
    navigateToVerifyMobileNumberScreen,
    dateOfBirth,
    setDateOfBirth,
    gender,
    setGender,
    toastAlertText,
    isToastAlertVisible,
    setToastAlertVisible,
  };
};

export default EditProfileHooks;
