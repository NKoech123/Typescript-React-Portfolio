import {Image, 
  Box, 
  Text, 
  Flex} 
from "@chakra-ui/react";

const ProjectCard = () => {
  const property = {
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    imageAlt: 'photo of a computer showing Code',
    name: 'Issue Tracker App',
    description: `Developed a data pipeline  to perform data cleaning, filtering, and  transformation of thousands of  users’ data before migrating to target PostgreSQL  database (utilized Airtable API, Google APIs  and Python)
    Developed tests  to validate data before migration (Pytest)
    Developed program to detect invalid Ethereum addresses and automatically map results to  Relations team for follow-up with users (utilized Ethers APIs and Google APIs)
    Iteratively updated database schema to support new data types (utilized  Prisma ORM).',`
  }

  return (
    <Flex mr='5px'>
        <Box maxWidth={400} maxHeight={500}>
            <Image src={property.imageUrl} alt={property.imageAlt} />
            <Box mt='5px'>
                <Text color={"whiteColor"} fontWeight='bold' py={['5px','5px','5px','5px']}>
                  {property.name}
                </Text>
                <Text color={"whiteColor"} py={['5px','5px','5px','5px']} noOfLines={4}>
                  {property.description} 
                </Text>
            </Box>
        </Box>
    </Flex>

  )
}

export default ProjectCard