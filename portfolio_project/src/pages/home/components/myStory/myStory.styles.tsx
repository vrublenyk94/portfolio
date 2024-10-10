import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  story: {
    marginTop: theme.spacing(8),
    height: "auto",
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(5),
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(6),
    },
  },
  story__wrapper: {
    maxHeight: "300px",
    overflow: "hidden",
    position: "relative",
    transition: "max-height 0.3s ease",
    [theme.breakpoints.down("md")]: {
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "70px",
        background:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
        pointerEvents: "none",
      },
    },
  },
  story__expanded: {
    maxHeight: "none",
    "&::after": {
      display: "none",
    },
  },
  story__description: {
    marginTop: theme.spacing(2),
  },
  story__toggleButton: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      marginTop: theme.spacing(2),
      paddingLeft: "0",
      alignSelf: "center",
    },
  },
}));
