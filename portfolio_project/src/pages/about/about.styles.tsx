import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  about: {
    height: "auto",
    marginTop: theme.spacing(8),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down("lg")]: {
      marginTop: theme.spacing(6),
    },
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(4),
      paddingBottom: theme.spacing(0),
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
  },
  about__description: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
      marginTop: theme.spacing(2),
    },
  },
}));
