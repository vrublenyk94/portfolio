import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  experience: {
    height: "auto",
    marginTop: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(6),
    },
  },
  tabsWrapper: {
    display: "flex",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  tabs: {
    width: "15rem",
    borderRight: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  cardContent: {
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
  tabPanel: {
    flexGrow: 1,
    marginLeft: theme.spacing(3),
    boxShadow: "none",
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(0),
    },
  },
  companyName: {
    color: theme.palette.primary.main,
  },
  description: {
    fontFamily: theme.typography.fontFamily,
  },
  experience__btnWrapper: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));
