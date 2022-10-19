import React from 'react'
import { Flex,Text} from "@chakra-ui/react";

const Header = () => {
  return (

    <Flex mx="8.33%"
          mt="4.47%"
          mb="4.38%" 
          h={["20.82%" ,"20.82%" ,"5.82%" ,"5.82%" ]}
          justifyContent={['center','center','space-between','space-between']}
          alignItems = {['center','center','space-between','space-between']}
          direction={["column", "column", "row", "row"]}
          gap='2.5rem'
        >
       <Flex ml={["4%","4%","4%","4%"]} >
          <Flex fontSize='30px' fontWeight='900' color={"whiteColor"}> N<Text fontWeight='400' color={"whiteColor"}>K.</Text></Flex>
       </Flex>

      <Flex  direction={["column", "column", "row", "row"]} 
             alignItems = {['center','center','space-between','space-between']}
             gap= {['2.5rem','2.5rem','0rem','0rem']}
             as='nav'
             >
              <Flex fontSize='20px' 
                    fontWeight='600' 
                    my={['10px','0px','0px','0px']} 
                    color={"whiteColor"}
                    >
                      Projects
              </Flex>
              <Flex fontSize='20px' 
                    fontWeight='600' 
                    ml={['0px','80px','80px','80px']} 
                    my={['10px','0px','0px','0px']}
                    color={"whiteColor"}
                  >
                    Contact
              </Flex>
      </Flex>
       
    </Flex>

   
  )
}

export default Header