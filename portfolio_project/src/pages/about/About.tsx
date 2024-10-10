import React from "react";
import { Box, Typography } from "@mui/material";
import AnimatedSkills from "./components/animatedSkills/AnimatedSkills";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import Education from "./components/education/Education";
import MyExperience from "./components/myExperience/MyExperience";
import { useStyles } from "./about.styles";

const About: React.FC = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.about}>
      <SectionTitle title="About me" />
      <Typography variant="h5" className={classes.about__description}>
        Developing beautiful and functional websites is what I love doing, and
        that's why I give my all in every new challenge.
      </Typography>
      <AnimatedSkills />
      <MyExperience />
      <Education />
    </Box>
  );
};

export default About;
