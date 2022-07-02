import React from 'react'
import {Flex, VStack} from "@chakra-ui/react";
import PFIconButton from '../foundation/PFIconButton/PFIconButton';

import {
    FaMedium,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

export const SocialIcons = () => {
  return (
    <Flex  alignItems="flex-end" mr='100'>
        <VStack spacing="1px">
          <PFIconButton 
            icon={<FaMedium/>}
            ariaLabel = "medium icon"
            onClick={()=>{}}
        />
        <PFIconButton 
         icon={<FaLinkedin/>}
         ariaLabel = "Linkedin icon"
         onClick={()=>{}}
         
        />

        <PFIconButton 
                icon={<FaGithub/>}
                ariaLabel = "Github Icon"
                onClick={()=>{}}
                
        />
    </VStack>
    </Flex>
    
  )
}

