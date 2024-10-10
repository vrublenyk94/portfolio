import { Box, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useStyles } from "./myExperience.styles";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import { selectExperience } from "../../../home/components/experience/store/selectors";
import useFetchStatus from "../../../../hooks/useFetchStatus";
import { fetchExperienceAsync } from "../../../home/components/experience/store/actions";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  description: string[]; // Assuming description is an array of strings
}

interface MyExperienceItemProps {
  exp: ExperienceItem;
  index: number;
}

const MyExperienceItem: React.FC<MyExperienceItemProps> = ({ exp, index }) => {
  const { classes } = useStyles();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      key={exp.id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Box className={classes.myExperience__wrapper}>
        <Box className={classes.myExperience__number_wrapper}>
          <Typography
            className={`${classes.myExperience__number} ${
              index === 0 ? classes.firstChild : ""
            }`}
            variant="h2"
          >
            {index + 1}
          </Typography>
        </Box>

        <Box className={classes.myExperience__role__wrapper}>
          <Typography className={classes.myExperience__role}>
            {exp.role}
          </Typography>
          <Typography className={classes.myExperience__company}>
            {exp.company}
          </Typography>
          <Typography
            variant="h5"
            className={classes.myExperience__description}
          >
            {exp.description.join(", ")}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

const MyExperience: React.FC = () => {
  const { loading, error } = useFetchStatus();
  const dispatch = useDispatch();
  const experience = useSelector(selectExperience);
  const { classes } = useStyles();
  const [scrollProgress, setScrollProgress] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

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
    if (experience.length === 0) {
      dispatch(fetchExperienceAsync.request());
    }
  }, [dispatch, experience.length]);
  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box className={classes.myExperience} ref={containerRef}>
      <Typography variant="h2" className={classes.myExperience__title}>
        My Experience
        <span className={classes.myExperience__title_dot}>.</span>
      </Typography>
      <motion.div
        className={classes.globalScrollBar}
        initial={{ height: "0%" }}
        animate={{ height: `${scrollProgress * 100}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {experience.map((experience, index) => (
        <MyExperienceItem exp={experience} index={index} key={index} />
      ))}
    </Box>
  );
};

export default MyExperience;
