import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import {useEffect, useState} from 'react';
import axios from 'axios';
import * as UserAction from '../../redux/actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
import {API_END_POINT, BASE_URL, ORIGIN, TOKEN} from '../../global/config';
import { signUpValidation } from '../../global/validation';
import axiosInstance from '../../global/api-core';
const EditProfileHooks = () => {
  const navigation = useNavigation();
  let userData = useSelector(e => e?.user?.userData);
  console.warn("asdasd",userData);

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
      const response = await axiosInstance.get(API_END_POINT.PROFILE)
      setProfile(response.data.data.customerDetails);
      setfirstName(response.data.data.customerDetails?.firstname);
      setLastname(response.data.data.customerDetails?.lastname);
      setEmail(response.data.data.customerDetails?.email);
      setContactNo(response.data.data.customerDetails?.contact_no);
    } catch (error) {
      console.log('error getProfile', error.message);
    }
  };

  console.warn("asdasda",profile && profile);

  const [firstName, setfirstName] = useState('');
  const [lastname, setLastname] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [email, setEmail] = useState('');

  ///API OF UPDATE PROFILE
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
  
  const updateUserProfile = async () => {
    let regestarationData = {
      firstname: firstName,
      lastname: lastname,
      email: email,
      password: 'Saqi@123',
      country_code: '+91',
      contact_no: 9999988888,
    };
    if (
      signUpValidation({
        ...regestarationData,
        confirmPassword : 'Saqi@123',
        openGlobalModal,
      })
    ) {
    try {
      let url = `/auth/api/v1/customer/update-profile`;
      // console.warn("====2====", url,{
      //   firstname: firstName,
      //   lastname: lastname,
      //   email: email,
      //   date_of_birth: '2000-12-5',
      //   gender: 'Male',
      // },);
      const response = await axiosInstance.patch(
        url,{
          firstname: firstName,
          lastname: lastname,
          email: email,
          date_of_birth: '2000-12-5',
          gender: 'Male',
        },
      );
      if (response.data.success == true) {
        onSubmit();
      }
    } catch (error) {
      console.log('error UpdateUserProfile', error.message);
    }
  }
  };

  ///API OF CHANGE PASSWORD
  const navigateToChangePassword = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('authorization', TOKEN);
      myHeaders.append('origin', ORIGIN);
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
      };
      const response = await fetch(
        `${BASE_URL}/auth/api/v1/customer/change-password`,
        requestOptions,
      );
      const result = await response.json();
      if (result.success == true) {
        navigation.navigate(ScreenNames.CHANGE_PASSWORD);
        dispatch(UserAction.setChangePasswordOtp(result.data.otp));
      }
    } catch (error) {
      console.log('error ChangePassword', error.message);
    }
  };

  //API OF CHANGE CONTACT NUMBER
  const navigateToVerifyMobileNumberScreen = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('authorization', TOKEN);
      myHeaders.append('origin', ORIGIN);
      myHeaders.append('Content-Type', 'application/json');

      const body = JSON.stringify({
        new_contact_no: contactNo,
        new_country_code: '+91',
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: body,
        redirect: 'follow',
      };
      const response = await fetch(
        `${BASE_URL}/auth/api/v1/customer/change-contact-no`,
        requestOptions,
      );
      const result = await response.json();
      if (result.success == true) {
        navigation.navigate(ScreenNames.VERIFY_NUMBER_EDIT_PROFILE);
        dispatch(UserAction.setChangeMobileOtp(result.data.otp));
        dispatch(UserAction.setChangeMobileOtpToken(result.data.changeContactNoToken));
      }
    } catch (error) {
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
  };
};

export default EditProfileHooks;
