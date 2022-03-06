import {
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: "#03a9f4",
    },
    secondary: {
      main: "#c51162",
    },
    info: {
      main: "#F3EEE1",
    },
    warning: {
      main: "#D9D0B4",
    },
    error: {
      main: "#3B372A",
    },
    success: {
      main: "#262520",
    },
    background: {
      paper: "#fffde7",
    },
  },
  typography: {
    fontFamily: [
      "Roboto",
      "Kosugi",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
    ].join(","),
  },
});

theme = responsiveFontSizes(theme);

export default theme;
