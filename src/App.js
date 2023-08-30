import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';

import './App.css';
import theme from './assets/js/Theme';

//페이지 추가
import Home from './pages/Home';
import Sub01 from './pages/Sub01';

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div className="App">          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sub01" element={<Sub01 />} />
          </Routes>
        </div>
      </BrowserRouter>    
    </ThemeProvider>
  );
}