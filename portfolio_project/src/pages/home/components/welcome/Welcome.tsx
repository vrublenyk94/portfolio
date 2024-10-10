import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../constants/routing/urls";
import React from "react";
import { Typography, Button } from "@mui/material";
import { useStyles } from "./welcome.styles";
import MainPhoto from "../../../../components/mainPhoto/MainPhoto";

const Welcome: React.FC = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.welcome}>
      <Box className={classes.welcome__wrapper}>
        <Box className={classes.welcome__title_wrapper_small}>
          <Typography variant="h5" className={classes.welcome__title_small}>
            Hey, I am Volodymyr
          </Typography>

          <Box
            component="img"
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-d4ca6.appspot.com/o/Hi.svg?alt=media&token=29f8d760-a944-43fc-8c16-e5b70b7c4e5c"
            alt="Hi emoji"
            width={35}
            height={35}
            ml={1}
          />
        </Box>
        <Typography variant="h1" className={classes.welcome__title_large}>
          <span className={classes.welcome__title_large_color}>Front</span>end
          Developer
        </Typography>
        <Typography variant="h5" className={classes.welcome__description}>
          I'm a frontend developer from Ukraine based in the United Kingdom.
        </Typography>
        <Button
          variant="contained"
          className={classes.welcome__button}
          component={Link}
          size="large"
          to={ROUTES.CONTACT}
        >
          Get in touch
        </Button>
        <Button
          variant="outlined"
          className={classes.welcome__button}
          component={Link}
          size="large"
          to={ROUTES.PROJECTS}
        >
          Projects
        </Button>
      </Box>
      <MainPhoto />
    </Box>
  );
};

export default Welcome;
