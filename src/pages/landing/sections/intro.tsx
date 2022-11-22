import React from 'react'
import { Flex,Text, Box } from "@chakra-ui/react";

import Keyword from '../../../components/Keywords';
import {VscTriangleRight} from "react-icons/vsc";

import PFButton from '../../../foundation/PFButton/PFButton';
import { SocialIcons } from '../../../components/SocialIcons';

const languages  = ['Python', 'Typescript', 'SQL', 'HTML', 'CSS'];

export const Intro = () => {
  return (

        <Flex  
          direction={['column','row','row','row']}
          justifyContent='space-between'
          alignItems='center'
          width='80%'
          mx='10%'
          my='15%'
          >
            <Flex
              alignItems= {['center','center','start','start']}
              direction='column'
            >
                  <Flex>
                    {languages.map((language) => (
                    <ul>
                      <Flex fontSize={["10px","8px","10px","20px"]} mr="20px" alignItems='center'>
                        <Keyword arrowIcon={VscTriangleRight}/> <Text color="lightGreen">{language}</Text>
                      </Flex>
                    </ul>
                      ))}
                  </Flex>
                  
                  <Text fontSize={["30px","30px","50px","60px"]} fontWeight="700"  whiteSpace='nowrap' color="whiteColor">Nicholas Koech</Text>
                  <Box>
                    <Text  fontSize={["15px","20px","20px","20px"]} fontWeight="300" height="24px"  mb="2px" color="whiteColor">Software engineer</Text>
                  </Box>
                  <Flex direction={['column', 'column', 'row', 'row']} gap='2rem' alignItems='center' mt='10%'>
                      <PFButton
                            variant = "solid"
                            _hover={{
                              background: "rgba(70, 158, 132, 1)",
                              color: 'white.900'
                            }}
                            stylesProps={{
                              width: "208px",
                              height: "47px",
                              borderRadius: "10px",
                              backgroundColor:"#EF855B",
                            }}
                            OnClick={() => {}}
                          >
                          Download Resume
                      </PFButton>
                      <PFButton
                            variant="outline"
                            _hover={{
                              color: "rgba(70, 158, 132, 1)",
                              borderColor: "rgba(70, 158, 132, 1)"
                            }}
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
            </Flex>
            
              <SocialIcons/> 
        
          </Flex>


    
  )
}

