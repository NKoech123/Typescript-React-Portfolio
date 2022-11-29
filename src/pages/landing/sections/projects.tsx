import {Flex, Text, Box, VStack} from '@chakra-ui/react'
import ProjectCard from '../../../components/projectCard';
import { projectData } from '../../../Data/Data';

export const Projects = () => {
  return (
  <Flex  w ='83.33vw'  
    ml='8.33%' 
    mt='1.23%'
    mb='2px'
    flexDir='column'
    className='projects'
    >
      <VStack alignItems='start'>
        <Box  mb= '20px' justifyContent='start' pl='15px'>
            <Text  
               fontWeight='800'  
               fontSize={['20px','40px','60px','60px']} 
               color="whiteColor" 
              >
                Projects <sub>03.</sub>
            </Text>
        </Box>
        <Flex
          mt='50px' 
          justifyContent='space-between'
          flexDirection={["column", "column", "row", "row"]}
        >
          {
            projectData.map((children) => (
              <ProjectCard
                {...children}
              />
            ))
          }
        </Flex>
        </VStack>
  </Flex>
  )}
      
       