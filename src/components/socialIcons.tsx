import React from 'react'
import {Flex} from "@chakra-ui/react";
import PFIconButton 
from '../foundation/PFIconButton/PFIconButton';

import {
    FaMedium,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

export const SocialIcons = () => {
  return (
    
        <Flex //VSTACK
         direction={['row','column','column','column']}
         mt={['2rem','0rem', '0rem', '0rem']}
        
        >
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
        </Flex>
  )
}

