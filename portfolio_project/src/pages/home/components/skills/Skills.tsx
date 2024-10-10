import React, { useEffect, useState } from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import { useStyles } from "./skills.styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchSkillsAsync } from "./store/actions";
import { selectSkills } from "./store/selectors";
import useFetchStatus from "../../../../hooks/useFetchStatus";

const Skills: React.FC = () => {
  const { loading, error } = useFetchStatus();
  const { classes } = useStyles();
  const [showAll, setShowAll] = useState(false);
  const dispatch = useDispatch();
  const skills = useSelector(selectSkills);

  useEffect(() => {
    if (skills.length === 0) {
      dispatch(fetchSkillsAsync.request());
    }
  }, [dispatch, skills.length]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box className={classes.skills}>
      <SectionTitle title="Skills" />
      <Box
        className={`${classes.skills__wrapper} ${
          showAll ? classes.skills__expanded : ""
        }`}
      >
        {skills.map((skill, index) => (
          <Typography key={index} className={classes.skills__item}>
            {skill.name}
          </Typography>
        ))}
      </Box>
      <Button
        onClick={() => setShowAll(!showAll)}
        className={classes.skills__toggleButton}
      >
        {showAll ? "Show Less" : "Show More"}
      </Button>
    </Box>
  );
};

export default Skills;
