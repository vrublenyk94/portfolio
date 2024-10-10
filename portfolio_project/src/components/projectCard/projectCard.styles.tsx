import { makeStyles } from "tss-react/mui";
interface IStyleProps {
  page: string;
}

export const useStyles = makeStyles<IStyleProps>()((theme, { page }) => ({
  projectCard: {
    height: page === "home" ? "300px" : "70vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    marginBottom: page === "projects" ? theme.spacing(2.5) : "0",
  },
  projectCard__image: {
    paddingTop: theme.spacing(1),
    display: "block",
    margin: "0 auto",
    height: "95%",
    width: "95%",
    objectFit: "contain",
    borderRadius: "10px",
  },
  projectCard__bg: {
    width: "100%",
    height: "75%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    overflow: "hidden",
  },
  projectCard__description: {
    padding: theme.spacing(1),
  },
  projectCard__wrapper: {
    display: "flex",
    alignItems: "center",
  },
}));
