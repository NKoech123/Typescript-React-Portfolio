import React from 'react'
import {Icon, Box} from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

type keywordProps = {
    arrowIcon: IconType;
}

function Keyword({arrowIcon}:keywordProps) {
  return (
    <Box>
       <Icon  as={arrowIcon} color="lightGreen"/> 
    </Box>
  )
}

export default Keyword

