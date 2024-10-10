import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  welcome: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(10),
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      paddingTop: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      paddingTop: theme.spacing(4),
    },
  },
  welcome__wrapper: {
    width: "50%",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
  },
  welcome__title_wrapper_small: {
    display: "flex",
    alignItems: "center",
  },
  welcome__title_small: {
    color: theme.palette.primary.dark,
    letterSpacing: "-1px",
  },
  welcome__title_large: {
    marginLeft: theme.spacing(-0.4),
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.7rem",
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(1),
    },
  },
  welcome__title_large_color: {
    color: theme.palette.primary.main,
  },
  welcome__description: {
    marginTop: theme.spacing(2.5),
    width: "100%",
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(1),
    },
  },
  welcome__button: {
    marginTop: theme.spacing(2.5),
    marginRight: theme.spacing(2.5),
  },
}));
