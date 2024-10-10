import { Box } from "@mui/system";
import React from "react";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import MainPhoto from "../../components/mainPhoto/MainPhoto";
import { useStyles } from "./contact.styles";
import { Typography, Button } from "@mui/material";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
const Contact: React.FC = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.contact}>
      <Box className={classes.contact__title_wrapper}>
        <SectionTitle title="Get In Touch" />
        <Typography variant="h5" className={classes.contact__description}>
          Looking to partner or work together? Reach out through the form and
          I'll get back to you in the next 48 hours.
        </Typography>
        <Box className={classes.contact__button_wrapper}>
          <a
            href="mailto:vrublenyk94@gmail.com"
            style={{ textDecoration: "none" }}
          >
            <Button className={classes.contact__button} variant="contact">
              <MailOutlineRoundedIcon className={classes.contact__icon} />
              vrublenyk94@gmail.com
            </Button>
          </a>
        </Box>
        <Box className={classes.contact__button_wrapper}>
          <a href="tel:+447856429479" style={{ textDecoration: "none" }}>
            <Button className={classes.contact__button} variant="contact">
              <LocalPhoneOutlinedIcon className={classes.contact__icon} />
              +447856429479
            </Button>
          </a>
        </Box>
      </Box>
      <MainPhoto />
    </Box>
  );
};

export default Contact;
