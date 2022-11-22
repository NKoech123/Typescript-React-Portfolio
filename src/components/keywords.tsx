import React from 'react'
import {Icon, Flex} from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

type keywordProps = {
    arrowIcon: IconType;
}

function Keyword({arrowIcon}:keywordProps) {
  return (
    <Flex justifyItems='center' justifyContent='center'>
       <Icon  as={arrowIcon} color="lightGreen"/> 
    </Flex>
  )
}

export default Keyword

