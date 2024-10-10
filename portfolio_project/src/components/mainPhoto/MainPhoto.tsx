import React from "react";
import { Box } from "@mui/material";
import { useStyles } from "./mainPhoto.styles";

const MainPhoto: React.FC = () => {
  const { classes } = useStyles();
  return (
    <>
      <Box className={classes.mainPhoto__wrapper}>
        <Box className={classes.mainPhoto__container}>
          <Box
            component="img"
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-d4ca6.appspot.com/o/vr.png?alt=media&token=4fc9c56f-71bd-4912-8ab8-1c75c3504a47"
            className={classes.mainPhoto}
            alt="Volodymyr Rublenyk"
          />
        </Box>
      </Box>
    </>
  );
};

export default MainPhoto;
