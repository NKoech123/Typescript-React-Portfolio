import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/header';
import Landing from "./pages/landing/landing";
import { AboutMe } from "./pages/landing/sections/aboutMe";
import { Intro } from "./pages/landing/sections/intro";
import { Footer } from "./pages/landing/sections/footer";
import { Projects } from "./pages/landing/sections/projects";
import { Experience } from "./pages/landing/sections/experience";


import customTheme from "../src/theme";

export const App = () => (
  <ChakraProvider theme={ customTheme }>
      <Header/>
      <Landing/>
      {/* <Routes>
        <Route path='/' element={ <Intro/> }/>
        <Route path='/about' element={ <AboutMe/> }/>
        <Route path='/projects' element={ <Projects/> }/>
        <Route path='/contact' element={ <Footer/> }/>
        <Route path='/experience' element={ <Experience/> }/>
      </Routes> */}
  </ChakraProvider>
)


