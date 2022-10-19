import React from 'react';
import { Text } from '@chakra-ui/react';

type PFParagraphProps ={
    variant: string;
    text: string;

}

function PFParagraph({variant, text}: PFParagraphProps) {
  return <Text variant = {variant} > {text} </Text>;
}

export default PFParagraph