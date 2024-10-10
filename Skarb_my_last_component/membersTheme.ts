import "src/index.scss";

import { createTheme } from "@mui/material/styles";

interface ThemeOptions {
  primaryMain: string;
  primaryDark: string;
}

export const membersTheme = ({ primaryMain, primaryDark }: ThemeOptions) => {
  return createTheme({
    palette: {
      common: {
        white: "#FFFFFF"
      },
      primary: {
        main: primaryMain,
        dark: primaryDark
      }
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(", "),
      h3: {
        fontFamily: ["Montserrat", "sans-serif"].join(", "),
        fontWeight: 500,
        fontSize: "1.25rem"
      }
    },
    spacing: 8,
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            border: `1px solid ${primaryMain}`,
            borderRadius: "8px",
            boxShadow: "none",
            overflow: "hidden"
          }
        }
      },
      MuiCardMedia: {
        styleOverrides: {
          root: {
            width: "40%",
            borderRadius: "50%"
          }
        }
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: ["Montserrat", "sans-serif"].join(", "),
            fontWeight: 500,
            fontSize: "1rem",
            textDecoration: "none",
            textTransform: "capitalize",
            lineHeight: "1.25rem"
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: ["Montserrat", "sans-serif"].join(", "),
            fontWeight: 700,
            fontSize: "1rem",
            textDecoration: "none",
            lineHeight: "1.25rem",
            color: primaryMain
          }
        }
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              backgroundColor: "white",
              "& fieldset": {
                borderColor: primaryMain
              },
              "&:hover fieldset": {
                borderColor: primaryMain
              },
              "&.Mui-focused fieldset": {
                borderColor: primaryMain,
                borderWidth: "2px"
              }
            }
          }
        }
      },
      MuiPagination: {
        styleOverrides: {
          root: {
            "& .MuiPaginationItem-root": {
              color: "black",
              fontSize: "0.75rem",
              fontWeight: 400,
              fontFamily: ["Montserrat", "sans-serif"].join(", "),
              "&.Mui-selected": {
                backgroundColor: primaryMain,
                color: "#FFFFFF"
              },
              "&:hover": {
                backgroundColor: "#2E714026"
              }
            }
          }
        }
      }
    }
  });
};
