import React from 'react'
import { Flex,Box, Heading, HStack, Link,Text, VStack } from "@chakra-ui/react";

import Keyword from '../../../components/keywords';
import {VscTriangleRight} from "react-icons/vsc";

import PFButton from '../../../foundation/PFButton/PFButton';
import { SocialIcons } from '../../../components/socialIcons';

export const Intro = () => {
  return (

    <Box w="full" bg="#1A2C32" px="200px" py="60px" mb="120px">
      <Flex>
        <Flex alignItems="center">
          <HStack>
                <VStack>
                    <HStack spacing="10px" alignItems="center">
                      <Text><Keyword arrowIcon={VscTriangleRight}/>Python</Text>
                      <Text><Keyword arrowIcon={VscTriangleRight}/>Typescript</Text>
                      <Text><Keyword arrowIcon={VscTriangleRight}/>SQL</Text>
                      <Text><Keyword arrowIcon={VscTriangleRight}/>HTML</Text>
                      <Text><Keyword arrowIcon={VscTriangleRight}/>CSS</Text>
                    </HStack>
                <Text>Nicholas Koech</Text>
                <Text>Software engineer</Text>
                    <HStack>
                      <PFButton
                            variant = "solid"
                            stylesProps={{
                              width: "208px",
                              height: "47px",
                              borderRadius: "10px",
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

