import React from 'react'
import {Icon} from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

type keywordProps = {
    arrowIcon: IconType;
}

function Keyword({arrowIcon}:keywordProps) {
  return (
   
    <Icon  as={arrowIcon}   color="#469E84"/> 
  
  )
}

export default Keyword

