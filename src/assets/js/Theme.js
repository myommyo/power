import { createTheme } from '@mui/material/styles/';

const Colors = {
  primary : '#3e8cff',
  secondary : '#000000',
  danger : '#ff0000'
};

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const theme = createTheme({
  palette : {
    primary : {
      main: Colors.primary
    },
    secondary : {
      main: Colors.secondary
    }
  },
  components : {
    MuiButton: {
      defaultProps : {
        disableRipple : true,
        disableElevation : true
      }
    } 
  }
});


export default theme;