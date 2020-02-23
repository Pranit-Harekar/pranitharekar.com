import "./App.css";

import React, { useState } from "react";

import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider
} from "@material-ui/core";

import Header from "./components/Header";
import Background from "./components/Background";
import Blogs from "./components/Blogs";
import Experience from "./components/Experience";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Skills from "./components/Skills";

export default () => {
  const [mode, setMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#007BFF",
        contrastText: "#fff"
      },
      type: mode ? "dark" : "light"
    },
    typography: {
      fontFamily: "Lato"
    }
  });
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header checked={mode} onChecked={() => setMode(!mode)} />
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
