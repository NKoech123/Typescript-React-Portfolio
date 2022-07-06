import { VStack,Image,Flex ,Text, HStack} from '@chakra-ui/react'
import React from 'react'
import Keyword from '../../../components/keywords';
import {VscTriangleRight} from "react-icons/vsc";
import Profile from '../../../assets/profile.jpg'


export const AboutMe = () => {
  return (
  
    <Flex mx="8%" mt='5.32%' >
    <HStack alignContent='space-between' flexDirection={
        ['column','column','row','row']
    }>
            <VStack>
                <Flex h={['305px']} w={['305px']}>
                    <Image borderRadius ='200px' src={Profile} alt='Nicholas Koech' />
                </Flex>

                <Flex>
                    <Text whiteSpace='nowrap' fontWeight='800' mt='20px' fontSize={['20px','40px','60px','80px']}>About Me <sub>01.</sub></Text>
                </Flex>
            </VStack>

            <VStack display='flex'>
                <Flex display='flex' ml='20px' w='60.40%' h='45.75%' direction='column'> <Text>Hello! My name is Nicholas and I enjoy solving problems.
            My interest in coding started back in 2017 when I took <span color='green'>CS61A</span> — which 
            introduced me to programing in python!
            Fast-forward to today, and I’ve had the privilege of working at a construction company,
            and student-led projects. My main focus these days is contributing to open source projects 
            to help create a more accessible, inclusive digital experiences as well help resoulve 
            some societal challenges."</Text> 
            

            </Flex>

     
            
        
            </VStack>


    </HStack>


    </Flex>

   
  )
}

