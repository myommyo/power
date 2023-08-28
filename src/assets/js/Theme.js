import { createTheme } from '@mui/material/styles/';

const Colors = {
  primary : '#3f8cff',
  secondary : '#000000',
  danger : '#ff0000'
};

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