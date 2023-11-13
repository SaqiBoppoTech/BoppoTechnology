import React, {useState} from 'react';

const ShippingTypeHooks = () => {
  const [selectedShippingMethod, setSelectedShippingMethod] = useState(0);

  return {
    selectedShippingMethod,
    setSelectedShippingMethod,
  };
};
export default ShippingTypeHooks;
