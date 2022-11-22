import { VStack,Image,Flex ,Text, HStack} from '@chakra-ui/react';
import React from 'react';
import { Container, chakra, shouldForwardProp } from '@chakra-ui/react';
import Profile from '../../../assets/profile.jpg';
import { motion, isValidMotionProp } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export const AboutMe = () => {
  return (
  
    <Flex  w ='83.33%' ml='8.33%' mt='8.23%'>
    <VStack alignItems='flex-start'>

    <HStack alignContent='space-between' flexDirection={
        ['column','column','row','row']
    }>
         
      <Container display='flex' alignItems='center' justifyContent='center'  h={['405px']} w={['405px']} mr='70px' >
        
            <ChakraBox
              animate={{
                x: [-40,40,0],
                y: [40,-40,-40],
              }}
              // @ts-ignore no problem in operation, although type error appears.
              transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
              padding="2"
              display="flex"
              justifyContent="center"
              alignItems="center"
            
            >
              <Image borderRadius ='16rem' height= '90%' width='100%' src={Profile} alt='Nicholas Koech' style={{ filter:  "grayscale(900)" }} />
            </ChakraBox>
      </Container>

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

