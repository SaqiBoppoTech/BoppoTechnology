import React, {useState} from 'react';

const ShippingMethodHooks = () => {
  const [selectedRadio, setSelectedRadio] = useState(1);
  return {
    selectedRadio,
    setSelectedRadio,
  };
};

export default ShippingMethodHooks;
