import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { useStyles } from "./education.styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useFetchStatus from "../../../../hooks/useFetchStatus";
import { useDispatch, useSelector } from "react-redux";
import { fetchCertificatesAsync } from "./store/action";
import { selectCertificates } from "./store/selector";
import { CircularProgress } from "@mui/material";
import { useSwipeable } from "react-swipeable";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction === 1 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
  exit: (direction: number) => ({
    x: direction === 1 ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: 0.6 },
  }),
};

const Education: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const { classes } = useStyles();
  const { loading, error } = useFetchStatus();
  const dispatch = useDispatch();
  const certificates = useSelector(selectCertificates);

  // Fetch certificates if not already loaded
  useEffect(() => {
    if (certificates.length === 0) {
      dispatch(fetchCertificatesAsync.request());
    }
  }, [dispatch, certificates.length]);

  // Function to go to the next slide
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % certificates.length);
  }, [certificates.length]);

  // Function to go to the previous slide
  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? certificates.length - 1 : prevSlide - 1
    );
  };

  // Swipe handlers for mobile support
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Loading and error handling
  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box className={classes.education}>
      <Typography variant="h2" className={classes.education__title}>
        My Certificates
        <span className={classes.education__title_dot}>.</span>
      </Typography>

      <Box {...swipeHandlers} className={classes.slider}>
        <motion.div
          className={classes.slide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          key={currentSlide}
        >
          <Typography variant="h5" className={classes.slide_title}>
            {certificates[currentSlide]?.title}
          </Typography>
          <img
            src={certificates[currentSlide]?.image}
            alt={certificates[currentSlide]?.title}
            className={classes.certificate_image}
          />
        </motion.div>

        <Box className={classes.buttonContainer}>
          <IconButton
            onClick={prevSlide}
            className={classes.prevButton}
            aria-label="Previous Slide"
          >
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton
            onClick={nextSlide}
            className={classes.nextButton}
            aria-label="Next Slide"
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Education;
