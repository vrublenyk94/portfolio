import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  projects: {
    minHeight: "auto",
    marginTop: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(6),
    },
  },
  projects__wrapper: {
    marginTop: theme.spacing(5),
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: theme.spacing(2),
    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: "1fr",
    },
    "& > :nth-of-type(1)": {
      gridColumn: "1 / 3",
      [theme.breakpoints.down("lg")]: {
        gridColumn: "1 / 2",
      },
    },
    "& > :nth-of-type(2)": {
      gridColumn: "3 / 4",
      [theme.breakpoints.down("lg")]: {
        gridColumn: "1 / 2",
      },
    },
    "& > :nth-of-type(3)": {
      gridColumn: "1 / 2",
      [theme.breakpoints.down("lg")]: {
        gridColumn: "1 / 2",
      },
    },
    "& > :nth-of-type(4)": {
      gridColumn: "2 / 4",
      [theme.breakpoints.down("lg")]: {
        gridColumn: "1 / 2",
      },
    },
  },
}));
