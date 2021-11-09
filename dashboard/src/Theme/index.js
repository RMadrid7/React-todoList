import { createMuiTheme } from "@material-ui/core";

const primary = "#0c3c84";
const secondary = "#e4247c";
const lightSecondary = "#0c3c84";
const defaultBlack = "#000000";

export default createMuiTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  root:{
    display:'flex'
  },
  box:{
    display:'flex'
  },
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    defaultBlack: {
      main: defaultBlack,
    },
    lightSecondary: {
      main: lightSecondary,
    },
  },
  overrides: {
    MuiDialogActions: {
      root: {
        padding: "8px 24px 16px 24px",
      },
    },
    MuiButton: {
      root: {
        fontWeight: 600,
        textTransform: "none",
        color: secondary,
        padding: "6px 24px",
      },
      outlined: {
        borderRadius: "35px",
        borderColor: secondary,
        padding: "6px 20px",
      },
    },
    MuiSelect: {
      filled: {
        padding: "15px 0 15px 15px",
      },
    },
    MuiFilledInput: {
      input: {
        height: "49px",
        padding: "0px 0 0 10px",
      },
    },
  },
});
