import React from "react";
import { Typography } from "@mui/material";
import { useStyles } from "./sectionTitle.styles";

interface IProps {
  title: string;
}

const SectionTitle: React.FC<IProps> = ({ title }) => {
  const { classes } = useStyles();
  return (
    <>
      <Typography variant="h2" className={classes.title}>
        {title}
        <span className={classes.coloredDot}>.</span>
      </Typography>
    </>
  );
};

export default SectionTitle;
