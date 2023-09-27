import { createTheme, responsiveFontSizes } from "@mui/material";
import red from "@mui/material/colors/red";
import grey from "@mui/material/colors/grey";
import yellow from "@mui/material/colors/yellow";
import green from "@mui/material/colors/green";
import "../App.css";
const baseTheme = createTheme({
  spacing: 4,
  palette: {
    // mode: "light",
    primary: {
      main: "#202844",
      contrastText: "#fff",
    },
    secondary: {
      light: "#a5b4cb",
      main: "#3e8cff",
      dark: red[900],
      contrastText: "#202844",
    },
    error: {
      light: "#202844",
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
      main: "#c8cbd3",
    },
    text: {
      main: "#000",
      primary: "#000",
      secondary: "#e5e5e5",
      disabled: "#999999",
    },
    action: {
      active: "#202844",
      activeOpacity: 1,
      disabled: grey[700],
      disabledBackground: grey[200],
      hover: "#eff2fa",
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
      main: "#fff",
      black: grey[900],
      cmtBd: "#e8e9ec", //comment border color
      tabBd: "#d9d9d9", //Tab border color
      textColor1: "#666", //textColor #666
      textColor2: "#555", //header Admin 글씨색
      textColor3: "#627399", //DragZone 글씨색
      bgColor1: "#ddd", //x 버튼 Bg color
      radioBg: "#f8f8f8", //Radio Button Bg
    },
    tonalOffset: 0.2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          color: "#000",
          backgroundColor: "#fff",
        },
        root: ({ ownerState }) => {
          switch (ownerState.variant) {
            case "contained":
              return {
                "&.Mui-disabled": {
                  background: "#e9eaf2",
                  color: "#c8cbd3",
                },
              };
            case "outlined":
              return {
                "&.Mui-disabled": {
                  background: "#fff",
                  color: "#c8cbd3",
                  borderColor: "#c8cbd3",
                },
              };
            default:
              return;
          }
        },
      },
      variants: [
        {
          props: { size: "icon" },
          style: {
            borderRadius: "8px",
          },
          // props: { variant: "test" },
          // style: {
          //   color: 'red',
          //   fontSize: 80,
          //   fontWeight: 800,
          //   textShadow: "2px 2px black"
          // }
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
          // borderRadius: '8px',
          textAlign: "center",
          fontWeight: 500,
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
        style: {
          boxShadow: "none",
          textTransform: "none",
          borderRadius: "12px",
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        style: {
          // paddingLeft: 16,
          minHeight: 40,
          // border: "1px solid #e5e5e5",
          borderRadius: "4px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        defaultProps: {
          disableElevation: true,
          style: {
            boxShadow: "none",
            textTransform: "none",
            textAlign: "center",
            fontWeight: 700,
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {},
    },
  },
  typography: {
    // fontFamily: {},
    sectionTitle: {
      fontSize: "28px",
      fontWeight: 700,
    },
    searchLabel: {
      fontSize: "14px",
      fontWeight: 700,
    },
    subTitle1: {
      fontSize: "20px",
      fontWeight: 700,
    },
    subTitle2: {
      fontSize: "16px",
      fontWeight: 700,
    },
    inputSide: {
      fontSize: "14px",
    },
    smallFont: {
      fontSize: "12px",
    },
    font18: {
      fontSize: "18px",
    },
    gridNumbs: {
      fontSize: "48px",
      fontWeight: 700,
    },
    gridNumbsText: {
      fontSize: "32px",
      fontWeight: 500,
    },
  },
});

const defaultTheme = responsiveFontSizes(baseTheme);
export default defaultTheme;
