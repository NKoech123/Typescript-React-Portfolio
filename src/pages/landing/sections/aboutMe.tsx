import { VStack,Image,Flex, Box ,Text, HStack, Circle} from '@chakra-ui/react';
import { Container, chakra, shouldForwardProp } from '@chakra-ui/react';
import Profile from '../../../assets/profile.jpg';
import { motion, isValidMotionProp } from 'framer-motion';
import Keyword from '../../../components/keywords';
import {VscTriangleRight} from "react-icons/vsc";
import bgImg from '../../../assets/icons8-0-degrees-50.png';
interface Skills{
  id: number;
  name: string;
  list: string[];
}

const skills: Skills[] = [
  { id: 1,
    name: 'Backend',
    list : ['Database Design', 'Data Migration', 'API Design'],
  },
  { id: 2,
    name: 'Frontend',
    list : ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  { id: 3,
    name: 'Testing',
    list : ['Cypress', 'Pytest', 'Mocha/Chai'],
  }
]

const ChakraBox = chakra(motion.div, {
  // Allow motion props and non-Chakra props to be forwarded.
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export const AboutMe = () => {
  return (
  
    <Flex  w ='83.33%' ml='8.33%' mt='8.23%'>
    <VStack alignItems='flex-start'>

    <HStack alignContent='space-between' flexDirection={
        ['column','column','row','row']
    }>
      
      <Container display='flex' alignItems='center' justifyContent='center'  h={['405px']} w={['405px']} mr='70px' >
      
        
            <ChakraBox
              animate={{
                x: [-40,40,0],
                y: [40,-40,-40],
              }}
              // @ts-ignore no problem in operation, although type error appears.
              transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
              padding="2"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {/* <Image borderRadius ='16rem' height= '90%' width='80%' src={bgImg} alt='Nicholas Koech' style={{ filter:  "grayscale(900)" }} position='absolute'/> */}
              <Image borderRadius ='16rem' height= '90%' width='100%' src={Profile} alt='Nicholas Koech' style={{ filter:  "grayscale(900)" }} position='relative'/>
              
            </ChakraBox>
           
      </Container>
     

      <Flex  ml='20px' w='60.40%' h='45.75%' direction='column'> 
          <Text color="whiteColor">
            Hello! My name is Nicholas and I enjoy solving problems.
            My interest in coding started back in 2017 when I took <Text as="span" color='green'>CS61A</Text> — which 
            introduced me to programing in python!
            Fast-forward to today, and I’ve had the privilege of working at a construction company,
            and student-led projects. My main focus these days is contributing to open source projects 
            to help create a more accessible, inclusive digital experiences as well help resoulve 
            some societal challenges."
          </Text> 
          <Text mt='10px' color="whiteColor">
            Here are a few skills I have leveraged on those projects
          </Text>
          <Box display={['none','flex','flex','flex']} fontSize={["10px","8px","10px","15px"]} mr="20px" alignItems='start' mt='20px'>

         { skills.map((skill) => (
              <Flex direction='column' mr='20px'>
                  <Box display='flex' alignItems='center' mr='40px' mb='1rem'>
                    <Keyword  arrowIcon={VscTriangleRight} color={'#EF855B'} /><Text color='#EF855B'>{skill.name}</Text>
                  </Box>
                  <Box display='column'>
                  { skill.list.map((lst) => (
                      <Text ml='15px' mb='15px' color='#EF855B'> <Text as='span' fontWeight='bold'> | </Text>
                          {lst}
                      </Text>
                    ))
                    }
                  </Box>
              </Flex>
              ))}
          </Box>
      </Flex>

    </HStack>
    <Flex>
      <Text whiteSpace='nowrap' fontWeight='800' mt='20px' fontSize={['20px','40px','60px','60px']} color="whiteColor">About Me <sub>02.</sub></Text>
    </Flex>

    </VStack>


    </Flex>

   
  )
}

