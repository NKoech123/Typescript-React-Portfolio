import { Flex, Text, VStack, Divider} from '@chakra-ui/react';
import ExperienceCard from '../../../components/ExperienceCard';
import { experienceData } from '../../../Data/Data';

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
        {experienceData.map((children) =>(
          <ExperienceCard
           {...children}
          />
        ))}
      </Flex>
      
      <Divider orientation='horizontal' borderWidth='3px' fontWeight={'bold'}/>
   
      <Text whiteSpace='nowrap' fontWeight='800' mt='20px' fontSize={['40px','40px','60px','60px']} color="whiteColor">
        Experience <sub>03.</sub>
      </Text>
   
    </VStack>

    </Flex>
  )
}

