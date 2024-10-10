import { Box } from "@mui/system";
import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import { useStyles } from "./myStory.styles";

const MyStory: React.FC = () => {
  const { classes } = useStyles();
  const [showAll, setShowAll] = useState(false);

  return (
    <Box className={classes.story}>
      <SectionTitle title={"My Story"} />
      <Box
        className={`${classes.story__wrapper} ${
          showAll ? classes.story__expanded : ""
        }`}
      >
        <Typography className={classes.story__description}>
          My journey as a front-end developer began about a year and a half ago,
          driven by a passion for creating and learning. I started immersing
          myself in the world of coding while living in Poland, where I dove
          into the basics of front-end development and began honing my skills.
        </Typography>
        <Typography className={classes.story__description}>
          Determined to expand my horizons and challenge myself further, I moved
          to the UK to pursue my dream of becoming a front-end developer.
          Despite being relatively new to the field, I embraced every
          opportunity to learn and grow. My dedication to mastering new
          technologies and my unwavering commitment to improvement have been the
          cornerstones of my journey so far.
        </Typography>
        <Typography className={classes.story__description}>
          Over the past year, I've been building my expertise through various
          projects and learning experiences, constantly pushing myself to
          achieve a higher level of proficiency. My perseverance and hard work
          have led me to interviews with Ukrainian IT companies, where I’ve been
          able to showcase my skills and passion.
        </Typography>
        <Typography className={classes.story__description}>
          Now, I am eager to find a full-time position in the UK where I can
          contribute my skills, continue to learn, and grow professionally. I'm
          excited about the possibilities and committed to bringing my best to
          every opportunity that comes my way. I truly love what I do and am
          looking forward to the next chapter in my career!
        </Typography>
      </Box>
      <Button
        onClick={() => setShowAll(!showAll)}
        className={classes.story__toggleButton}
      >
        {showAll ? "Show Less" : "Show More"}
      </Button>
    </Box>
  );
};

export default MyStory;
