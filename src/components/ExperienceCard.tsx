import {VStack, Text} from "@chakra-ui/react";

export type ExperienceCardProps={
  name:string;
  description:string;
};

const ExperienceCard = ( props: ExperienceCardProps ) => {

  return (
    <VStack alignItems={['center','center','start','start']} padding='1rem' maxWidth='30rem'> 
      <Text color={"whiteColor"} fontSize={[20,20,40,40]}>{props.name}</Text>
      <Text color={"whiteColor"}>{props.description}</Text>
    </VStack>
  )
}

export default ExperienceCard