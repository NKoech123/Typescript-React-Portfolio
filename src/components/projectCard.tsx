import { useState } from 'react';
import {Image, 
  Box, 
  Text, 
  Flex} 
from "@chakra-ui/react";
import { motion } from "framer-motion";
import PFIconButton from "../foundation/PFIconButton/PFIconButton";
import {
  FaGithub,
} from "react-icons/fa";

export type ProjectCardProps = {
  imageUrl: string;
  imageAlt: string;
  name: string;
  description: string;
};

const ProjectCard = (props: ProjectCardProps ) => {
  const [scale, setScale] = useState(1);

  return (
    <Flex mr='50px' _hover={{bg: 'green.900'}} 
      borderRadius={10} 
      padding={5} 
      border={20} 
      boxShadow='xl'
      onMouseEnter={()=>setScale(1.3)}
      onMouseLeave={()=>setScale(1)}
    >
        <Box maxWidth={400} maxHeight={500}>
          <Box overflow='hidden'>
              <motion.div
                whileHover={{
                  scale: scale,
                }}
              >
                <Image src={props.imageUrl} alt={props.imageAlt}/>
              </motion.div>
            </Box>
           
            <Box mt='5px'>
                <Text color={"whiteColor"} fontSize='20px' fontWeight='bold' py={['5px','5px','5px','5px']}>
                  {props.name}
                </Text>
                <Text color={"whiteColor"} py={['5px','5px','5px','5px']} noOfLines={4} >
                  {props.description} 
                </Text>
            </Box>
            <Box display='flex' justifyContent='end'>
              <PFIconButton icon={<FaGithub/>}
                  ariaLabel = "Github Icon"
                  onClick={()=>{}}    
              />
            </Box>
        </Box>
    </Flex>
  );
};

export default ProjectCard

