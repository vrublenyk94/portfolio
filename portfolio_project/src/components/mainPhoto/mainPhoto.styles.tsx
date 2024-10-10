import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  mainPhoto__wrapper: {
    width: "50%",
    height: "100%",
    display: "flex",
    justifyContent: "end",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      justifyContent: "center",
    },
  },
  mainPhoto__container: {
    marginTop: theme.spacing(-5),
    width: "31.25rem",
    height: "31.25rem",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.main}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      width: "26.25rem",
      height: "26.25rem",
      marginTop: theme.spacing(8),
    },
    [theme.breakpoints.down("sm")]: {
      width: "18.75rem",
      height: "18.75rem",
    },
  },
  mainPhoto: {
    width: "90%",
    height: "90%",
    borderRadius: "50%",
    objectFit: "cover",
  },
}));
