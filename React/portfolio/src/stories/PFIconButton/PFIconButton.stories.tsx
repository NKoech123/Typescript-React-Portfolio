import React from "react";
import PFIconButton from "../../foundation/PFIconButton/PFIconButton";


import {
    FaMedium,
    FaLinkedin,
    FaGithub,
    
    
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
       onClick={()=>{}}
      
    />
   
  );
};

export const LinkedInIconButton = () => {
    return (

      <PFIconButton 
         icon={<FaLinkedin/>}
         ariaLabel = "Linkedin icon"
         onClick={()=>{}}
         
      />
     
    );
  };
  

export const GithubIconButton = () => {
    return (

      <PFIconButton 
         icon={<FaGithub/>}
         ariaLabel = "Github Icon"
         onClick={()=>{}}
         
      />
     
    );
  };