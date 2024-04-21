import { createTheme } from "@mui/material/styles";

// Create a Material-UI theme instance
// https://mui.com/customization/theming/
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#3165D4",
    },
    background: {
      default: "#1C1C1C",
    },
  },
  typography: {
    fontWeightMedium: 600,
    fontSize: 10,
    h1: {
      fontSize: "2.2rem",
      fontWeight: 400,
      color: "#0A3FB1",
    },
    body1: {
      color: "#000000",
    },
  },
});

export default theme;
