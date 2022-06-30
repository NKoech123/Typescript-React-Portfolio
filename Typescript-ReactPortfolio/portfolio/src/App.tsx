import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import {Flex, Spacer} from '@chakra-ui/react';
import { NavbarLogo} from "./components/Navbar/Navbar";
import {NavbarHypers} from "./components/Navbar/NavbarHyperLinks";
//import customTheme from "./theme"
//ColorModeSwitcher justifySelf="flex-end" />
export const App = () => (
  <ChakraProvider theme={theme}>
        
        <VStack p={15}>
          <Flex w="100%" pl="8%" pr="8%">
           <Box> <NavbarLogo/></Box>
           <Spacer/>
           <Box > <NavbarHypers/></Box>
          </Flex>

          <Flex w="100%" pl="8%" pr="8%">
            <Box></Box>
          </Flex>
         
          
       
        </VStack>

  
  </ChakraProvider>
)
