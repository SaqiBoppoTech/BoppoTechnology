import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';
import {useEffect, useState} from 'react';
import axios from 'axios';
const EditProfileHooks = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const onSubmit = () => {
    navigation.navigate(ScreenNames.SUCCESS_SCREEN, {
      message: 'Added successfully',
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
          Authorization: `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVqd2FsLnlhZGF2QGJvcHBvdGVjaG5vbG9naWVzLmNvbSIsImNvbnRhY3Rfbm8iOiI5OTg3Nzc5NDA3IiwidG9rZW5fdHlwZSI6IkFDQ0VTU19UT0tFTiIsImlhdCI6MTcwMjYxNDYzMiwiZXhwIjoxNzAyNzAxMDMyLCJhdWQiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIiwiaXNzIjoiQm9wcG8gR28iLCJzdWIiOiJBdXRoZW50aWNhdGlvbiBTZXJ2aWNlIn0.c_n31qVq_pDaZj-41sl1m9O6HePpHKTVsEx1ZGdeV8w5lZ9vTiOLaA3wvrllsyHdfNPSIcvNx6dicoi4gXOVHAXVxXMolF2RxeghLLMqodo9ArSaZ0VQsMDyICWrxWuj6ZcHHHj3u_OaZE4DMfIWdW6wuwKfQVNQWpi3RuZBjqs-ZruaISJII0SxwCo9Y3h1SBoSpbKAmoZ1cnNRpjChlGI377qcLVZ7AOF3XuZeH2souMwQlvl4hNzlO-wWTFQeNZ9MT8GVlEEUVgUyF8XckzA-sOrOTgupKwoSRQGFOyBfffxGyben8OtDmWW_QSQH4H3dsPQxynpMfiX7WApyiQ`,
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
