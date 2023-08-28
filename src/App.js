import './App.css';
import {Button, Container, Input, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles/';
import theme from './assets/js/Theme';


function App() {
  return  (
    <ThemeProvider theme={theme}>
      <Container>
        <Paper sx={{
          padding: '50px'
        }}>
          <Input fullwidth placeholder="first" />
          <Input fullwidth placeholder="second" />
          <Input fullwidth placeholder="third" />
          <Input fullwidth placeholder="fourth" />
          <Button sx={{
            marginTop:'4px'
          }} variant="contained">Button</Button>
          <Button color='secondary' sx={{
            marginTop:'4px'
          }} variant="outlined">Button</Button>
          <Button variant="contained" disabled>Disabled</Button>
        </Paper>
      </Container>
    </ThemeProvider>
  )
};

export default App;
