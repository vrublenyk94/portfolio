import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme: Theme) => ({
  wrapper: {
    position: "relative",
    height: "auto",
    minHeight: "100%",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  container: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    display: "block",
    margin: "0 auto",
    paddingTop: theme.spacing(8),
    maxWidth: "1400px",
    height: "auto",
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  defaultLayout: {
    width: "100%",
    height: "100%",
  },
}));
