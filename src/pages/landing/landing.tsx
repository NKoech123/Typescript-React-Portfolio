import React from 'react'
import { Intro } from "./sections/Intro";
import { AboutMe } from './sections/AboutMe';
import { Experience } from './sections/Experience';
import {Box} from "@chakra-ui/react";
import {Projects} from './sections/Projects'
import {Footer} from './sections/Footer'

function Landing() {
  return (
    <>
      <Intro/>
      <AboutMe/>
      <Experience/>
      <Projects/>
      <Footer/>
    </>
    
  )
}

export default Landing