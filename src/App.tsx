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

import Header from '../src/components/header';
import Headermobile from "./components/headermobile";
import { AboutMe } from "./pages/landing/sections/aboutMe";
import { Intro } from "./pages/landing/sections/intro";
import { Footer } from "./pages/landing/sections/footer";
import { Projects } from "./pages/landing/sections/projects";
import Landing from "./pages/landing/landing";


import customTheme from "../src/theme";

export const App = () => (
  <ChakraProvider theme={ customTheme }>
      <Header/>
      <Routes>
        <Route path='/' element={ <Intro/>}/>
        <Route path='/about' element={ <AboutMe/>}/>
        <Route path='/projects' element={ <Projects/>}/>
        <Route path='/contact' element={ <Footer/>}/>
      </Routes>
  </ChakraProvider>
)


