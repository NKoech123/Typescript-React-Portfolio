import React from 'react'
import {Text,Flex, HStack} from '@chakra-ui/react'
import { SocialIcons } from '../../../components/SocialIcons';
import PFButton from '../../../foundation/PFButton/PFButton';


export const Footer = () => {
    const externalRouteChange = () =>{ 
        let url = `https://www.linkedin.com/in/nicholas-koech-74990010a/`; 
        window.open(url, '_blank')
}

  return (

        <Flex 
         mx='8.33%'  mb='8%'  
         justifyContent='center' 
         alignItems='center' 
         w ='83.33vw' 
         ml='8.33%' 
         mt='8.23%'
         >
            <Flex direction='column' 
            mb='12px'
            >
                <Text 
                textAlign='center' 
                color="rgba(70, 158, 132, 1)"
                >
                    What now?
                </Text>
                <Text 
                textAlign='center' 
                fontSize={['20px','30px','60px','90px']} 
                fontWeight='700' 
                color="whiteColor"
                >
                    Get in touch
                </Text>
                <Text textAlign='center'
                 mb='20px' 
                 color="whiteColor"
                 >
                    My name is Nicholas and I enjoy solving problems. <br/> 
                    My interest in coding started back in 2017 when I <br/> 
                    took CS61A — which introduced me to programing in <br/> 
                    python!
                </Text>

                <Flex  w='100%' 
                justifyContent='space-between' 
                mb='5rem'>
                    <Text color='rgba(239, 133, 91, 1)'
                    >
                     #BayArea 
                    </Text>
                    <Text color='rgba(239, 133, 91, 1)'
                    >
                     #FullStack 
                    </Text>
                    <Text color='rgba(239, 133, 91, 1)'
                    >
                     #Backend
                    </Text>
                    <Text color='rgba(239, 133, 91, 1)'
                    > 
                     #BLM
                    </Text>
                </Flex>

                <PFButton
                    variant="outline"
                    _hover={{
                        color: "green.200",
                        borderColor: "green.200"
                    }}
                    stylesProps={{
                        width: "100px",
                        fontSize: "16px",
                        fontWeight: "400",
                        borderColor:"#EF855B",
                        color: "#EF855B"
                    }}
            
                    OnClick={externalRouteChange}
                >
                Say hello!
                </PFButton>

            </Flex>

            <Flex  ml='200px'
            >
             <SocialIcons/>
            </Flex>
            
        </Flex>
 
  )
}

