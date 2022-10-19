import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react";

import Header from '../src/components/header';
import Landing from "./pages/landing/landing";

import { ColorModeSwitcher } from "./ColorModeSwitcher"

import customTheme from "../src/theme";

//ColorModeSwitcher justifySelf="flex-end" />
export const App = () => (
  <ChakraProvider theme={ customTheme }>
    <Header/>
    <Landing/>
  </ChakraProvider>
)


