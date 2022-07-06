import React from 'react'
import {Text,Flex, HStack} from '@chakra-ui/react'
import { SocialIcons } from '../../../components/socialIcons';

export const Footer = () => {
  return (
 
            <HStack   mx='8.33%' mt='14.68%' mb='8%'  justifyContent='center' alignContent='space between' >

                
                <Flex direction='column' mb='12px'>
                    <Text textAlign='center'    color="rgba(70, 158, 132, 1)">What now?</Text>
                    <Text fontSize='90px' fontWeight='700'>Get in touch</Text>
                    <Text textAlign='start' mb='20px'>
                        My name is Nicholas and I enjoy solving problems. <br/> 
                        My interest in coding started back in 2017 when I <br/> 
                        took CS61A — which introduced me to programing in <br/> 
                        python!
                    </Text>

                    <Flex  w='100%' justifyContent='space-between' >
                        <Text color='rgba(239, 133, 91, 1)'>#BayArea </Text>
                        <Text color='rgba(239, 133, 91, 1)'>#FullStack </Text>
                        <Text color='rgba(239, 133, 91, 1)'>#Backend </Text>
                        <Text color='rgba(239, 133, 91, 1)'> #BLM</Text>

                    </Flex>

                </Flex>

                <Flex justifyContent='center' ml='200px'>
                   <SocialIcons/>
                </Flex>
              

            </HStack>





    
  )
}

