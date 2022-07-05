import React from 'react'
import { Flex,Box, Heading, HStack, Link,Text, VStack } from "@chakra-ui/react";

import Keyword from '../../../components/keywords';
import {VscTriangleRight} from "react-icons/vsc";

import PFButton from '../../../foundation/PFButton/PFButton';
import { SocialIcons } from '../../../components/socialIcons';

export const Intro = () => {
  return (

    <Flex mx="8%"  mb="14.68%" w ='83.33vw' h='70.64vh'>
   
       
          <HStack spacing='46.33vw' alignItems='end' mb='17.46vh' mt='27.84vh'>
             
                <VStack alignItems= 'start' ml='4.63%' >
                  
                    <Flex  mt='15.42%' mb="1.34%">
                      
                      <Text fontSize='15px'><Keyword arrowIcon={VscTriangleRight}/>Python</Text>
                      <Text fontSize='15px'><Keyword arrowIcon={VscTriangleRight}/>Typescript</Text>
                      <Text fontSize='15px'><Keyword arrowIcon={VscTriangleRight}/>SQL</Text>
                      <Text fontSize='15px'><Keyword arrowIcon={VscTriangleRight}/>HTML</Text>
                      <Text fontSize='15px'><Keyword arrowIcon={VscTriangleRight}/>CSS</Text>
                   
                    </Flex>
                 
                    
                    <Flex direction='column' mt='0px'>
                      <Text fontSize="60px" fontWeight="700" height="100px"   whiteSpace='nowrap'>Nicholas Koech</Text>
                      <Text  fontSize="20px" fontWeight="300" height="24px"  mb="20px">Software engineer</Text>
                    </Flex>
                   
                    <Flex direction='row' gap='20px' alignItems='center' mb='17.46%'>
                      <PFButton
                            variant = "solid"
                            stylesProps={{
                              width: "208px",
                              height: "47px",
                              borderRadius: "10px",
                              backgroundColor:"#EF855B"
                             
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
                            OnClick={() => {}}
                          >
                            About me
                      </PFButton>
                    </Flex>

                </VStack>
              
            <Flex>
              <SocialIcons/>
            </Flex>
          </HStack>

    </Flex>
    
  )
}

