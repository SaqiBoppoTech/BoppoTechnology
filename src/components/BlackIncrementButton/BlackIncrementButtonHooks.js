import React, {useState} from 'react';

const BlackIncrementButtonHooks = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return {
    increment,
    decrement,
    count,
    setCount,
  };
};

export default BlackIncrementButtonHooks;
