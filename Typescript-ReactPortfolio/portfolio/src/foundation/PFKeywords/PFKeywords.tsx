import React from 'react'
import { IconButton } from '@chakra-ui/react'



type KeywordProps = {
    arrowIcon: React.ReactElement;
    ariaLabel: string;
}

function PFKeywords({arrowIcon,ariaLabel}:KeywordProps) {
  return (
    <IconButton
    icon={arrowIcon}
    size="lg"
    aria-label={ariaLabel}
    color = "arrowColor"
    
    />
  )
}

export default PFKeywords




