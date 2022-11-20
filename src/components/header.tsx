import React from 'react';
import { Flex,Text} from "@chakra-ui/react";
import { Link as ChakraLink, Box } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex mx="8.33%"
          mt="4.47%"
          mb="4.38%" 
          justifyContent={['center','center','space-between','space-between']}
          alignItems = {['center','center','space-between','space-between']}
          direction={["column", "column", "row", "row"]}
          gap='2.5rem'
        >
       <Box>
          <ChakraLink href="/">
            <Text fontWeight='900'  fontSize='30px' color={"whiteColor"}>NK.</Text>
          </ChakraLink>
       </Box>

      <Flex  direction={["column", "column", "row", "row"]} 
             alignItems = {['center','center','space-between','space-between']}
             gap= {['2.5rem','2.5rem','0rem','0rem']}
             as='nav'
             >
              <Box mr={['0px','80px','80px','80px']}>
                <ChakraLink href="/about">
                   <Text fontWeight='600'  fontSize='20px' color={"whiteColor"}>About</Text>
                </ChakraLink>
              </Box>

              <Box mr={['0px','80px','80px','80px']}>
                <ChakraLink href="/experience">
                  <Text fontWeight='600'  fontSize='20px' color={"whiteColor"}>Experience</Text>
                </ChakraLink>
              </Box>

              <Box  mr={['0px','80px','80px','80px']}>
                <ChakraLink href="/projects">
                    <Text fontWeight='600'  fontSize='20px' color={"whiteColor"}>Projects</Text>
                </ChakraLink>
              </Box>

              <Box>
                <ChakraLink href="/contact">
                  <Text fontWeight='600'  fontSize='20px' color={"whiteColor"}>Contact</Text>
                </ChakraLink>
              </Box>
      </Flex>
       
    </Flex>
  )
}

export default Header;