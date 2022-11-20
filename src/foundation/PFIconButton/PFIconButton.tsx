import React from 'react';
import { IconButton } from '@chakra-ui/react';


type PFIconButtonProps = {
    icon: React.ReactElement;
    ariaLabel: string;
    onClick?: any;
  };

const PFIconButton = (props: PFIconButtonProps) => {
  return (
    <IconButton
    variant="ghost"
    icon={props.icon}
    size="lg"
    fontSize='40px'
    onClick={props.onClick}
    aria-label={props.ariaLabel}
    color ="white"
    
  />
  );
}

export default PFIconButton