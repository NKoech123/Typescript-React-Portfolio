import React from 'react'
import { NavbarContact, NavbarProjects} from '../../components/Navbar/Navbar';
import { Box, Flex } from "@chakra-ui/react"

type NavbarHyperLinksProps = {
    navbarProjects?: React.ReactNode;
    navbarContacts?: React.ReactNode;
}



function NavbarHyperLinks({navbarProjects,navbarContacts}:NavbarHyperLinksProps) {
  return (
    <Box>
       {navbarProjects} 
       {navbarContacts} 
        
    </Box>
  )
}


export const NavbarHypers = () =>{
    return (
        <Flex flexWrap='wrap'
       
        gap='90px'
        justifyContent='space-evenly'>

        <Box>   
            <NavbarHyperLinks
            navbarProjects = {<NavbarProjects/>}
         
            
            />
        </Box>

        <Box>   
            <NavbarHyperLinks
       
            navbarContacts={<NavbarContact/>}
            
            />
        </Box>

        

        </Flex>
      
    );

};