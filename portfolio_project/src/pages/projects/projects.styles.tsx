import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  projects: {
    paddingTop: theme.spacing(10),
    [theme.breakpoints.down("lg")]: {
      paddingTop: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
  },
  projects__title_large: {
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.7rem",
    },
  },
  projects__title_large_color: {
    color: theme.palette.primary.main,
  },
  projects__title_dot: {
    fontFamily: theme.typography.h3.fontFamily,
    color: theme.palette.primary.main,
  },
  projects__wrapper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
  },
  projects__description: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
    },
  },
}));
