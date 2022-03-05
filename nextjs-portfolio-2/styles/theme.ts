import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#03a9f4",
    },
    secondary: {
      main: "#c51162",
    },
    info: {
      main: "#D9CB9E",
    },
    warning: {
      main: "#A69B79",
    },
    error: {
      main: "#3B372A",
    },
    success: {
      main: "#fff",
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

export default theme;
