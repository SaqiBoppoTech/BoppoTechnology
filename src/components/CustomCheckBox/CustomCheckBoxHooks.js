import React, {useState} from 'react';

const CustomCheckBoxHooks = () => {
  // HOOKS
  const [isChecked, setChecked] = useState(false);

  return {
    isChecked,
    setChecked,
  };
};

export {CustomCheckBoxHooks};
