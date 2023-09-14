import { createTheme, responsiveFontSizes } from "@mui/material";
import red from "@mui/material/colors/red";
import grey from "@mui/material/colors/grey";
import yellow from "@mui/material/colors/yellow";
import green from "@mui/material/colors/green";
import lightBlue from "@mui/material/colors/lightBlue";
import "../App.css";
const baseTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#202844",
    },
    secondary: {
      light: red[500],
      main: "#d9d9d9",
      dark: red[900],
      contrastText: "#202844",
    },
    error: {
      light: red[400],
      main: red[500],
      dark: red[300],
      contrastText: grey[800],
    },
    success: {
      main: green[500],
    },
    warning: {
      main: yellow[500],
      contrastText: grey[800],
    },
    info: {
      main: lightBlue[500],
    },
    text: {
      primary: grey[900],
      secondary: grey[700],
      disabled: grey[500],
    },
    action: {
      active: red[200],
      activeOpacity: 1,
      disabled: grey[700],
      disabledBackground: grey[200],
      hover: red[100],
      hoverOpacity: 0.7,
      focus: red[600],
      focusOpacity: 1,
      selected: red[300],
      selectedOpacity: 1,
    },
    background: {
      default: "#f5f6fa",
      paper: "#fff",
    },
    common: {
      black: grey[900],
      white: grey[200],
    },
    tonalOffset: 0.2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          color: "#000",
        },

        root: ({ ownerState }) => {
          switch (ownerState.variant) {
            case "contained":
              return {
                "&.Mui-disabled": {
                  background: "#f3f3f3",
                  color: "red",
                },
              };
            case "outlined":
              return {
                "&.Mui-disabled": {
                  background: "#e9e9e9",
                  color: "#c7c7c7",
                  borderColor: "#e4e4e4",
                },
              };
            default:
              return;
          }
        },
      },
      variants: [
        {
          props: { variant: "test" },
          style: {
            color: "red",
            fontSize: 80,
            fontWeight: 800,
            textShadow: "2px 2px black",
          },
        },
      ],
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
        style: {
          boxShadow: "none",
          textTransform: "none",
          fontSize: "15px",
          height: "40px",
          borderRadius: "8px",
          textAlign: "center",
          fontWeight: "500",
        },
      },
    },
  },
});

const defaultTheme = responsiveFontSizes(baseTheme);

export default defaultTheme;
