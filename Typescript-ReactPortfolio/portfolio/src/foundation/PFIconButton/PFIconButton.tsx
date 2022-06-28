import React from 'react';
import { IconButton } from '@chakra-ui/react'


type PFIconButtonProps = {
    icon: React.ReactElement;
    ariaLabel: string;
    onClick?: any;
  };

function PFIconButton({
    icon,
    ariaLabel,
    onClick}:PFIconButtonProps) {
  return (
    <IconButton
    variant="ghost"
    icon={icon}
    size="lg"
    onClick={onClick}
    aria-label={ariaLabel}
    color ="darkColor"
    
    

    />
  );
}

export default PFIconButton