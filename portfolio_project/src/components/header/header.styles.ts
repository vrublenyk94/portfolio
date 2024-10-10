import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  header: {
    background: theme.palette.common.white,
  },
  header_wrapper: {
    maxWidth: "1400px",
    margin: "0 auto",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },

  logo: {
    color: theme.palette.secondary.main,
    fontFamily: theme.typography.fontFamily,
    fontSize: "1.25rem",
    fontWeight: 600,
  },
  logo__dot: {
    color: theme.palette.primary.main,
    fontSize: "2rem",
  },
  header_buttons: {
    color: theme.palette.primary.dark,
    fontSize: "1rem",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  active_button: {
    fontSize: "1rem",
    color: theme.palette.primary.main,
  },
}));
