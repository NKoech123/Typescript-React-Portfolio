import React from 'react'
import PFCard from '../../../foundation/PFCard/PFCard';
import {Flex, Text, Box, HStack} from '@chakra-ui/react'
import ProjectCard from '../../../components/projectCard';
export const Projects = () => {
  return (
    <Box  flexDirection={["column", "row", "row", "row"]}>
        <Flex  mb= '20px' justifyContent='start' ml='60px'>
            <Text  fontWeight='800'  fontSize={['20px','40px','60px','90px']} color="whiteColor" mt={20}>Projects <sub>03.</sub></Text>
        </Flex>
        <HStack>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </HStack>

    </Box>
  )}
      
       