import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  education: {
    marginTop: theme.spacing(8),
  },
  education__title: {
    fontSize: "2rem",
    marginBottom: theme.spacing(2.5),
  },
  education__title_dot: {
    fontFamily: theme.typography.h3.fontFamily,
    color: theme.palette.primary.main,
  },
  slider: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    margin: "0 auto",
    height: "500px",
    [theme.breakpoints.down("md")]: {
      position: "unset",
      height: "400px",
      display: "flex",
      flexDirection: "column",
    },
  },
  slide: {
    position: "absolute",
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      position: "unset",
      width: "100%",
      height: "90%",
    },
  },
  slide_title: {
    marginBottom: theme.spacing(2),
  },
  certificate_image: {
    maxWidth: "100%",
    maxHeight: "93%",
    display: "block",
    margin: "0 auto",
    objectFit: "contain",
  },
  buttonContainer: {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    transform: "translateY(-50%)",
    marginTop: 0,
    [theme.breakpoints.down("md")]: {
      position: "unset",
      display: "none",
      gap: theme.spacing(2),
      marginTop: theme.spacing(4),
    },
  },
  prevButton: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      bottom: "-100%",
      left: "0",
    },
  },
  nextButton: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      right: "0",
    },
  },
}));
