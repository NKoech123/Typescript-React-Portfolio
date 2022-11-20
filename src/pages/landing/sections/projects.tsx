import React from 'react'
import PFCard from '../../../foundation/PFCard/PFCard';
import {Flex, Text, Box, HStack, VStack} from '@chakra-ui/react'
import ProjectCard from '../../../components/ProjectCard';
export const Projects = () => {
  return (
    <Flex  w ='83.33vw'  ml='8.33%' mt='8.23%'
      flexDir='column' mb='2px'
    >
      <VStack alignItems='start'>
        <Box  mb= '20px' justifyContent='start' >
            <Text  fontWeight='800'  fontSize={['20px','40px','60px','90px']} color="whiteColor" >Projects <sub>03.</sub></Text>
        </Box>
        <Flex mt='50px' flexDirection={["column", "column", "row", "row"]}
        >
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </Flex>
        </VStack>
    </Flex>
  )}
      
       