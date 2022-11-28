import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouteLink
} from "react-router-dom";

import Header from './components/Header';
import { AboutMe } from "./pages/landing/sections/AboutMe";
import { Intro } from "./pages/landing/sections/Intro";
import { Footer } from "./pages/landing/sections/Footer";
import { Projects } from "./pages/landing/sections/Projects";
import { Experience } from "./pages/landing/sections/Experience";


import customTheme from "../src/theme";

export const App = () => (
  <ChakraProvider theme={ customTheme }>
      <Header/>

      <Routes>
        <Route path='/' element={ <Intro/>}/>
        <Route path='/about' element={ <AboutMe/>}/>
        <Route path='/projects' element={ <Projects/>}/>
        <Route path='/contact' element={ <Footer/>}/>
        <Route path='/experience' element={ <Experience/>}/>
      </Routes>
  </ChakraProvider>
)


