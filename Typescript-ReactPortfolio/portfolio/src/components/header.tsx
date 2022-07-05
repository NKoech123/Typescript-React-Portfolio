import React from 'react'
import { Flex, Heading, HStack, Link, Box,Text} from "@chakra-ui/react";

function Header() {
  return (
    <Flex bg="#1A2C32"  width="100%" mx="8%" height="5.8%" mb="4.4%"> 

    <Flex mx="144px" 
    mt="50px"
    bg="#1A2C32"
    alignItems="center"
    justifyContent="space-between">
        <Flex justifyContent="space-between">
          <Flex>
            <Heading color="whiteAlpha.900"
                    ml="4%"
                    fontSize={30}
                    fontWeight="700"
                    height="45px"
                    letterSpacing="1.5px"
               
                >
                    N<Text fontWeight={200}>K.</Text>
            </Heading>
            </Flex>
            <HStack color="whiteAlpha.900" spacing="24px" ml="800px">
                <Box><Link fontSize={20} height={30} fontWeight={700}>Projects</Link></Box>
                <Box><Link fontSize={20} height={30} fontWeight={700}>Contacts</Link></Box>
            </HStack>
        </Flex>
    </Flex>

  </Flex>
  )
}

export default Header