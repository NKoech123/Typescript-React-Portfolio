import React from 'react'
import { Flex,Box, Heading, HStack, Link,Text, VStack } from "@chakra-ui/react";

import Keyword from '../../../components/keywords';
import {VscTriangleRight} from "react-icons/vsc";

import PFButton from '../../../foundation/PFButton/PFButton';
import { SocialIcons } from '../../../components/socialIcons';

export const Intro = () => {
  return (

    <Box w="full" bg="#1A2C32" px="144px" py="100px" mb="120px">
      <Flex>
        <Flex alignItems="center">
          <HStack>
                <VStack>
                    <HStack spacing="10px" alignItems="center">
                      <Text><Keyword arrowIcon={VscTriangleRight}/>Python</Text>
                      <Text><Keyword arrowIcon={VscTriangleRight}/></Text>
                      <PFButton
                            variant = "solid"
                            stylesProps={{
                              width: "208px",
                              height: "47px",
                              borderRadius: "10px",
                              backgroundColor:"#EF855B"
                              // fontSize: "20px",
                            }}
                            OnClick={() => {}}
                          >
                            Download Resume
                      </PFButton>
                      <PFButton
                            variant="outline"
                            stylesProps={{
                              fontSize: "16px",
                              fontWeight: "400",
                              borderColor:"#EF855B",
                              color: "#EF855B"
                              
                              
                            }}
                          >
                            About me
                      </PFButton>
                    </HStack>


                </VStack>
            <SocialIcons/>
          </HStack>
        
        </Flex>
       
       
      </Flex>
   

    </Box>
    
  )
}

