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
  HStack,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import {Flex, Spacer} from '@chakra-ui/react';
import { NavbarLogo} from "./components/Navbar/Navbar";
import {NavbarHypers} from "./components/Navbar/NavbarHyperLinks";


import PFKeywords from './foundation/PFKeywords/PFKeywords';
import PFHeading from './foundation/PFHeading/PFHeading';
import PFButton from './foundation/PFButton/PFButton'
import {
  FaCaretRight
} from "react-icons/fa";
//import customTheme from "./theme"
//ColorModeSwitcher justifySelf="flex-end" />
export const App = () => (
  <ChakraProvider theme={theme}>
        
        <VStack p={15}>
          <Flex w="100%" pl="8%" pr="8%" bg="#1A2C32">
           <Box> <NavbarLogo/></Box>
           <Spacer/>
           <Box > <NavbarHypers/></Box>
          </Flex>

          <Flex w="100%" pl="8%" pr="8%" pt="20px" bg="#1A2C32">
            <VStack>
            <HStack>
              <Box> <PFKeywords arrowIcon={<FaCaretRight/>} ariaLabel="keyword"/> Python</Box>
              <Box> <PFKeywords arrowIcon={<FaCaretRight/>} ariaLabel="keyword"/> Typescript</Box>
              <Box> <PFKeywords arrowIcon={<FaCaretRight/>} ariaLabel="keyword"/> Java</Box>
              <Box> <PFKeywords arrowIcon={<FaCaretRight/>} ariaLabel="keyword"/> SQL</Box>
            </HStack>
          
            <Box>
            <PFHeading variant = "Name" text= "Nicholas Koech" />
            </Box>
            <Box>
            <PFHeading variant = "title" text= "Software engineer" />
            </Box>


            <HStack>
              <Box> <PFButton
                      variant = "solid"
                      stylesProps={{
                      width: "208px",
                      height: "47px",
                      borderRadius: "10px",
                      // fontSize: "20px",
                    }}
                    OnClick={() => {}}
                     >
                    Download Resume
                    </PFButton> 
              </Box>

              <Box><PFButton
                      variant="outline"
                      stylesProps={{
                      fontSize: "16px",
                      fontWeight: "400",
                      borderColor:"#EF855B",
                
                      }}
                    >
                      About me
                    </PFButton>
              </Box>
            

            </HStack>



            </VStack>
           


            
          </Flex>
         
          
       
        </VStack>

  
  </ChakraProvider>
)


