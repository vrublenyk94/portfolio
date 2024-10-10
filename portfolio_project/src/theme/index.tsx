import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 570,
      md: 1000,
      lg: 1200,
      xl: 1920,
    },
  },
  palette: {
    common: {
      white: "#FFFFFF",
    },
    primary: {
      main: "#1DB954",
      dark: "#404040",
      light: "#28C76F",
    },
    secondary: {
      main: "#262626",
      dark: "#A6A3A3",
    },
  },
  typography: {
    fontFamily: ["Rubik", "sans-serif"].join(", "),
    h1: {
      fontFamily: ["Rubik", "sans-serif"].join(", "),
      fontWeight: 700,
      fontSize: "5rem",
      lineHeight: "4.3rem",
    },
    h2: {
      fontFamily: ["Rubik", "sans-serif"].join(", "),
      fontWeight: 700,
      fontSize: "4rem",
      lineHeight: "3.5rem",
    },
    h3: {
      fontFamily: ["Montserrat", "sans-serif"].join(", "),
      fontWeight: 600,
      fontSize: "1rem",
      color: "#404040",
    },
    h5: {
      fontFamily: ["Rubik", "sans-serif"].join(", "),
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: "1.6rem",
      color: "#404040",
    },
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#1DB954",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#28C76F",
          },
        },
        outlined: {
          borderColor: "#0D0D0D",
          color: "#0D0D0D",
          "&:hover": {
            backgroundColor: "#0D0D0D",
            color: "#FFFFFF",
          },
        },
      },
      variants: [
        {
          props: { variant: "contact" },
          style: {
            color: "#262626",
            fontFamily: ["Montserrat", "sans-serif"].join(", "),
            fontSize: "1.2rem",
            fontWeight: 500,
            "&:hover": {
              color: "#1DB954",
            },
          },
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#404040",
          "&:hover": {
            color: "#28C76F",
          },
        },
      },
    },
  },
});

export default theme;
