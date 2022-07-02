import React from 'react'
import { Flex, Heading, HStack, Link, Box} from "@chakra-ui/react";

function Header() {
  return (
    <Flex bg="#1A2C32" width="full" height="65px" mb="49px">
    <Flex mx="144px" 
    mt="50px"
    bg="#1A2C32"
    alignItems="center"
    justifyContent="space-between">
        <Flex justifyContent="space-between">
            <Heading color="whiteAlpha.900"
                    ml="70px"
                    fontSize={30}
                    fontWeight="700"
        
                    height="45px"
                    letterSpacing="1.5px"
                >
                    NK.
            </Heading>
            <HStack color="whiteAlpha.900" spacing="24px" ml="900px">
                <Box><Link fontSize={20} height={30} fontWeight={700}>Projects</Link></Box>
                <Box><Link fontSize={20} height={30} fontWeight={700}>Contacts</Link></Box>
            </HStack>
        </Flex>
    </Flex>
    </Flex>
  )
}

export default Header