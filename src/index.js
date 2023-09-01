import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./assets/js/Theme";
import GlobalStyle from "./assets/js/GlobalStyles";
import reportWebVitals from './reportWebVitals';
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
