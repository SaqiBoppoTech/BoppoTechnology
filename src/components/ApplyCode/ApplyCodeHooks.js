import React, {useState} from 'react';

const ApplyCodeHook = () => {
  const [Apply, setApply] = useState(false);
  const toggleApply = () => setApply(!Apply);

  const onPressApply = () => {
    console.log('Apply');
    toggleApply();
  };

  return {
    onPressApply,
    Apply,
    setApply,
  };
};

export default ApplyCodeHook;
