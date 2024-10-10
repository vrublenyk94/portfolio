import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  animatedSkills: {
    marginTop: theme.spacing(8),
    overflow: "hidden",
    width: "100%",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "0.5rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(6),
    },
  },
  animatedSkills__title: {
    fontSize: "2rem",
    marginBottom: theme.spacing(2.5),
  },
  animatedSkills__title_dot: {
    fontFamily: theme.typography.h3.fontFamily,
    color: theme.palette.primary.main,
  },
  animatedSkills__row: {
    display: "flex",
    justifyContent: "flex-start",
    overflow: "hidden",
  },
  animatedSkills__content: {
    display: "flex",
    flexShrink: "0",
  },
  animatedSkills__rows_green: {
    whiteSpace: "nowrap",
    fontWeight: "700",
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  animatedSkills__rows_white: {
    whiteSpace: "nowrap",
    fontWeight: "700",
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
}));
