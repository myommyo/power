import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Cookies from "js-cookie";

import Appbar from "./components/Header";
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
import Sub09 from "./pages/Sub09";

const themeArray = [
  {
    name: "Default",
    themeName: defaultTheme,
  },
  {
    name: "Dark Theme",
    themeName: darkTheme,
  },
  {
    name: "lightBlue Theme",
    themeName: blueTheme,
  },
];
export default function App() {
  const [selectedThemeName, setSelectedThemeName] = useState(Cookies.get("selectedThemeName") || "Default");
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
  return (
    <ThemeProvider theme={selectedTheme}>
      <Appbar setSelectedTheme={setSelectedTheme} handleChange={handleChange} selectedTheme={selectedTheme} selectedThemeName={selectedThemeName} themeArray={themeArray} />
      <CssBaseline />
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Sample" element={<Sample />} />
            <Route path="/sub01" element={<Sub01 />} />
            <Route path="/sub04" element={<Sub04 />} />
            <Route path="/sub05" element={<Sub05 />} />
            <Route path="/sub06" element={<Sub06 />} />
            <Route path="/sub09" element={<Sub09 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
