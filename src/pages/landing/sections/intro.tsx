import React from 'react'
import { Flex, HStack,Text, VStack, Box } from "@chakra-ui/react";

import Keyword from '../../../components/Keywords';
import {VscTriangleRight} from "react-icons/vsc";

import PFButton from '../../../foundation/PFButton/PFButton';
import { SocialIcons } from '../../../components/SocialIcons';

const languages  = ['Python', 'Typescript', 'SQL', 'HTML', 'CSS'];

export const Intro = () => {
  return (

    <Flex mx="8%"  mb="14.68%"  h='70.64vh'>
   
          <Flex  
          direction='row' 
          justifyContent='space-between'
          mb='17.46vh' 
          mt='20%'
          >
             
                <VStack alignItems= 'start' ml='4.63%' >
                  
                    <Flex  mb="1.34%">
                      {languages.map((language) => (
                      <ul>
                        <Box fontSize={["4px","8px","10px","15px"]} mr="20px">
                            <Box display='flex'>
                              <Keyword arrowIcon={VscTriangleRight}/> <Text color="lightGreen">{language}</Text>
                            </Box>
                        </Box>
                      </ul>
                        ))}
                    </Flex>
                 
                    
                    <Flex direction='column' mt='0px'>
                      <Text fontSize={["10px","30px","50px","60px"]} fontWeight="700"  whiteSpace='nowrap' color="whiteColor">Nicholas Koech</Text>
                      <Text  fontSize="20px" fontWeight="300" height="24px"  mb="20px" color="whiteColor">Software engineer</Text>
                    </Flex>
                   
                    <Flex direction={['column', 'column', 'row', 'row']} gap='20px' alignItems='center' mb='17.46%'>
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
              
            <Flex  ml='100%'>
              <SocialIcons/> 
            </Flex>
          </Flex>

    </Flex>
    
  )
}

