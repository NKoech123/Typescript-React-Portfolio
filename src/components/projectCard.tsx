import {Image, 
  Box, 
  Text, 
  Flex} 
from "@chakra-ui/react";

export type ProjectCardProps = {
  imageUrl: string;
  imageAlt: string;
  name: string;
  description: string;
};

const ProjectCard = (props: ProjectCardProps ) => {

  return (
    <Flex mr='50px' _hover={{bg: 'green.900'}} borderRadius={10} padding={5} border={20}>
        <Box maxWidth={400} maxHeight={500}>
            <Image src={props.imageUrl} alt={props.imageAlt}/>
            <Box mt='5px'>
                <Text color={"whiteColor"} fontSize='20px' fontWeight='bold' py={['5px','5px','5px','5px']}>
                  {props.name}
                </Text>
                <Text color={"whiteColor"} py={['5px','5px','5px','5px']} noOfLines={4}>
                  {props.description} 
                </Text>
            </Box>
        </Box>
    </Flex>
  );
};

export default ProjectCard