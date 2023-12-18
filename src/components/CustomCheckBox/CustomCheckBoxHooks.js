import React, {useState, useEffect} from 'react';

const CustomCheckBoxHooks = isCheckBox => {
  // HOOKS
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(isCheckBox);
  }, [isCheckBox]);

  return {
    isChecked,
    setChecked,
  };
};

export {CustomCheckBoxHooks};
