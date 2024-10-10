import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  footer: {
    maxWidth: "1400px",
    margin: "0 auto",
    paddingBottom: theme.spacing(3),
    height: "7.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      flexDirection: "column",
      alignItems: "center",
    },
  },
  footer__green: {
    color: theme.palette.primary.main,
  },
  footer__wrapper: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  footer__button: {
    marginTop: theme.spacing(1.5),
    marginRight: theme.spacing(2),
    fontSize: "0.6rem",
  },
  footer__iconButton: {
    paddingBottom: "0px",
  },
}));
