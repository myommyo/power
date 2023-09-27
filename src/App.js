import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import { styled, useTheme, ThemeProvider } from "@mui/material/styles";
import Cookies from "js-cookie";
import SideBar from "./components/SideBar";

import AppBar from "./components/Header";
import darkTheme from "./Themes/dark";
import blueTheme from "./Themes/lightBlue";
import defaultTheme from "./Themes/theme";

//login
import { Box, Paper, Stack, TextField, Typography, Link, Divider } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Buttons from "../src/components/Buttons";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./App.css";
// import theme from "./assets/js/Theme";

//페이지 추가
import Sample from "./pages/Sample";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Sub01 from "./pages/Sub01";
import Sub04 from "./pages/Sub04";
import Sub05 from "./pages/Sub05";
import Sub06 from "./pages/Sub06";
import Sub07 from "./pages/Sub07";
import Sub08 from "./pages/Sub08";
import Sub09 from "./pages/Sub09";
import Sub10 from "./pages/Sub10";
import Sub11 from "./pages/Sub11";
import Sub1103 from "./pages/Sub1103";

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

  //loginWrap
  const [age, setAge] = React.useState("");

  const selectChange = (event) => {
    setAge(event.target.value);
  };

  //input
  const StyledTextField = styled(TextField, {
    name: "StyledTextField",
  })({
    "& .MuiInputBase-root": {
      paddingLeft: "16px",
      height: "72px",
      borderRadius: "4px",
      fontSize: "16px",
      color: "rgba(255,255,255,0.48)",
      backgroundColor: "rgba(255, 255, 255, 0.16);",
      border: "none",
      outline: "none",
      marginTop: "16px",
    },
  });
  return (
    <ThemeProvider theme={selectedTheme}>
      <div className={open ? "sideClose" : "sideOpen"}>
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
                <Route exact path="/Main">
                  <Main />
                </Route>
                <Route exact path="/Login">
                  <Login />
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
                <Route exact path="/Sub1103">
                  <Sub1103 />
                </Route>
              </Switch>
            </div>
          </BrowserRouter>
        </Stack>
      </div>

      {/* <Stack direction="row" justifyContent="flex-end" className="LoginWrap">
        <Stack
          justifyContent="center"
          alignItems="flex-start"
          sx={{
            px: 30,
            minWidth: "840px",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          <FormControl fullWidth sx={{ pb: 10 }}>
            <Select
              fullWidth
              value={age}
              onChange={handleChange}
              displayEmpty
              variant="outlined"
              IconComponent={KeyboardArrowDownIcon}
              sx={{
                borderRadius: "4px",
                pl: 4,
                fontSize: "16px",
                color: "rgba(255,255,255,0.48)",
                backgroundColor: "rgba(255, 255, 255, 0.16);",
                border: "none !important",
                outline: "none !important",
              }}
              MenuProps={{
                sx: {
                  "&& .Mui-selected": {
                    backgroundColor: "transparent !important",
                    "&:hover": {
                      backgroundColor: "action.hover",
                    },
                  },
                  "&& .Mui-focusVisible": {
                    backgroundColor: "transparent",
                  },
                },
              }}
            >
              <MenuItem value="">
                <em>계열사선택</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <StyledTextField variant="standard" placeholder="아이디" required="true" />
            <StyledTextField variant="standard" type="password" placeholder="비밀번호" required="true" />
          </FormControl>
          <Buttons variant="login">로그인</Buttons>
          <Box sx={{ mt: 6 }}>
            <FormControlLabel sx={{ color: "#fff", fontWeight: "300" }} control={<Checkbox disableRipple />} label="Remember me" />
          </Box>
        </Stack>
      </Stack> */}
    </ThemeProvider>
  );
}
