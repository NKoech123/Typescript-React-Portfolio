import { VStack,Image,Flex ,Text, HStack} from '@chakra-ui/react';
import React from 'react';
import Profile from '../../../assets/profile.jpg';


export const AboutMe = () => {
  return (
  
    <Flex  w ='83.33vw' ml='8.33%' mt='8.23%'>
    <VStack alignItems='flex-start'>

    <HStack alignContent='space-between' flexDirection={
        ['column','column','row','row']
    }>
         
      <Flex h={['305px']} w={['305px']} mr='70px'>
          <Image borderRadius ='200px' src={Profile} alt='Nicholas Koech' />
      </Flex>

      <Flex display='flex' ml='20px' w='60.40%' h='45.75%' direction='column'> 
          <Text color="whiteColor">
            Hello! My name is Nicholas and I enjoy solving problems.
            My interest in coding started back in 2017 when I took <span color='green'>CS61A</span> — which 
            introduced me to programing in python!
            Fast-forward to today, and I’ve had the privilege of working at a construction company,
            and student-led projects. My main focus these days is contributing to open source projects 
            to help create a more accessible, inclusive digital experiences as well help resoulve 
            some societal challenges."
          </Text> 
          <Text mt='10px' color="whiteColor">
            Here are a few skills I have leveraged on those projects
          </Text>

      </Flex>

    </HStack>
    <Flex>
      <Text whiteSpace='nowrap' fontWeight='800' mt='20px' fontSize={['20px','40px','60px','80px']} color="whiteColor">About Me <sub>02.</sub></Text>
    </Flex>
    </VStack>


    </Flex>

   
  )
}

