import React from 'react'
import { Intro } from "./sections/intro";
import { AboutMe } from './sections/aboutMe';
import { Experience } from './sections/experience';
import {Box} from "@chakra-ui/react";
function Landing() {
  return (
    <Box>
        <Intro/>
        <AboutMe/>
        <Experience/>

    </Box>
    
  )
}

export default Landing