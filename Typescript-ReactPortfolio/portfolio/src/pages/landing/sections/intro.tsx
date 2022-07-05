import React from 'react'
import { Flex,Box, Heading, HStack, Link,Text, VStack } from "@chakra-ui/react";

import Keyword from '../../../components/keywords';
import {VscTriangleRight} from "react-icons/vsc";

import PFButton from '../../../foundation/PFButton/PFButton';
import { SocialIcons } from '../../../components/socialIcons';

export const Intro = () => {
  return (

    <Flex mx="8%"  mb="14.68%" height='70.64%'>
   
       
          <HStack spacing="650px" mt="15px">=
             
                <VStack >
                  
                    <Flex >
                      
                      <Text ><Keyword arrowIcon={VscTriangleRight}/>Python</Text>
                      <Text ><Keyword arrowIcon={VscTriangleRight}/>Typescript</Text>
                      <Text ><Keyword arrowIcon={VscTriangleRight}/>SQL</Text>
                      <Text ><Keyword arrowIcon={VscTriangleRight}/>HTML</Text>
                      <Text ><Keyword arrowIcon={VscTriangleRight}/>CSS</Text>
                   
                    </Flex>
                 
                    
                    
                <Box >
                  <Text fontSize="60px" fontWeight="700" height="100px" ml="80px" mb="20px" whiteSpace='nowrap'>Nicholas Koech</Text>
                  <Text  fontSize="20px" fontWeight="300" height="24px" ml="80px" mb="20px">Software engineer</Text>
                </Box>
                      <Box ml="90px">
                      <HStack >
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
                      </Box>
                


                </VStack>
              
            <Box>
            <SocialIcons/>
            </Box>
          </HStack>
        
       
  
   

    </Flex>
    
  )
}

