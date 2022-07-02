import React from 'react'
import { Flex,Box, Heading, HStack, Link,Text, VStack } from "@chakra-ui/react";

import Keyword from '../../../components/keywords';
import {VscTriangleRight} from "react-icons/vsc";


export const Intro = () => {
  return (

    <Box w="full" bg="#1A2C32" px="200px" py="60px" mb="120px">
      <Flex>
        <Flex alignItems="center">
        <HStack spacing="10px" alignItems="center">
          <Text><Keyword arrowIcon={VscTriangleRight}/>Python</Text>
          <Text><Keyword arrowIcon={VscTriangleRight}/>Typescript</Text>
          <Text><Keyword arrowIcon={VscTriangleRight}/>SQL</Text>
          <Text><Keyword arrowIcon={VscTriangleRight}/>HTML</Text>
          <Text><Keyword arrowIcon={VscTriangleRight}/>CSS</Text>
        </HStack>
        
        </Flex>
       
       
      </Flex>
   

    </Box>
    
  )
}

