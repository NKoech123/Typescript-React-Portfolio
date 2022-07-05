import React from 'react'
import { Intro } from "./sections/intro";
import { AboutMe } from './sections/aboutMe';
import {Box} from "@chakra-ui/react";
function Landing() {
  return (
    <Box>
        <Intro/>
        <AboutMe/>

    </Box>
    
  )
}

export default Landing