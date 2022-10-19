import React from 'react'
import { Flex, Text, VStack} from '@chakra-ui/react';
import ExperienceCard from '../../../components/ExperienceCard';
export const Experience = () => {
  return (
    <Flex h='100vh' w='100vw' alignItems="center">
      <ExperienceCard/>
      <ExperienceCard/>
      <ExperienceCard/>
    </Flex>
    
  )
}

