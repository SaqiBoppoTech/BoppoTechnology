import React from "react";

const HomeHooks = () => {

    //  VARIABLE
    const [isPopupVisible, setPopupVisible] = React.useState(false);

    // FUNCTION
    const togglePopup = () => {
      setPopupVisible(!isPopupVisible);
    };
  
    return{
        isPopupVisible, setPopupVisible,
        togglePopup
    }
}
export {HomeHooks}