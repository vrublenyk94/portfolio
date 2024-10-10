import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  skills: {
    marginTop: theme.spacing(10),
    heightL: "auto",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(6),
    },
  },
  skills__wrapper: {
    marginTop: theme.spacing(5),
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: theme.spacing(2),
    maxHeight: "360px",
    overflow: "hidden",
    transition: "max-height 0.3s ease",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
    },
  },
  skills__expanded: {
    maxHeight: "none",
  },
  skills__item: {
    fontFamily: theme.typography.h3.fontFamily,
    fontSize: "1.3rem",
    fontWeight: "500",
    color: theme.palette.primary.dark,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  skills__toggleButton: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      marginTop: theme.spacing(2),
      paddingLeft: "0",
      alignSelf: "center",
    },
  },
}));
