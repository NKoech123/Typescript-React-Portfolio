import { Flex,Text} from "@chakra-ui/react";
import { Link as ChakraLink, Box } from '@chakra-ui/react';
import { Link } from 'react-scroll';

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
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} >
                  <Text fontWeight='600'  fontSize='20px' color={"whiteColor"}>About</Text>
                </Link>
              </Box>

              <Box mr={['0px','80px','80px','80px']}>
                <Link activeClass="active" to="experience" spy={true} smooth={true} offset={50} duration={500} >
                  <Text fontWeight='600'  fontSize='20px' color={"whiteColor"}>Experience</Text>
                </Link>
              </Box>

              <Box  mr={['0px','80px','80px','80px']}>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500} >
                  <Text fontWeight='600'  fontSize='20px' color={"whiteColor"}>Projects</Text>
                </Link>
              </Box>

              <Box>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} >
                  <Text fontWeight='600'  fontSize='20px' color={"whiteColor"}>Contact</Text>
                </Link>
              </Box>
      </Flex>
       
    </Flex>
  )
}

export default Header;