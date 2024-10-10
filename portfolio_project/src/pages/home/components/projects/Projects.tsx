import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import ProjectCard from "../../../../components/projectCard/projectCard";
import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import { useStyles } from "./project.styles";
import useFetchStatus from "../../../../hooks/useFetchStatus";
import { useDispatch, useSelector } from "react-redux";
import { selectProjects } from "./store/selectors";
import { fetchProjectsAsync } from "./store/actions";

const Projects: React.FC = () => {
  const { loading, error } = useFetchStatus();
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);
  const { classes } = useStyles();

  useEffect(() => {
    if (projects.length === 0) {
      dispatch(fetchProjectsAsync.request());
    }
  }, [dispatch, projects.length]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box className={classes.projects}>
      <SectionTitle title={"My Projects"} />
      <Box className={classes.projects__wrapper}>
        {projects.slice(0, 4).map((project, index) => (
          <ProjectCard
            key={index}
            page={"home"}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            bg={project.bg}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
