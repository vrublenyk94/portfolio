import React from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routing/urls";
import { IconButton, Typography, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useStyles } from "./footer.styles";
import { downloadCV } from "../../utils/downloadCV";

const Footer: React.FC = () => {
  const { classes } = useStyles();
  return (
    <footer>
      <Box className={classes.footer}>
        <Box>
          <Typography variant="h3">
            Interested in working together
            <span className={classes.footer__green}>?</span>
          </Typography>
          <Box className={classes.footer__wrapper}>
            <Button
              size="medium"
              variant="contained"
              className={classes.footer__button}
              component={Link}
              to={ROUTES.CONTACT}
            >
              Get In Touch
            </Button>
            <Button
              size="medium"
              variant="outlined"
              className={classes.footer__button}
              onClick={downloadCV}
            >
              Get a CV
            </Button>
          </Box>
        </Box>
        <Box>
          <IconButton
            component="a"
            className={classes.footer__iconButton}
            href="https://github.com/vrublenyk94/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component="a"
            className={classes.footer__iconButton}
            href="https://www.linkedin.com/in/volodymyr-rublenyk-5334a9323/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
