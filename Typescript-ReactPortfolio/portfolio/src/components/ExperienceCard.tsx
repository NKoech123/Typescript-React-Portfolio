import React from 'react';
import {Image, Box, Text, Flex} from "@chakra-ui/react";

const ExperienceCard = () => {
    const property = {
        name : "Experience 1", 
        description: "Hello! My name is Nicholas and I enjoy solving problems. My interest in coding started back in 2017 when I took CS61A — which introduced me to programing in python!"
    }
  return (
    <Box>
      <Text color={"whiteColor"} fontSize={50}>{property.name}</Text>
      <Text color={"whiteColor"}>{property.description}</Text>
    </Box>
  )
}

export default ExperienceCard