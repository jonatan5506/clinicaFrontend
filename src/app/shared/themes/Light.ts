import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#213963",
      contrastText: "#ffff"
    },
    secondary: {
      main: "#019C9B",
      contrastText: "#000"
    },
    background:{
        default: '#ffffff',
        paper: '#f7f6f3'
    }
  }
});
