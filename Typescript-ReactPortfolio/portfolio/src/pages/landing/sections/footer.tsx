import React from 'react'
import {Text,Flex, HStack} from '@chakra-ui/react'
import { SocialIcons } from '../../../components/socialIcons';

export const Footer = () => {
  return (
 
            <HStack   mx='8.33%' mt='14.68%' mb='8%'  justifyContent='center' alignContent='space between' >

                
                <Flex direction='column' mb='12px'>
                    <Text textAlign='center'    color="rgba(70, 158, 132, 1)">What now?</Text>
                    <Text fontSize='90px' fontWeight='700'>Get in touch</Text>
                    <Text textAlign='start' mb='20px'>My name is Nicholas and I enjoy solving problems. <br/> My interest in coding started back in 2017 when I <br/> took CS61A — which introduced me to programing in <br/> python!</Text>
                    <Text textAlign='start'>#BayArea #Fulltack #DataScience</Text>
                </Flex>

                <Flex justifyContent='center' ml='300px'>
                   <SocialIcons/>
                </Flex>
              

            </HStack>





    
  )
}

