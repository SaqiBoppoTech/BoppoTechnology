import { Alert } from "react-native";
import { Constant } from ".";
export const signUpValidation = ({ firstname, lastname, email, contact_no, password, confirmPassword, openGlobalModal }) => {
  if (!Constant.regex.loginValidation.nameRegex.test(firstname) || !Constant.regex.loginValidation.nameRegex.test(lastname)) {
    openGlobalModal({title:'Please enter a valid first and last name'})
    return false;
  }
  if (!Constant.regex.loginValidation.emailRegex.test(email)) {
    openGlobalModal({title:'Please enter a valid email address'})
    return false;
  }
  if (!Constant.regex.loginValidation.mobileRegex.test(contact_no)) {
    openGlobalModal({title:'Please enter a valid 10-digit mobile number'})
    return false;
  }
  if (!Constant.regex.password.test(password)) {
    openGlobalModal({title:'Password must be at least 8 characters and include at least one letter and one number'})
    return false;
  }
  if (password !== confirmPassword) {
    openGlobalModal({title:'Password and ConfirmPassword should be same'})
    return false;
  }
  return true
}