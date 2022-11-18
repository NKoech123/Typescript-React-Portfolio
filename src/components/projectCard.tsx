import React from 'react';
import {Image, Box, Text, Flex} from "@chakra-ui/react";

const ProjectCard = () => {
  const property = {
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    imageAlt: 'photo of a computer showing Code',
    name: 'Issue Tracker App',
    description: 'Project description',
  }

  return (
    <Flex mr='5px'>
        <Box maxWidth={500} maxHeight={800}>
            <Image src={property.imageUrl} alt={property.imageAlt}  />

            <Box mt='5px'>
                <Text color={"whiteColor"} fontWeight='bold'>
                  {property.name}
                </Text>
                <Text color={"whiteColor"}>
                  {property.description}
                </Text>
            </Box>

        </Box>
    </Flex>

  )
}

export default ProjectCard