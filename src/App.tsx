import "./App.css";

import React from "react";
import Intro from "./components/Intro";
import Background from "./components/Background";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import FeaturedProjects from "./components/FeaturedProjects";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider
} from "@material-ui/core";

import { orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: orange,
    type: "light"
  },
  typography: {
    fontFamily: "Lato"
  }
});

export default () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <div className="App">
      <Intro />
      <Background />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <Blogs />
      <Footer />
    </div>
  </MuiThemeProvider>
);
