import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';

import theme from './assets/js/Theme';
import Stack from '@mui/material/Stack';

import DeleteIcon from '@mui/icons-material/Delete';
import Buttons from './components/Buttons';

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


      <Container component="main">        
        <Grid container >
          <Buttons />
        <Button color="primary" variant="contained" size='icon' startIcon={<DeleteIcon />}>
          Primary contained with icon
        </Button>
        <Button color="primary" variant="outlined" size='icon'>
          Primary outlined
        </Button>
        <Button color="info" variant="outlined" size='icon'>
          Outlined
        </Button>
        <Button color="primary" variant="contained" size='icon' disabled>
          disabled contained
        </Button>
        <Button color="primary" variant="outlined" size='icon' disabled>
          disabled outlined
        </Button>
        </Grid>

        <Stack direction="row" spacing={2} sx={{ m : 4}}>
            <Button color="primary" variant="contained" size='small'>
              Primary contained
            </Button>
        
            <Button color="primary" variant="outlined" size='small'>
              Primary contained
            </Button>
         
        </Stack>
      </Container>
    </ThemeProvider>
  );
}