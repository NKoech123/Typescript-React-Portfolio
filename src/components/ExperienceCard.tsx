import {VStack, Text} from "@chakra-ui/react";
import { useState } from "react";
export type ExperienceCardProps={
  name:string;
  description:string;
  display: string; // 'none', "inline"
};

const ExperienceCard = ( props: ExperienceCardProps ) => {
  const [isShown, setIsShown] = useState(true);

  return (
    <VStack alignItems={['center','center','start','start']} padding='1rem' maxWidth='30rem' minWidth='25rem'> 
      <Text color={"whiteColor"} fontSize={[20,20,40,40]}>{props.name}</Text>
      <Text color={"whiteColor"} display={props.display}>{props.description}</Text>
   
      
    </VStack>
  )
}

export default ExperienceCard