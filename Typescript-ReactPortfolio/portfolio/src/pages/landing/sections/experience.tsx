import React from 'react'
import { Flex, Text, VStack} from '@chakra-ui/react'
export const Experience = () => {
  return (
    <Flex h='100vh' w='100vw' alignItems="end">
    <Flex w='83.33%' h='70.28%' px='8.33%' direction='row'>
        <VStack>
            <Flex direction={['column','column','row','row']} mt='18.8%' ml='4.57%' mr='2.31%' mb='11.10%' justifyContent='center'>
                <Flex w='399px' h='180px' bg='green' p='4px'>Experience 1</Flex>
                <Flex w='399px' h='180px' bg='green' ml='2px' p='4px'>Experience 2</Flex>
                <Flex w='399px' h='180px' bg='green'  ml='2px' p='4px'>Experience 3</Flex>
            </Flex>

            <Flex mr='40px'>
            <Text  fontWeight='800'   fontSize={['20px','40px','60px','90px']} color="whiteColor">Experience <sub>02.</sub></Text>
            </Flex>

        </VStack>

    </Flex>
    </Flex>
    
  )
}

