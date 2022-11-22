import React from 'react'
import { Flex, HStack, Text, VStack, Divider} from '@chakra-ui/react';
import ExperienceCard from '../../../components/ExperienceCard';

export const Experience = () => {
  return (

    <Flex  alignItems="center"
     direction={["column", "row", "row", "row"]}
     ml='8.33%' mt='8.23%'
    >
    <VStack alignItems='end'
    mr='10px'
    >
      <Flex flexDirection={["column", "column", "row", "row"]}>
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
      </Flex>
      <Divider orientation='horizontal' borderWidth='3px' fontWeight={'bold'}/>
   
      <Text whiteSpace='nowrap' fontWeight='800' mt='20px' fontSize={['20px','40px','60px','80px']} color="whiteColor">
        Experience <sub>03.</sub>
      </Text>
   
    </VStack>

    </Flex>
  )
}

