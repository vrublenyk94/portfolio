import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  contact: {
    height: "auto",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(15),
    justifyContent: "space-between",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      paddingTop: theme.spacing(6),
      marginTop: theme.spacing(8),
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      paddingTop: theme.spacing(0),
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(6),
    },
  },
  contact__title_wrapper: {
    width: "50%",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
  },
  contact__description: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
    },
  },
  contact__button_wrapper: {
    display: "flex",
    alignItems: "center",
  },
  contact__button: {
    marginRight: theme.spacing(2.5),
    marginBottom: theme.spacing(2.5),
  },
  contact__icon: {
    height: "40px",
    width: "40px",
    marginRight: theme.spacing(2.5),
  },
}));
