import React from 'react'
import { Flex, Heading, HStack, Link, Box,Text} from "@chakra-ui/react";

const Header = () => {
  return (

    <Flex mx="8.33%"
          mt="4.47%"
          mb="4.38%" 
          h="5.82%" 
          justifyContent={['center','space-around','space-between','space-between']}
          direction={["column", "column", "row", "row"]}
          
         
        >
       <Flex ml={["4%","4%","4%","4%"]} >
          <Flex fontWeight='900'> N<Text fontWeight='400'>K.</Text></Flex>
       </Flex>

      <Flex  direction={["column", "column", "row", "row"]}>
      <Flex fontWeight='600' my={['10px','0px','0px','0px']} >Projects</Flex>
      <Flex fontWeight='600' ml={['0px','80px','80px','80px']} my={['10px','0px','0px','0px']}>Contact</Flex>
      </Flex>
       

    </Flex>

   
  

  )
}

export default Header