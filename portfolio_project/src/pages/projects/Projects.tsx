import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useFetchStatus from "../../hooks/useFetchStatus";
import { CircularProgress } from "@mui/material";
import { fetchProjectsAsync } from "../home/components/projects/store/actions";
import { selectProjects } from "../home/components/projects/store/selectors";
import { motion } from "framer-motion";
import { Typography, Box } from "@mui/material";
import { useStyles } from "./projects.styles";
import { useInView } from "react-intersection-observer";
import ProjectCard from "../../components/projectCard/projectCard";
import { IProject } from "../home/components/projects/store/reducer";

interface IProjectItemProps {
  project: IProject;
}

const ProjectItem: React.FC<IProjectItemProps> = ({ project }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <ProjectCard
        page="projects"
        id={project.id}
        title={project.title}
        description={project.description}
        image={project.image}
        link={project.link}
        bg={project.bg}
      />
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { classes } = useStyles();
  const { loading, error } = useFetchStatus();
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const scrollTop = window.scrollY;
      const containerHeight = containerRef.current.scrollHeight;
      const windowHeight = window.innerHeight;

      const scrollFraction =
        (scrollTop - containerTop + windowHeight) /
        (containerHeight + windowHeight);
      setScrollProgress(Math.min(Math.max(scrollFraction, 0), 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (projects.length === 0) {
      dispatch(fetchProjectsAsync.request());
    }
  }, [dispatch, projects.length]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box className={classes.projects}>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "5px",
          width: `${scrollProgress * 100}%`,
          background: "blue",
          zIndex: 1000,
        }}
      />

      <Typography variant="h2" className={classes.projects__title_large}>
        My
        <span className={classes.projects__title_large_color}> Best</span>{" "}
        Creations
        <span className={classes.projects__title_dot}>.</span>
      </Typography>
      <Typography className={classes.projects__description} variant="h5">
        Developing Robust and Stylish Web Applications
      </Typography>
      <Box className={classes.projects__wrapper} ref={containerRef}>
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
