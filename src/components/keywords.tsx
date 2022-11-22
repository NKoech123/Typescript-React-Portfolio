import React from 'react'
import {Icon, Flex} from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

type keywordProps = {
    arrowIcon: IconType;
    color: string;
}

function Keyword({arrowIcon, color}:keywordProps) {
  return (
    <Flex justifyItems='center' justifyContent='center'>
       <Icon  as={arrowIcon} color={color}/> 
    </Flex>
  )
}

export default Keyword

