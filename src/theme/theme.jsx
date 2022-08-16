import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(0, 0%, 100%)",
    },
    secondary: {
      main: "hsl(0, 0%, 0%)",
    },
    info: {
      main: "hsl(0, 0%, 63%)",
    },
    tertiary: {
      main: "hsl(0, 0%, 27%)",
    },
  },
  typography: {
    h1: {
      fontFamily: "League Spartan, sans-serif",
      fontWeight: "600",
      fontSize: "2rem",
    },
    h2: {
      fontFamily: "League Spartan, sans-serif",
      fontWeight: "700",
      fontSize: "2.5rem",
    },
    subtitle1: {
      fontFamily: "League Spartan, sans-serif",
      fontWeight: "500",
      fontSize: "clamp(0.75rem, 0.1071rem + 0.7143vw, 1.25rem)",
    },
    h3: {
      fontFamily: "League Spartan, sans-serif",
      fontWeight: "700",
      fontSize: "1rem",
      textTransform: "uppercase",
      letterSpacing:"0.5rem"
    },
    button1: {
      fontFamily: "League Spartan, sans-serif",
      fontWeight: "700",
      fontSize: "14px",
      letterSpacing: "1rem",
    },
  },
});

export default theme;
