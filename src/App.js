import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import { styled, useTheme, ThemeProvider } from "@mui/material/styles";
import Cookies from "js-cookie";
import { Stack } from "@mui/material";
import SideBar from "./components/SideBar";

import AppBar from "./components/Header";
import darkTheme from "./Themes/dark";
import blueTheme from "./Themes/lightBlue";
import defaultTheme from "./Themes/theme";

import "./App.css";
// import theme from "./assets/js/Theme";

//페이지 추가
import Sample from "./pages/Sample";
import Home from "./pages/Home";
import Sub01 from "./pages/Sub01";
import Sub04 from "./pages/Sub04";
import Sub05 from "./pages/Sub05";
import Sub06 from "./pages/Sub06";
import Sub07 from "./pages/Sub07";
import Sub08 from "./pages/Sub08";
import Sub09 from "./pages/Sub09";
import Sub10 from "./pages/Sub10";
import Sub11 from "./pages/Sub11";

const themeArray = [
  {
    name: "Blue",
    themeName: defaultTheme,
  },
  {
    name: "Light",
    themeName: blueTheme,
  },
  {
    name: "Dark",
    themeName: darkTheme,
  },
];
export default function App() {
  const [open, setOpen] = React.useState(false);

  const [selectedThemeName, setSelectedThemeName] = useState(Cookies.get("selectedThemeName") || "Blue");
  const [selectedTheme, setSelectedTheme] = useState(themeArray.find((theme) => theme.name === selectedThemeName).themeName);
  const handleChange = (event) => {
    const newThemeName = event.target.value;
    setSelectedThemeName(newThemeName);
    setSelectedTheme(themeArray.find((theme) => theme.name === newThemeName).themeName);
    Cookies.set("selectedThemeName", newThemeName, {
      expires: 365,
      sameSite: "None",
      secure: true,
    });
  };

  const toggleHdSd = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <ThemeProvider theme={selectedTheme}>
      <div className={open ? "sideClose" : "sideOpen"}>
        {/* <AppBar setOpen={open} setSelectedTheme={setSelectedTheme} handleChange={handleChange} selectedTheme={selectedTheme} selectedThemeName={selectedThemeName} themeArray={themeArray} />
        <div className={"btnSide" + (open ? ' sideClose' : ' sideOpen')} onClick={toggleHdSd}></div>
        <SideBar setOpen={open} /> */}

        <AppBar setSelectedTheme={setSelectedTheme} handleChange={handleChange} selectedTheme={selectedTheme} selectedThemeName={selectedThemeName} themeArray={themeArray} />
        <div className="btnSide" onClick={toggleHdSd}></div>
        <Stack direction="row">
          <SideBar />
          <CssBaseline />
          <BrowserRouter component="main" sx={{ flexGrow: 1, p: 3 }}>
            <div className="App">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/Sample">
                  <Sample />
                </Route>                  
                <Route exact path="/Sub01">
                  <Sub01 />
                </Route>                  
                <Route exact path="/Sub04">
                  <Sub04 />
                </Route>                  
                <Route exact path="/Sub05">
                  <Sub05 />
                </Route>                  
                <Route exact path="/Sub06">
                  <Sub06 />
                </Route>                  
                <Route exact path="/Sub07">
                  <Sub07 />
                </Route>                  
                <Route exact path="/Sub08">
                  <Sub08 />
                </Route>                  
                <Route exact path="/Sub09">
                  <Sub09 />
                </Route>                  
                <Route exact path="/Sub10">
                  <Sub10 />
                </Route>                  
                <Route exact path="/Sub11">
                  <Sub11 />
                </Route>                  


              </Switch>
            </div>
          </BrowserRouter>
        </Stack>
      </div>
    </ThemeProvider>
  );
}
