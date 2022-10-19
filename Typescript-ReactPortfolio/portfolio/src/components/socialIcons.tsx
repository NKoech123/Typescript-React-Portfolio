import React from 'react'
import {VStack} from "@chakra-ui/react";
import PFIconButton 
from '../foundation/PFIconButton/PFIconButton';

import {
    FaMedium,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

export const SocialIcons = () => {
  return (
    
        <VStack spacing="1px">
              <PFIconButton icon={<FaMedium/>}
                ariaLabel = "medium icon"
                onClick={()=>{}}
              />
              <PFIconButton icon={<FaLinkedin/>}
              ariaLabel = "Linkedin icon"
              onClick={()=>{}}
              />

              <PFIconButton icon={<FaGithub/>}
                ariaLabel = "Github Icon"
                onClick={()=>{}}    
              />
        </VStack>
  )
}

