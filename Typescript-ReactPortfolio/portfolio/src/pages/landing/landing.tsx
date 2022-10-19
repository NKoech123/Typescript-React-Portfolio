import React from 'react'
import { Intro } from "./sections/intro";
import { AboutMe } from './sections/aboutMe';
import { Experience } from './sections/experience';
import {Box} from "@chakra-ui/react";
import {Projects} from './sections/projects'
import {Footer} from './sections/footer'
function Landing() {
  return (
    <Box>
        <Intro/>
        <AboutMe/>
        <Experience/>
        <Projects/>
        <Footer/>
    </Box>
    
  )
}

export default Landing