import "./App.css";

import React, { useState } from "react";

import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider
} from "@material-ui/core";

import Background from "./components/Background";
import Blogs from "./components/Blogs";
import Experience from "./components/Experience";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Skills from "./components/Skills";

export default () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#0070F3"
      },
      type: darkMode ? "dark" : "light"
    },
    typography: {
      fontFamily: "Lato"
    }
  });
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header checked={darkMode} onChecked={() => setDarkMode(!darkMode)} />
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
};
