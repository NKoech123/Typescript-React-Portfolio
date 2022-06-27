import React from "react";
import PFIconButton from "../../foundation/PFIconButton/PFIconButton";


import {
    FaMedium,
    
} from "react-icons/fa";

export default {
  title: "Foundation/PFIconButton",
  component: PFIconButton,
};

export const MediumIconButton = () => {
  return (
    <PFIconButton 
       icon={<FaMedium/>}
       ariaLabel = "medium icon"
       
      
    />
   
  );
};


