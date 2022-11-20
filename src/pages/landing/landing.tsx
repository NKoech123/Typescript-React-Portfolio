import React from 'react'
import { Intro } from "./sections/Intro";
import { AboutMe } from './sections/AboutMe';
import { Experience } from './sections/Experience';
import {Box} from "@chakra-ui/react";
import {Projects} from './sections/Projects'
import {Footer} from './sections/Footer'
import {
  BrowserRouter as Router,
  Route,
  Link as RouteLink
} from "react-router-dom";

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