import React from 'react'
import {Text,Flex, VStack, HStack} from '@chakra-ui/react'
import { SocialIcons } from '../../../components/socialIcons';

export const Footer = () => {
  return (
    <Flex w='100vw' h='100vh'>

        <Flex mx='8.33%' mt='14.68%' mb='8%'>

            <HStack  alignItems='center' justifyContent='start'>
                <VStack>
                    <Text>Texts</Text>
                    <Text>Texts</Text>
                    <Text>Texts</Text>
                    <Text>Texts</Text>
                </VStack>

                <SocialIcons/>
                

            </HStack>


        </Flex>

    </Flex>
    
  )
}

