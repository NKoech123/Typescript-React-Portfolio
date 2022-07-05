import { VStack,Image,Box,Flex ,Text, HStack} from '@chakra-ui/react'
import React from 'react'
import Keyword from '../../../components/keywords';
import {VscTriangleRight} from "react-icons/vsc";


export const AboutMe = () => {
  return (
    <Flex mx="8%" mt='5.32%' >
    <HStack>
            <VStack>
                <Box boxSize='sm'>
                    <Image borderRadius ='200px' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                </Box>

                <Flex>
                    <Text fontWeight='800' fontSize='40px'>About Me <sub>01.</sub></Text>
                </Flex>
            </VStack>

            <VStack>
                <Flex> <Text>"Hello! My name is Nicholas and I enjoy solving problems.
            My interest in coding started back in 2017 when I took <span color='green'>CS61A</span> — which 
            introduced me to programing in python!
            Fast-forward to today, and I’ve had the privilege of working at a construction company,
            and student-led projects. My main focus these days is contributing to open source projects 
            to help create a more accessible, inclusive digital experiences as well help resoulve 
            some societal challenges."</Text> </Flex>
            
            <Flex  mt='15.42%' mb="1.34%">
                      <Flex direction='row'>
                         <Text fontSize='15px'><Keyword arrowIcon={VscTriangleRight}/>Python </Text>
                         <Text>|Django</Text>
                         <Text>|Django</Text>
                         <Text>|Django</Text>
                       
                      </Flex>
                      <Text fontSize='15px'><Keyword arrowIcon={VscTriangleRight}/>Typescript</Text>
                      <Text fontSize='15px'><Keyword arrowIcon={VscTriangleRight}/>SQL</Text>
                      <Text fontSize='15px'><Keyword arrowIcon={VscTriangleRight}/>HTML</Text>
                      <Text fontSize='15px'><Keyword arrowIcon={VscTriangleRight}/>CSS</Text>
                   
            </Flex>

               
            </VStack>


    </HStack>






    </Flex>
   
  )
}

