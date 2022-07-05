import { VStack,Image,Flex ,Text, HStack} from '@chakra-ui/react'
import React from 'react'
import Keyword from '../../../components/keywords';
import {VscTriangleRight} from "react-icons/vsc";
import Profile from '../../../assets/profile.jpg'


export const AboutMe = () => {
  return (
    <Flex h='100vh' w='100vw'>
    <Flex mx="8%" mt='5.32%' >
    <HStack alignContent='space-between'>
            <VStack>
                <Flex h='405px' w='405px'>
                    <Image borderRadius ='200px' src={Profile} alt='Dan Abramov' />
                </Flex>

                <Flex>
                    <Text whiteSpace='nowrap' fontWeight='800' mt='20px' fontSize={['20px','40px','60px','90px']}>About Me <sub>01.</sub></Text>
                </Flex>
            </VStack>

            <VStack>
                <Flex ml='20px' w='645px' h='511px' direction='column'> <Text>Hello! My name is Nicholas and I enjoy solving problems.
            My interest in coding started back in 2017 when I took <span color='green'>CS61A</span> — which 
            introduced me to programing in python!
            Fast-forward to today, and I’ve had the privilege of working at a construction company,
            and student-led projects. My main focus these days is contributing to open source projects 
            to help create a more accessible, inclusive digital experiences as well help resoulve 
            some societal challenges."</Text> 
            <Flex mt='20px' flex-direction='row'>
             
                  <VStack>
                  <Text>Here are a few skills I have leveraged on this projects</Text>
                  <Flex justifyContent='start'>
                      <Text fontSize='15px'><Keyword arrowIcon={VscTriangleRight}/>Typescript</Text>
                      <Text fontSize='15px'><Keyword arrowIcon={VscTriangleRight}/>SQL</Text>
                      <Text fontSize='15px'><Keyword arrowIcon={VscTriangleRight}/>HTML</Text>
                      <Text fontSize='15px'><Keyword arrowIcon={VscTriangleRight}/>CSS</Text>
                  </Flex>
                  </VStack>
              </Flex>

            </Flex>

     
            
            
      

               
            </VStack>


    </HStack>


    </Flex>
    </Flex>
   
  )
}

