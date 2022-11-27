import { Flex, Text, VStack, Divider, Progress, ChakraProvider, Box} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import ExperienceCard from '../../../components/ExperienceCard';
import { experienceData } from '../../../Data/Data';

export const Experience = () => {

  const [expData, setExpData] = useState(experienceData);
  const [index, setIndex] = useState(0);

  const handleDisplay = (index: number) =>{
    const newData = [...expData]
    for (let id in newData){
        let idx = parseInt(id)
        if (idx == index){
          newData[index].isDisplay=true
          newData[index].borderColor = 'green'
          //change Rest of Divider colors
          if(index!=0){newData[0].borderColor = 'white'}
          if(index!=1){newData[1].borderColor = 'white'}
          if(index!=2){newData[2].borderColor = 'white'}
        
        } else if (newData[idx].isDisplay){
          newData[idx].isDisplay=false
        }
        setExpData(newData)
    }
    console.log(expData)
  }

  useEffect(()=>{
    handleDisplay(index)
  },[index])

  return (
    <Flex  alignItems="center"
     direction={["column", "row", "row", "row"]}
     ml='8.33%' mt='8.23%'
    >
    <VStack alignItems='end'
    mr='10px'
    >
      <Flex flexDirection={["column", "column", "row", "row"]} >
        {expData.map((children, index) =>(
          <div key={index}  onMouseOver={()=>setIndex(index)}>
            <ExperienceCard
              {...children}
              />
          </div>
        ))}
      </Flex>
      
      {/* <Divider orientation='horizontal' borderWidth='3px' fontWeight={'bold'}/> */}
      <Text whiteSpace='nowrap' fontWeight='800' mt='20px' fontSize={['40px','40px','60px','60px']} color="whiteColor">
        Experience <sub>03.</sub>
      </Text>
   
    </VStack>

    </Flex>
  )
}


