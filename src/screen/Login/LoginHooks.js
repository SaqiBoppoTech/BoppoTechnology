import React, {useState} from 'react';

const LoginHooks = () => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleLogin = () => {
    const validationErrors = {};

    if (!email.match(emailRegex)) {
      validationErrors.email = 'Invalid email address';
    }

    if (!password.match(passwordRegex)) {
      validationErrors.password =
        'Password must be at least 8 characters long and contain letters and numbers.';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigation.navigate('Tabs');
    }
  };
  return {
    handleLogin,
    setEmail,
    setPassword,
    setErrors,
    errors,
    email,
    password,
  };
};

export {LoginHooks};
