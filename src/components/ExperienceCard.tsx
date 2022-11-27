import {VStack, Text, Stack,  Divider} from "@chakra-ui/react";

export type ExperienceCardProps={
  name:string;
  description: string;
  isDisplay: boolean;
  borderColor: string;
};
// 'bold' 'extrabold' 'semibold' 'normal' 'medium'
const ExperienceCard = ( props: ExperienceCardProps ) => {


  return (
    <>
    <VStack alignItems={['center','center','start','start']} padding='1rem' maxWidth='30rem' minWidth='25rem' minHeight='15rem'> 
      <Text color={"whiteColor"} fontSize={[20,20,40,40]}>{props.name}</Text>
      <Text color={"whiteColor"} display={props.isDisplay? 'inline': 'none'}>{props.description}</Text>
    </VStack>

    <Stack fontWeight={'extrabold'}>
      <Divider orientation='horizontal' borderWidth='3px' borderColor={props.borderColor}/>
    </Stack>
  </>
  )
}

export default ExperienceCard