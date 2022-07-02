import React from 'react'
import { Flex, Heading, HStack, Link,Text } from "@chakra-ui/react";

function Header() {
  return (
    <Flex px="200px" 
    py="20px" 
    width="full"  
    bg="#1A2C32"
    alignItems="flex-end"
    justifyContent="space-between">
        <Flex>
            <Heading color="whiteAlpha.900"
                    mr="900px"
                    fontSize={20}
                    letterSpacing="1.5px"
                >
                    NK.
            </Heading>
            <HStack color="whiteAlpha.900" spacing="40px">
                <Link>Projects</Link>
                <Link>Contacts</Link>
                
            </HStack>
        </Flex>
    </Flex>
  )
}

export default Header