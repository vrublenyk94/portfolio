import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  myExperience: {
    position: "relative",
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    paddingBottom: theme.spacing(5),
    overflow: "hidden",
  },
  myExperience__title: {
    fontSize: "2rem",
    marginBottom: theme.spacing(2.5),
  },
  myExperience__title_dot: {
    fontFamily: theme.typography.h3.fontFamily,
    color: theme.palette.primary.main,
  },
  myExperience__wrapper: {
    display: "flex",
    width: "100%",
    height: "auto",
    marginBottom: theme.spacing(4),
    position: "relative",
  },
  myExperience__number_wrapper: {
    width: "10%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  myExperience__number: {
    color: theme.palette.primary.main,
    position: "relative",
    zIndex: 1000,
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "60px",
      height: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      width: "35px",
      height: "35px",
    },
  },
  firstChild: {
    marginRight: theme.spacing(1.375),
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(0.5),
    },
  },
  globalScrollBar: {
    paddingTop: theme.spacing(1),
    position: "absolute",
    top: 90,
    left: "5%",
    transform: "translateX(-50%)",
    width: "4px",
    backgroundColor: theme.palette.primary.main,
    zIndex: 0,
    maxHeight: "95%",
  },
  myExperience__role__wrapper: {
    paddingBottom: theme.spacing(4),
    width: "80%",
  },
  myExperience__role: {
    fontSize: "1.2rem",
    color: theme.palette.primary.main,
  },
  myExperience__company: {
    fontSize: "2.5rem",
    fontWeight: "700",
    lineHeight: "2.5rem",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  myExperience__description: {
    marginTop: theme.spacing(2.5),
    lineHeight: "1.6rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
    },
  },
}));
