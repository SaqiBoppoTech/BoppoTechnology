import React, {useState} from 'react';

const BrandHooks = () => {
  const [checkboxes, setCheckboxes] = useState([
    {label: 'Good Earth', checked: false},
    {label: 'Nescafe', checked: false},
    {label: 'Nivea', checked: false},
    {label: 'Good Earth', checked: false},
    {label: 'Nescafe', checked: false},
    {label: 'Nivea', checked: false},
    {label: 'Good Earth', checked: false},
    {label: 'Nescafe', checked: false},
    {label: 'Nivea', checked: false},
    {label: 'Good Earth', checked: false},
    {label: 'Nescafe', checked: false},
    {label: 'Nivea', checked: false},
    {label: 'Good Earth', checked: false},
    {label: 'Nescafe', checked: false},
    {label: 'Nivea', checked: false},
    {label: 'Good Earth', checked: false},
    {label: 'Nescafe', checked: false},
    {label: 'Nivea', checked: false},
  ]);

  const handleCheckboxChange = index => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index].checked = !updatedCheckboxes[index].checked;
    setCheckboxes(updatedCheckboxes);
  };

  return {checkboxes, setCheckboxes, handleCheckboxChange};
};

export {BrandHooks};
