import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  coloredDot: {
    fontFamily: theme.typography.h3.fontFamily,
    color: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
}));
