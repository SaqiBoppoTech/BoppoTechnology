import { Alert } from "react-native";
import { Constant } from ".";
export const signUpValidation = ({ firstname, lastname, email, contact_no, password, confirmPassword, openGlobalModal }) => {
  if (firstname.length == 0 || lastname.length == 0 ) {
    openGlobalModal({ title: 'Please enter a valid first and last name' })
    return false;
  }
  if (!Constant.regex.loginValidation.emailRegex.test(email)) {
    openGlobalModal({ title: 'Please enter a valid email address' })
    return false;
  }
  if (!Constant.regex.loginValidation.mobileRegex.test(contact_no)) {
    openGlobalModal({ title: 'Please enter a valid 10-digit mobile number' })
    return false;
  }
  if (!Constant.regex.password.test(password)) {
    openGlobalModal({ title: 'Password must be at least 8 characters and include at least one letter and one number' })
    return false;
  }
  if (password !== confirmPassword) {
    openGlobalModal({ title: 'Password and ConfirmPassword should be same' })
    return false;
  }
  return true
}
export const loginValidation = ({ email, password, openGlobalModal }) => {
  if (!Constant.regex.loginValidation.emailRegex.test(email) && !Constant.regex.loginValidation.mobileRegex.test(email)) {
    openGlobalModal({ title: 'Please enter a valid Email/Mobile Number' })
    return false;
  }
  if (!Constant.regex.password.test(password)) {
    openGlobalModal({ title: 'Password must be at least 8 characters and include at least one letter and one number' })
    return false;
  }
  return true
}

export const emailAndMobileNumberValidation = ({ emailAndPhoneNumber, openGlobalModal }) => {
  if (!Constant.regex.loginValidation.emailRegex.test(emailAndPhoneNumber) && !Constant.regex.loginValidation.mobileRegex.test(emailAndPhoneNumber)) {
    openGlobalModal({ title: 'Please enter a valid Email/Mobile Number' })
    return false;
  }
  return true
}

export const passwordValidation = ({ password, retryPassword, openGlobalModal }) => {
  if (!Constant.regex.password.test(password)) {
    openGlobalModal({ title: 'Password must be at least 8 characters and include at least one letter and one number' })
    return false;
  }
  if (password !== retryPassword) {
    openGlobalModal({ title: 'Password and ConfirmPassword should be same' })
    return false;
  }
  return true
}