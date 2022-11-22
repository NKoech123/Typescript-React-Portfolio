import React from 'react';
import {VStack, Text} from "@chakra-ui/react";

const ExperienceCard = () => {
    const property = {
        name : "Experience 1", 
        description: "Hello! My name is Nicholas and I enjoy solving problems. My interest in coding started back in 2017 when I took CS61A — which introduced me to programing in python!"
    }
  return (
    <VStack alignItems={['center','center','start','start']} padding='1rem' maxWidth='30rem'> 
      <Text color={"whiteColor"} fontSize={[20,20,40,40]}>{property.name}</Text>
      <Text color={"whiteColor"}>{property.description}</Text>
    </VStack>
  )
}

export default ExperienceCard