import React from 'react';
import  PFNavbar from '../../foundation/Navbar/Navbar';

export default {
    title: "Foundation/Navbar",
    component: PFNavbar,
  };

export const NavbarLogo = () =>{
    return (
        <PFNavbar
          logoText="NK" fontSize ="lg" fontWeight="bold"
           
        />
    );

};

export const NavbarProjects = () =>{
    return (
        <PFNavbar
          logoText="Projects" fontSize ="lg" fontWeight="bold"
           
        />
    );

};

export const NavbarContact = () =>{
    return (
        <PFNavbar
          logoText="Contact" fontSize ="lg" fontWeight="bold"
           
        />
    );

};